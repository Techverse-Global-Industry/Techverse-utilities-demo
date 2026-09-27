"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, BarChart3, Bell, FileText, Gauge, LayoutDashboard, LifeBuoy, Menu, ReceiptText, Wrench, X, Zap } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/language/LanguageSwitcher";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { useApp } from "@/components/motion/AppProviders";

const nav = [
  ["customer.overview", "/customer", LayoutDashboard],
  ["customer.serviceStatus", "/customer/service-status", Activity],
  ["customer.bills", "/customer/billing", ReceiptText],
  ["customer.usage", "/customer/usage", BarChart3],
  ["customer.requests", "/customer/service-requests", FileText],
  ["customer.installations", "/customer/installations", Gauge],
  ["customer.maintenance", "/customer/maintenance", Wrench],
  ["customer.notifications", "/customer/notifications", Bell],
  ["customer.support", "/customer/support", LifeBuoy],
] as const;

export function CustomerShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { t, unreadCount } = useApp();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-brand-paper">
      <aside className={`fixed inset-y-0 left-0 z-50 w-[286px] transform bg-brand-950 text-white transition-transform lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-5">
          <Link href="/" className="flex items-center gap-2.5 font-semibold"><span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500"><Zap className="h-4 w-4 fill-current" /></span>Aurelia Utilities</Link>
          <button className="lg:hidden" onClick={() => setOpen(false)} aria-label={t("common.closeMenu")}><X /></button>
        </div>
        <div className="px-4 py-5"><DemoBadge compact /></div>
        <nav className="space-y-1 px-3">
          {nav.map(([label, href, Icon]) => {
            const active = pathname === href;
            return <Link key={href} href={href} onClick={() => setOpen(false)} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${active ? "bg-brand-500 text-white" : "text-white/55 hover:bg-white/5 hover:text-white"}`}><Icon className="h-4 w-4" /> <span>{t(label)}</span>{label === "customer.notifications" && unreadCount ? <span className="ml-auto rounded-full bg-white/15 px-2 py-0.5 text-[10px]">{unreadCount}</span> : null}</Link>;
          })}
        </nav>
        <div className="absolute inset-x-4 bottom-5 rounded-2xl border border-white/10 bg-white/5 p-4"><LifeBuoy className="h-5 w-5 text-brand-300"/><p className="mt-3 text-sm font-semibold">{t("customer.support")}</p><p className="mt-1 text-xs leading-5 text-white/40">{t("common.demoOnly")}</p></div>
      </aside>
      <div className="lg:pl-[286px]">
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-brand-950/[.07] bg-brand-paper/85 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
          <div className="flex items-center gap-3"><button className="grid h-10 w-10 place-items-center rounded-xl border border-brand-950/10 bg-white lg:hidden" onClick={() => setOpen(true)} aria-label={t("common.openMenu")}><Menu className="h-5 w-5" /></button><div><p className="text-xs font-bold uppercase tracking-[.16em] text-brand-500">{t("customer.title")}</p><p className="text-sm text-brand-950/45">Aurelia Utilities</p></div></div>
          <div className="flex items-center gap-3"><LanguageSwitcher /><Link href="/customer/notifications" className="relative grid h-10 w-10 place-items-center rounded-xl border border-brand-950/10 bg-white"><Bell className="h-4 w-4" />{unreadCount ? <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-brand-500 px-1 text-[9px] font-bold text-white">{unreadCount}</span> : null}</Link></div>
        </header>
        <main className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">{children}</main>
      </div>
    </div>
  );
}
