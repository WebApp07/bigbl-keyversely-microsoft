import Groq from "groq-sdk";
import { prisma } from "@/db/prisma";
import slugify from "slugify";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// ── Topic pool ────────────────────────────────────────────────
// Organised by category so each run gets variety
const TOPICS = {
  windows: [
    "How to activate Windows 11 Pro license key step by step",
    "How to transfer a Windows license to a new PC",
    "Top 5 reasons to upgrade from Windows 10 to Windows 11",
    "Windows 11 system requirements — is your PC compatible",
    "How to fix Windows activation errors",
    "Windows 11 Pro features that boost productivity",
    "Windows 11 Home vs Pro — which one should you buy",
    "How to reinstall Windows 11 without losing your files",
    "What happens to your Windows license when you change hardware",
    "How to check if your Windows license is genuine",
  ],
  "microsoft-office": [
    "Microsoft Office 2024 vs Office 2021 — which should you buy",
    "How to install Microsoft Office on Mac",
    "Microsoft Office Home vs Professional — key differences",
    "How to get genuine Microsoft Office at the best price",
    "How to activate Microsoft Office without a Microsoft account",
    "Office 2024 new features you need to know about",
    "Microsoft 365 vs Office 2024 — subscription vs one-time license",
    "How to transfer your Office license to a new computer",
    "How to fix Microsoft Office activation errors",
    "Is buying a Microsoft Office key online safe",
  ],
  "how-to-guides": [
    "How to buy software keys online safely — a beginner guide",
    "How to activate a digital product key delivered by email",
    "What to do if your software key does not work",
    "How to check your Windows version before buying a license",
    "How to download Windows 11 ISO from Microsoft officially",
    "Step by step guide to installing Office 2024 from scratch",
    "How to use BitLocker encryption on Windows 11 Pro",
    "How to set up a new PC with a digital Windows license",
    "How to verify a genuine Microsoft software license",
    "How to backup your product keys before formatting your PC",
  ],
};

const ALL_TOPICS = Object.entries(TOPICS).flatMap(([categorySlug, topics]) =>
  topics.map((topic) => ({ topic, categorySlug })),
);

function pickUniqueTopics(count: number) {
  const shuffled = [...ALL_TOPICS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// ── Generate a single post ────────────────────────────────────
async function generatePost(
  topic: string,
  categorySlug: string,
  adminId: string,
) {
  console.log(`\n📝 Generating: "${topic}"`);

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "user",
        content: `Write a detailed SEO-optimized blog post about: "${topic}"

This blog is for Keyversely LLC (bigbl.com), a US-registered ecommerce store selling genuine digital software licenses for Windows and Microsoft Office — delivered instantly by email.

Tone: helpful, honest, and human. Write like an expert who genuinely wants to help the reader, not like a sales pitch.

Return ONLY a valid JSON object with no extra text, no markdown, no backticks:
{
  "title": "SEO optimized title (max 65 characters)",
  "excerpt": "2 sentence description under 160 characters",
  "content": "Full HTML article using h2, p, ul, li tags. Minimum 700 words. No inline styles.",
  "readTime": 5,
  "categorySlug": "${categorySlug}"
}`,
      },
    ],
  });

  const text = completion.choices[0].message.content ?? "";
  const cleaned = text.replace(/```json|```/g, "").trim();
  const generated = JSON.parse(cleaned);

  const category = await prisma.blogCategory.findUnique({
    where: { slug: generated.categorySlug ?? categorySlug },
  });

  if (!category) {
    throw new Error(
      `Category not found: ${generated.categorySlug ?? categorySlug}`,
    );
  }

  const baseSlug = slugify(generated.title, { lower: true, strict: true });
  const existing = await prisma.blogPost.findUnique({
    where: { slug: baseSlug },
  });
  const finalSlug = existing ? `${baseSlug}-${Date.now()}` : baseSlug;

  const post = await prisma.blogPost.create({
    data: {
      title: generated.title,
      slug: finalSlug,
      excerpt: generated.excerpt,
      content: generated.content,
      published: true,
      featured: false,
      readTime: generated.readTime ?? 5,
      authorId: adminId,
      categoryId: category.id,
    },
  });

  console.log(`✅ Created: "${post.title}"`);
  return post;
}

// ── Main — runs 3 posts per execution ────────────────────────
export async function runAutoBlog(count = 3) {
  try {
    const admin = await prisma.user.findFirst({
      where: { role: "admin" },
      select: { id: true },
    });

    if (!admin) {
      console.error("❌ No admin user found");
      return { success: false, error: "No admin user found" };
    }

    const selections = pickUniqueTopics(count);
    const results = [];

    for (const { topic, categorySlug } of selections) {
      try {
        const post = await generatePost(topic, categorySlug, admin.id);
        results.push({ success: true, post });

        // Small delay between Groq calls to avoid rate limiting
        if (
          selections.indexOf({ topic, categorySlug }) <
          selections.length - 1
        ) {
          await new Promise((r) => setTimeout(r, 2000));
        }
      } catch (err) {
        console.error(`❌ Failed for "${topic}":`, err);
        results.push({ success: false, topic, error: String(err) });
      }
    }

    const succeeded = results.filter((r) => r.success).length;
    console.log(`\n🎉 Done — ${succeeded}/${count} posts created`);
    return { success: true, results };
  } catch (err) {
    console.error("❌ Auto blog error:", err);
    return { success: false, error: String(err) };
  } finally {
    await prisma.$disconnect();
  }
}
