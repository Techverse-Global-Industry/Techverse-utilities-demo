"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, BatteryCharging, Bolt, Droplets, Gauge, Headphones, HeartHandshake, MessageCircle, RadioTower, ShieldCheck, Smartphone, Sparkles, Wrench } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { useLanguage } from "@/hooks/useLanguage";

const solutionIcons = [Bolt, Droplets, RadioTower, Gauge, Wrench, Headphones];
const solutionKeys = ["energy", "water", "infrastructure", "smart", "field", "support"];
const experienceKeys = ["easyBilling", "fastSupport", "installations", "maintenance", "updates", "portal"];
const experienceIcons = [BarChart3, HeartHandshake, Sparkles, Wrench, ShieldCheck, Smartphone];

export function MarketingSections() {
  const { t } = useLanguage();
  const processes = ["request", "schedule", "dispatch", "serviceStep", "confirm", "monitor"];
  return (
    <>
      <section id="solutions" className="section-shell">
        <Reveal className="max-w-3xl"><p className="eyebrow">{t("marketing.solutionsEyebrow")}</p><h2 className="headline-lg mt-4">{t("marketing.solutionsTitle")}</h2><p className="body-lg mt-6 max-w-2xl">{t("marketing.solutionsBody")}</p></Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutionKeys.map((key, index) => {
            const Icon = solutionIcons[index];
            return <Reveal key={key} delay={index * .05}><article className="surface-card group min-h-56 p-6 transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(160,89,55,.14)]"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/10 text-brand-500 transition duration-500 group-hover:rotate-6 group-hover:scale-110"><Icon /></div><h3 className="mt-8 text-xl font-semibold tracking-tight">{t(`marketing.${key}`)}</h3><div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-brand-500 opacity-55 transition group-hover:opacity-100">{t("marketing.hoverHint")} <ArrowRight className="h-3.5 w-3.5" /></div></article></Reveal>;
          })}
        </div>
      </section>

      <section id="about" className="relative overflow-hidden bg-brand-950 text-white">
        <div className="page-shell grid min-h-[720px] items-stretch lg:grid-cols-2">
          <div className="relative min-h-[440px] overflow-hidden lg:min-h-[720px]">
            <Image src="/images/utility/infrastructure.svg" alt="Stylized demonstration of a connected utility city" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-950/70" />
          </div>
          <div className="flex items-center py-16 lg:pl-16">
            <Reveal><DemoBadge /><h2 className="headline-lg mt-6 max-w-xl">{t("marketing.infrastructureTitle")}</h2><p className="mt-6 max-w-xl text-base leading-7 text-white/55">{t("marketing.infrastructureBody")}</p>
              <div className="mt-10 flex flex-wrap gap-2">{["power", "waterShort", "connectivity", "infrastructure", "smartOps"].map((key) => <span key={key} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/65">{t(`marketing.${key}`)}</span>)}</div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal><p className="eyebrow">{t("marketing.customerExperienceEyebrow")}</p><h2 className="headline-lg mt-4">{t("marketing.experienceTitle")}</h2><p className="body-lg mt-6">{t("marketing.experienceBody")}</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{experienceKeys.map((key, index) => { const Icon = experienceIcons[index]; return <div key={key} className="flex items-center gap-3 rounded-2xl border border-brand-950/[.07] bg-white p-4"><span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500/10 text-brand-500"><Icon className="h-4 w-4" /></span><span className="text-sm font-semibold">{t(`marketing.${key}`)}</span></div>; })}</div></Reveal>
          <Reveal className="relative"><div className="relative aspect-[4/3] overflow-hidden rounded-[2.2rem] border border-brand-950/10 bg-brand-950 shadow-[0_40px_100px_rgba(50,32,31,.18)]"><Image src="/images/utility/customer.svg" alt="Stylized customer mobile utility portal concept" fill className="object-cover" /></div></Reveal>
        </div>
      </section>

      <section id="services" className="overflow-hidden bg-brand-mist/70 py-20 sm:py-28">
        <div className="page-shell">
          <Reveal className="max-w-3xl"><p className="eyebrow">{t("marketing.servicesEyebrow")}</p><h2 className="headline-lg mt-4">{t("marketing.servicesTitle")}</h2></Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{["energyShort", "waterShort", "infrastructure", "maintenanceShort", "installationShort", "supportShort"].map((key, i) => <Reveal key={key} delay={i*.04}><div className="group relative min-h-64 overflow-hidden rounded-[2rem] border border-brand-950/[.08] bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"><div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-brand-500/[.06] transition duration-500 group-hover:scale-150"/><span className="text-5xl font-semibold tracking-[-.06em] text-brand-950/[.08]">0{i+1}</span><h3 className="absolute bottom-6 left-6 text-2xl font-semibold tracking-tight">{t(`marketing.${key}`)}</h3><span className="absolute bottom-6 right-6 grid h-10 w-10 place-items-center rounded-full bg-brand-500 text-white transition group-hover:rotate-[-35deg]"><ArrowRight className="h-4 w-4"/></span></div></Reveal>)}</div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="relative overflow-hidden rounded-[2.2rem] border border-brand-950/10 bg-brand-mist"><div className="relative aspect-[4/3]"><Image src="/images/utility/field-service.svg" alt="Stylized field-service technician illustration" fill className="object-cover" /></div><div className="absolute bottom-5 right-5 w-52 rounded-[1.5rem] border border-white/60 bg-white/90 p-4 shadow-2xl backdrop-blur"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-brand-500">{t("marketing.jobAssigned")}</p><div className="mt-4 space-y-3 text-xs"><div className="flex justify-between"><span className="text-brand-950/45">{t("marketing.route")}</span><span className="font-semibold">Demo Zone A</span></div><div className="flex justify-between"><span className="text-brand-950/45">{t("common.customer")}</span><span className="font-semibold">Demo Customer</span></div><div className="flex justify-between"><span className="text-brand-950/45">{t("marketing.task")}</span><span className="font-semibold">SR-00128</span></div></div></div></Reveal>
          <Reveal><p className="eyebrow">{t("marketing.fieldEyebrow")}</p><h2 className="headline-lg mt-4">{t("marketing.fieldTitle")}</h2><p className="body-lg mt-6 max-w-xl">{t("marketing.fieldBody")}</p><Link href="/platform/field-service" className="button-primary mt-8">{t("platform.fieldService")} <ArrowRight className="h-4 w-4" /></Link></Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28">
        <div className="soft-orb absolute left-1/4 top-0 h-96 w-96 rounded-full bg-brand-500/15" />
        <div className="page-shell relative grid items-center gap-16 lg:grid-cols-2">
          <Reveal><p className="eyebrow text-brand-300">{t("marketing.smartMeterEyebrow")}</p><h2 className="headline-lg mt-4">{t("marketing.meterTitle")}</h2><p className="mt-6 max-w-xl text-base leading-7 text-white/55">{t("marketing.meterBody")}</p></Reveal>
          <Reveal className="flex justify-center"><div data-cursor="3d" className="relative w-72 rotate-3 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#f7eee8] to-[#d9c5b8] p-5 text-brand-950 shadow-[0_50px_120px_rgba(0,0,0,.35)] transition duration-700 hover:rotate-[-2deg]"><div className="rounded-[1.7rem] bg-brand-950 p-6 text-white"><div className="flex items-center justify-between"><BatteryCharging className="text-brand-300"/><span className="h-2 w-2 rounded-full bg-brand-500 shadow-[0_0_14px_#FF7700]"/></div><p className="mt-12 text-[10px] font-bold uppercase tracking-[.18em] text-white/40">{t("marketing.meterReading")}</p><p className="mt-2 text-4xl font-semibold tracking-tight">248 <span className="text-lg text-brand-300">kWh</span></p><div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[68%] rounded-full bg-brand-500"/></div><p className="mt-2 text-xs text-white/45">Usage · Demo 68%</p></div><div className="mx-auto mt-5 h-3 w-3 rounded-full bg-brand-500"/></div></Reveal>
        </div>
      </section>

      <section className="section-shell">
        <Reveal className="max-w-3xl"><p className="eyebrow">{t("marketing.processEyebrow")}</p><h2 className="headline-lg mt-4">{t("marketing.processTitle")}</h2></Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-brand-950/[.08] bg-brand-950/[.08] sm:grid-cols-2 lg:grid-cols-6">{processes.map((key, index) => <div key={key} className="bg-white p-6"><span className="text-xs font-bold tracking-[.16em] text-brand-500">0{index+1}</span><p className="mt-14 text-lg font-semibold">{t(`marketing.${key}`)}</p></div>)}</div>
      </section>

      <section id="contact" className="bg-brand-mist/70 py-20 sm:py-28">
        <div className="page-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal><p className="eyebrow">{t("marketing.supportEyebrow")}</p><h2 className="headline-lg mt-4">{t("contact.title")}</h2><p className="body-lg mt-6">{t("contact.subtitle")}</p><div className="mt-8 flex items-center gap-3 text-sm font-semibold"><span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/10 text-brand-500"><MessageCircle className="h-4 w-4" /></span>{t("contact.whatsapp")}</div></Reveal>
          <Reveal><ContactForm /></Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-500 py-20 text-white sm:py-28">
        <div className="page-shell relative text-center"><Reveal><p className="mx-auto max-w-4xl text-4xl font-semibold leading-[.98] tracking-[-.05em] sm:text-6xl lg:text-7xl">{t("marketing.finalTitle")}</p><p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75">{t("marketing.finalBody")}</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/customer" className="button-dark bg-brand-950/85">{t("marketing.openPortal")}</Link><Link href="#solutions" className="button-dark">{t("marketing.exploreServices")}</Link></div></Reveal></div>
      </section>
    </>
  );
}
