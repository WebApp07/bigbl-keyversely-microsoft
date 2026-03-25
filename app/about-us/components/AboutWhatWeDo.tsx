const MICROSOFT_PARTNER_URL =
  "https://marketplace.microsoft.com/en-us/marketplace/partner-dir/f2266aa5-5704-4384-ad55-100cf2c530cb/overview";

export default function AboutWhatWeDo() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-foreground">What We Do</h2>
      <p className="text-base text-muted-foreground leading-relaxed mb-3">
        Keyversely LLC is a digital software retailer. We sell genuine activation
        keys for Windows, Microsoft Office, antivirus programs, and other essential
        software — all delivered to your inbox within minutes of purchase.
      </p>
      <p className="text-base text-muted-foreground leading-relaxed mb-3">
        Our licenses come through verified distribution channels, and we are proud
        to be a recognized partner on the{" "}
        <a
          href={MICROSOFT_PARTNER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4 hover:opacity-80"
        >
          Microsoft Commercial Marketplace
        </a>
        . That listing isn't a badge we put on ourselves — it's Microsoft's own
        directory, and it's one of the clearest ways we can show you that what we
        sell is real.
      </p>
      <p className="text-base text-muted-foreground leading-relaxed">
        No physical shipments. No waiting days. Just a working key in your inbox, fast.
      </p>
    </section>
  );
}
