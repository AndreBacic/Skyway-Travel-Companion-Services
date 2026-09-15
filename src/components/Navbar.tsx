import { useEffect, useState } from "react";
import "./Navbar.scss";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

function PlaneMark() {
  return (
    <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M32 8c-1.7 0-3 1.2-3.2 2.9l-.6 5.9L10.9 26.6c-1.2.7-1.2 2.5 0 3.3L30 40v8h4v-8c4.4-2.1 9.1-4.8 14.6-8.1-2.6-.5-5.2-.4-7.6.4v-4l-1.2-4 16.2-4.4c1.1-.3 1.4-1.9.3-2.5l-4.7-2.6c-.4-.2-1-.2-1.5-.1L37.4 16l-2.9-13.1C34.2 9.2 32.9 8 32 8z"
        fill="#c99436"
      />
      <path
        d="M17 48c9.3 4.6 20.7 4.6 30 0"
        fill="none"
        stroke="#142c4c"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={() => setOpen(false)}>
          <PlaneMark />
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">Skyway</span>
            <span className="navbar__brand-sub">Travel Companion Services</span>
          </span>
        </a>

        <nav className={`navbar__links ${open ? "is-open" : ""}`} aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-gold navbar__cta" onClick={() => setOpen(false)}>
            Book a Companion
          </a>
        </nav>

        <button
          type="button"
          className={`navbar__burger ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-controls="primary-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
