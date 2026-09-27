"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "@/components/language/LanguageSwitcher";

const links = [
  ["nav.home", "/"],
  ["nav.solutions", "/#solutions"],
  ["nav.customer", "/customer"],
  ["nav.services", "/#services"],
  ["nav.platform", "/platform"],
  ["nav.about", "/#about"],
  ["nav.contact", "/#contact"],
] as const;

export function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-brand-950/75 shadow-xl backdrop-blur-2xl" : "bg-transparent"}`}>
      <nav className="page-shell flex h-20 items-center justify-between text-white" aria-label={t("nav.primary")}>
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500 shadow-glow"><Zap className="h-4 w-4 fill-current" /></span>
          <span>Aurelia <span className="text-brand-300">Utilities</span></span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-[13px] font-medium text-white/70 transition hover:text-white">{t(label)}</Link>)}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher dark />
          <Link href="/customer/service-requests" className="button-primary">{t("nav.support")}</Link>
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? t("common.closeMenu") : t("common.openMenu")}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-brand-950/95 px-4 pb-6 text-white backdrop-blur-2xl lg:hidden">
          <div className="page-shell flex flex-col gap-1 px-0 pt-4">
            {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm text-white/75 hover:bg-white/5 hover:text-white">{t(label)}</Link>)}
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
              <LanguageSwitcher dark />
              <Link href="/customer/service-requests" onClick={() => setOpen(false)} className="button-primary">{t("nav.support")}</Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
