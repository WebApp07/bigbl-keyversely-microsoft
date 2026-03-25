export default function AboutHero() {
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-8">
        <a href="/" className="hover:underline text-primary">Home</a>
        <span className="mx-2">›</span>
        <span>About Us</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight mb-2 text-foreground">
        About Keyversely
      </h1>
      <p className="text-lg text-muted-foreground mt-0 mb-12">
        A software store built on one simple idea — everyone deserves access to
        genuine software, without paying a fortune for it.
      </p>

      <hr className="border-border mb-12" />
    </>
  );
}
