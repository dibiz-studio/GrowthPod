"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Icons";
import { navLinks } from "@/lib/site-data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <div className="wrap">
        <a href="#" className="logo" aria-label="Growth Pod home">
          <Logo />
          Growth Pod
        </a>
        <nav className="nav-links" aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="https://calendly.com/snigdhasingh-dibizsolution/discovery-call" className="btn btn-black">
          Book a discovery call
        </a>
      </div>
    </header>
  );
}
