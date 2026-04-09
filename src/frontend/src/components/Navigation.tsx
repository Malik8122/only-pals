import { useScrollSpy } from "@/hooks/useScrollSpy";
import type { NavItem } from "@/types";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_ITEMS: NavItem[] = [
  { id: "brand-essence", label: "Brand Essence", href: "#brand-essence" },
  { id: "why-us", label: "Why Us", href: "#why-us" },
  { id: "mission", label: "Mission", href: "#mission" },
  { id: "problem", label: "Problem", href: "#problem" },
  { id: "insight", label: "Insight", href: "#insight" },
  { id: "audience", label: "Audience", href: "#audience" },
  { id: "brand-avatar", label: "Brand Avatar", href: "#brand-avatar" },
  { id: "identity", label: "Identity", href: "#identity" },
  { id: "campaign", label: "Campaign", href: "#campaign" },
  { id: "strategy", label: "Strategy", href: "#strategy" },
  { id: "pr", label: "PR", href: "#pr" },
  { id: "launch", label: "Launch", href: "#launch" },
  { id: "trust", label: "Trust", href: "#trust" },
  { id: "conclusion", label: "Conclusion", href: "#conclusion" },
];

const sectionIds = NAV_ITEMS.map((i) => i.id);

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
      data-ocid="nav"
    >
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
          aria-label="Only Pals - scroll to top"
        >
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg font-bold text-primary-foreground gradient-primary shadow-sm">
            OP
          </div>
          <span className="font-display font-bold text-lg text-foreground">
            Only<span className="text-primary"> Pals</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center gap-0.5 overflow-x-auto max-w-3xl"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.slice(0, 9).map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => scrollTo(item.href)}
              data-ocid={`nav-${item.id}`}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-smooth whitespace-nowrap ${
                activeId === item.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollTo("#campaign")}
            className="ml-2 px-4 py-2 rounded-xl text-xs font-semibold text-primary-foreground gradient-primary transition-smooth hover:opacity-90 active:scale-95 whitespace-nowrap"
            data-ocid="nav-cta"
          >
            View Campaign ✨
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-xl bg-muted/60 text-foreground transition-smooth hover:bg-muted"
          aria-label={open ? "Close menu" : "Open menu"}
          data-ocid="nav-hamburger"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-card/98 backdrop-blur-md border-t border-border px-4 py-4 grid grid-cols-2 gap-1.5 max-h-[80vh] overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => scrollTo(item.href)}
              data-ocid={`mob-nav-${item.id}`}
              className={`px-3 py-2.5 rounded-xl text-sm font-medium text-left transition-smooth ${
                activeId === item.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
