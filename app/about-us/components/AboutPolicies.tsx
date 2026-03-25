const policies = [
  { href: "/refund-policy",    label: "Refund Policy",    desc: "what happens if your key doesn't work and how we make it right." },
  { href: "/terms-of-service", label: "Terms of Service", desc: "the rules that apply to every purchase on our store." },
  { href: "/privacy-policy",   label: "Privacy Policy",   desc: "how we handle your personal information (short version: we don't sell it)." },
];

export default function AboutPolicies() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-foreground">Policies</h2>
      <p className="text-base text-muted-foreground leading-relaxed mb-4">
        We believe you should know exactly what you're agreeing to before you buy:
      </p>
      <ul className="space-y-2 list-disc pl-5 text-muted-foreground text-base">
        {policies.map((policy) => (
          <li key={policy.href} className="leading-relaxed">
            <a
              href={policy.href}
              className="text-primary underline underline-offset-4 hover:opacity-80 font-medium"
            >
              {policy.label}
            </a>
            {" "}— {policy.desc}
          </li>
        ))}
      </ul>
    </section>
  );
}
