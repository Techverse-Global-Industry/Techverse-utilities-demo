"use client";
import { MessageCircle } from "lucide-react";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { ContactForm } from "@/components/contact/ContactForm";
import { companyConfig } from "@/lib/config";
import { useLanguage } from "@/hooks/useLanguage";
export function SupportPanel(){const {t}=useLanguage();const href=`https://wa.me/${companyConfig.whatsappNumber}?text=${encodeURIComponent(t("whatsapp.general"))}`;return <div className="space-y-8"><div><DemoBadge compact/><h1 className="dashboard-title mt-4">{t("customer.support")}</h1><p className="dashboard-subtitle">{t("contact.subtitle")}</p></div><div className="grid gap-6 xl:grid-cols-[1.15fr_.85fr]"><ContactForm/><aside className="surface-card p-6"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/10 text-brand-500"><MessageCircle/></span><h2 className="mt-6 text-2xl font-semibold tracking-tight">{t("whatsapp.label")}</h2><p className="mt-3 text-sm leading-6 text-brand-950/45">{t("common.demoOnly")}</p><a href={href} target="_blank" rel="noreferrer" className="button-primary mt-6">{t("hero.whatsapp")}</a></aside></div></div>}
