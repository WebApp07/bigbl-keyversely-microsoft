const promises = [
  {
    title: "Your key will work.",
    body: "Every license we sell is genuine. If for any reason it doesn't activate, we'll replace it or refund you — within 24 hours, no runaround.",
  },
  {
    title: "You'll hear from a real person.",
    body: "Our support team responds to every message. If something goes wrong, you won't be talking to a bot.",
  },
  {
    title: "No hidden anything.",
    body: "The price you see is the price you pay. Our policies are written in plain language — no fine print designed to catch you out.",
  },
];

export default function AboutPromise() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-foreground">Our Promise to You</h2>
      <p className="text-base text-muted-foreground leading-relaxed mb-4">
        We know buying software online can feel uncertain. Here's what we commit to:
      </p>
      <ul className="space-y-3 list-disc pl-5 text-muted-foreground text-base">
        {promises.map((item) => (
          <li key={item.title} className="leading-relaxed">
            <span className="font-semibold text-foreground">{item.title}</span>{" "}
            {item.body}
          </li>
        ))}
      </ul>
    </section>
  );
}
