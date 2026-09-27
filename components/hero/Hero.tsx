"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowDownRight, ArrowRight, MessageCircle } from "lucide-react";
import gsap from "gsap";
import { Navbar } from "@/components/navbar/Navbar";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { useLanguage } from "@/hooks/useLanguage";
import { companyConfig } from "@/lib/config";

const UtilityScene = dynamic(() => import("@/components/three/UtilityScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-white/[.025]" />,
});

export function Hero() {
  const { t } = useLanguage();
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo("[data-hero-reveal]", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: .12, ease: "power3.out", delay: .2 });
      gsap.fromTo("[data-hero-scene]", { scale: 1.08, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" });
    }, root);
    return () => ctx.revert();
  }, []);

  const waHref = `https://wa.me/${companyConfig.whatsappNumber}?text=${encodeURIComponent(t("whatsapp.general"))}`;

  return (
    <section ref={root} className="noise relative min-h-screen overflow-hidden bg-brand-950 text-white">
      <Navbar />
      <div className="hero-grid absolute inset-0 opacity-70" />
      <div className="soft-orb absolute -left-24 top-24 h-96 w-96 rounded-full bg-brand-500/15" />
      <div className="soft-orb absolute right-0 top-0 h-[34rem] w-[34rem] rounded-full bg-brand-700/20" />
      <div className="page-shell relative z-10 grid min-h-screen items-center gap-12 pb-16 pt-28 lg:grid-cols-[.9fr_1.1fr] lg:pb-10 lg:pt-24">
        <div className="relative z-10 max-w-3xl">
          <div data-hero-reveal><DemoBadge /></div>
          <p data-hero-reveal className="eyebrow mt-6 text-brand-300">{t("hero.eyebrow")}</p>
          <h1 data-hero-reveal className="headline-xl mt-5 max-w-[11ch] text-white">{t("hero.title")}</h1>
          <p data-hero-reveal className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">{t("hero.description")}</p>
          <div data-hero-reveal className="mt-8 flex flex-wrap gap-3">
            <Link href="#solutions" className="button-primary">{t("hero.explore")} <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/customer" className="button-dark">{t("hero.portal")} <ArrowDownRight className="h-4 w-4" /></Link>
            <a href={waHref} target="_blank" rel="noreferrer" className="button-dark"><MessageCircle className="h-4 w-4 text-brand-300" /> {t("hero.whatsapp")}</a>
          </div>
          <div data-hero-reveal className="mt-10 grid max-w-lg grid-cols-3 gap-3 border-t border-white/10 pt-6 text-xs text-white/45">
            <div><span className="block text-lg font-semibold text-white">3D</span>{t("hero.metric3d")}</div>
            <div><span className="block text-lg font-semibold text-white">EN / FR</span>{t("hero.metricLanguage")}</div>
            <div><span className="block text-lg font-semibold text-white">100%</span>{t("hero.metricFrontend")}</div>
          </div>
        </div>
        <div data-hero-scene data-cursor="3d" className="relative h-[48vh] min-h-[390px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[.06] to-white/[.015] shadow-[0_50px_120px_rgba(0,0,0,.32)] lg:h-[78vh] lg:min-h-[620px]">
          <div className="absolute left-5 top-5 z-10 rounded-full border border-white/10 bg-brand-950/55 px-3 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-white/55 backdrop-blur-xl">{t("hero.sceneLabel")}</div>
          <UtilityScene />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-brand-950/65 to-transparent" />
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-bold uppercase tracking-[.2em] text-white/35 md:flex"><span className="h-px w-10 bg-white/20" /> Scroll <ArrowDownRight className="h-3 w-3" /></div>
    </section>
  );
}
