export function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "onlypals",
  )}`;

  return (
    <footer
      className="bg-card border-t border-border py-10 mt-0"
      data-ocid="footer"
    >
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-primary-foreground gradient-primary text-sm shadow-sm">
            OP
          </div>
          <div>
            <p className="font-display font-bold text-foreground">Only Pals</p>
            <p className="text-xs text-muted-foreground">
              Every child deserves to be understood, not just seen.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          {["Brand Essence", "Campaign", "Trust & Safety"].map((label) => (
            <button
              key={label}
              type="button"
              onClick={() =>
                document
                  .getElementById(
                    label
                      .toLowerCase()
                      .replace(/[& ]+/g, "-")
                      .replace(/-+/g, "-"),
                  )
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-primary transition-smooth"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs text-muted-foreground">
            © {year}. Built with love using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
