"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Bell, Boxes, FileText, LayoutDashboard, Menu, MonitorCog, ReceiptText, Search, Settings2, Truck, Wrench, X, Zap } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/language/LanguageSwitcher";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { useApp } from "@/components/motion/AppProviders";

const nav = [
  ["platform.overview", "/platform", LayoutDashboard], ["platform.monitoring", "/platform/monitoring", MonitorCog],
  ["platform.requests", "/platform/service-requests", FileText], ["platform.billing", "/platform/billing", ReceiptText],
  ["platform.installations", "/platform/installations", Boxes], ["platform.maintenance", "/platform/maintenance", Wrench],
  ["platform.fieldService", "/platform/field-service", Truck], ["platform.notifications", "/platform/notifications", Bell],
  ["platform.reports", "/platform/reporting", BarChart3],
] as const;

export function PlatformShell({ children }: { children: React.ReactNode }) {
  const pathname=usePathname(); const {t,unreadCount}=useApp(); const [open,setOpen]=useState(false);
  return <div className="min-h-screen bg-[#f8f4f1]"><aside className={`fixed inset-y-0 left-0 z-50 w-[286px] transform bg-brand-950 text-white transition-transform lg:translate-x-0 ${open?"translate-x-0":"-translate-x-full"}`}><div className="flex h-20 items-center justify-between border-b border-white/10 px-5"><Link href="/" className="flex items-center gap-2.5 font-semibold"><span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500"><Zap className="h-4 w-4 fill-current"/></span>Aurelia Ops</Link><button className="lg:hidden" onClick={()=>setOpen(false)} aria-label={t("common.closeMenu")}><X/></button></div><div className="px-4 py-5"><DemoBadge compact/></div><nav className="space-y-1 px-3">{nav.map(([label,href,Icon])=>{const active=pathname===href;return <Link key={href} href={href} onClick={()=>setOpen(false)} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${active?"bg-brand-500 text-white":"text-white/55 hover:bg-white/5 hover:text-white"}`}><Icon className="h-4 w-4"/><span>{t(label)}</span>{label==="platform.notifications"&&unreadCount?<span className="ml-auto rounded-full bg-white/15 px-2 py-.5 text-[10px]">{unreadCount}</span>:null}</Link>})}</nav><div className="absolute inset-x-4 bottom-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><Settings2 className="h-5 w-5 text-brand-300"/><div><p className="text-xs font-semibold">{t("common.demoData")}</p><p className="mt-1 text-[10px] text-white/35">Local state only</p></div></div></aside>
    <div className="lg:pl-[286px]"><header className="sticky top-0 z-30 flex h-20 items-center gap-4 border-b border-brand-950/[.07] bg-[#f8f4f1]/90 px-4 backdrop-blur-xl sm:px-6 lg:px-8"><button className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-brand-950/10 bg-white lg:hidden" onClick={()=>setOpen(true)} aria-label={t("common.openMenu")}><Menu className="h-5 w-5"/></button><div className="relative hidden max-w-xl flex-1 md:block"><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-950/30"/><input className="form-field pl-10" placeholder={t("platform.search")}/></div><div className="ml-auto flex items-center gap-3"><LanguageSwitcher/><Link href="/platform/notifications" className="relative grid h-10 w-10 place-items-center rounded-xl border border-brand-950/10 bg-white"><Bell className="h-4 w-4"/>{unreadCount?<span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-brand-500 px-1 text-[9px] font-bold text-white">{unreadCount}</span>:null}</Link></div></header><main className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">{children}</main></div>
  </div>;
}
