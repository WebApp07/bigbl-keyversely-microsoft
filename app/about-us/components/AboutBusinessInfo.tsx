const BUSINESS = {
  legalName: "Keyversely LLC",
  entityId: "2025-001824045",
  entityType: "Limited Liability Company (LLC)",
  formationState: "Wyoming, United States",
  formationDate: "November 24, 2025",
  status: "Active / Good Standing",
  addressDisplay:
    "63 N Burritt Ave, Rm 100 PMB 1180\nBuffalo, Wyoming 82834\nUnited States",
  website: "https://www.bigbl.com",
  email: "support@keyversely.com",
  phone: { display: "(307) 785-6160", href: "tel:+13077856160" },
  hours: "Monday – Friday, 9:00 AM – 6:00 PM ET",
};

type Row =
  | { label: string; value: string; type?: "text" }
  | { label: string; value: string; href: string; type: "link" }
  | { label: string; value: string; type: "multiline" };

const rows: Row[] = [
  { label: "Legal Name", value: BUSINESS.legalName },
  { label: "Entity ID", value: BUSINESS.entityId },
  { label: "Entity Type", value: BUSINESS.entityType },
  { label: "Formation State", value: BUSINESS.formationState },
  { label: "Formation Date", value: BUSINESS.formationDate },
  { label: "Status", value: BUSINESS.status },
  { label: "Address", value: BUSINESS.addressDisplay, type: "multiline" },
  {
    label: "Website",
    value: BUSINESS.website.replace("https://", ""),
    href: BUSINESS.website,
    type: "link",
  },
  {
    label: "Email",
    value: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
    type: "link",
  },
  {
    label: "Phone",
    value: BUSINESS.phone.display,
    href: BUSINESS.phone.href,
    type: "link",
  },
  { label: "Hours", value: BUSINESS.hours },
];

export default function AboutBusinessInfo() {
  return (
    <section className="mb-12 rounded-xl border border-border bg-muted/40 p-7">
      <h2 className="text-2xl font-bold mb-5 text-foreground">
        Business Information
      </h2>
      <div className="divide-y divide-border">
        {rows.map((row) => (
          <div key={row.label} className="flex gap-4 py-2.5 text-sm">
            <span className="w-36 shrink-0 font-semibold text-muted-foreground">
              {row.label}
            </span>
            <span className="text-foreground whitespace-pre-line">
              {row.type === "link" ? (
                <a
                  href={(row as { href: string }).href}
                  className="text-primary underline underline-offset-4 hover:opacity-80"
                >
                  {row.value}
                </a>
              ) : (
                row.value
              )}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
