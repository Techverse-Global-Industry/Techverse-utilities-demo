"use client";
import { CalendarDays, MapPin, PlugZap } from "lucide-react";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { installations } from "@/lib/data";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { useLanguage } from "@/hooks/useLanguage";
import { formatDate } from "@/lib/utils";
export function InstallationsOpsPanel(){const {t,language}=useLanguage();return <div className="space-y-8"><div><DemoBadge compact/><h1 className="dashboard-title mt-4">{t("platform.installations")}</h1><p className="dashboard-subtitle">{t("installation.subtitle")}</p></div><div className="grid gap-4 lg:grid-cols-2">{installations.map((item)=><article key={item.id} className="surface-card p-5 sm:p-6"><div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/10 text-brand-500"><PlugZap className="h-5 w-5"/></span><StatusBadge tone="attention">{t("installation.received")}</StatusBadge></div><h2 className="mt-5 font-mono text-lg font-semibold">{item.id}</h2><p className="mt-1 text-sm text-brand-950/50">{item.serviceType} · {item.customerName}</p><div className="mt-5 grid gap-3 rounded-2xl bg-brand-mist/60 p-4 text-xs text-brand-950/60"><div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-500"/>{item.propertyAddress}</div><div className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-brand-500"/>{formatDate(item.requestedDate,language)}</div></div></article>)}</div></div>}
