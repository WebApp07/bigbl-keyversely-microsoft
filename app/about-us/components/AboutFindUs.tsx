const socials = [
  {
    href: "https://www.instagram.com/Bigblkey/",
    label: "Instagram",
    desc: "updates, promotions, and new products.",
  },
  {
    href: "https://www.trustpilot.com/review/bigbl.com",
    label: "Trustpilot",
    desc: "read reviews from real customers who've bought from us.",
  },
  {
    href: "https://marketplace.microsoft.com/en-us/marketplace/partner-dir/f2266aa5-5704-4384-ad55-100cf2c530cb/overview",
    label: "Microsoft Marketplace",
    desc: "our verified partner listing.",
  },
];

export default function AboutFindUs() {
  return (
    <section className="mb-14">
      <h2 className="text-2xl font-bold mb-4 text-foreground">
        Find Us Online
      </h2>
      <ul className="space-y-2 list-disc pl-5 text-muted-foreground text-base">
        {socials.map((item) => (
          <li key={item.href} className="leading-relaxed">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:opacity-80 font-medium"
            >
              {item.label}
            </a>{" "}
            — {item.desc}
          </li>
        ))}
      </ul>
    </section>
  );
}
