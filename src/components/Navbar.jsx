import { useState, useEffect } from "react";
import { navLinks, personalInfo } from "../data/portfolioData";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(249,246,240,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "4px", fontWeight: 700, fontSize: "1.05rem", color: "var(--text-primary)" }}>
          <span style={{ color: "#f97316", fontWeight: 900 }}>//</span>
          <span>Ajay</span>
        </a>

        
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-nav">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            style={{
              padding: "0.45rem 1.1rem",
              background: "var(--text-primary)",
              color: "#fff",
              borderRadius: "99px",
              fontSize: "0.82rem",
              fontWeight: 500,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = 0.8)}
            onMouseLeave={(e) => (e.target.style.opacity = 1)}
          >
            Hire me
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer" }}
          className="mobile-toggle"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          style={{
            background: "var(--bg-primary)",
            borderTop: "1px solid var(--border)",
            padding: "1.25rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            style={{
              padding: "0.5rem 1.2rem",
              background: "var(--text-primary)",
              color: "#fff",
              borderRadius: "99px",
              fontSize: "0.85rem",
              fontWeight: 500,
              width: "fit-content",
            }}
          >
            Hire me
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}