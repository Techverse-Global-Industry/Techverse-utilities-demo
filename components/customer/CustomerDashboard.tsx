"use client";
import Link from "next/link";
import { AlertCircle, ArrowRight, CalendarClock, FilePlus2, Gauge, ReceiptText, ShieldCheck, WalletCards, type LucideIcon } from "lucide-react";
import { KpiCard } from "@/components/ui/KpiCard";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { LineChart, BarChart } from "@/components/dashboard/Charts";
import { customer, monthlyBills, monthlyUsage, months } from "@/lib/data";
import { currency, formatDate } from "@/lib/utils";
import { useApp } from "@/components/motion/AppProviders";

export function CustomerDashboard() {
  const { t, language, requests } = useApp();
  const openRequests = requests.filter((request) => request.status !== "resolved").length;
  const quickActions: Array<[string, string, LucideIcon]> = [
    [t("customer.requestService"), "/customer/service-requests", FilePlus2],
    [t("customer.viewBill"), "/customer/billing", ReceiptText],
    [t("customer.newInstallation"), "/customer/installations", CalendarClock],
    [t("customer.contactSupport"), "/#contact", AlertCircle],
  ];
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><DemoBadge compact /><h1 className="dashboard-title mt-4">{t("customer.welcome")}, {customer.name}</h1><p className="dashboard-subtitle">{t("customer.subtitle")}</p></div><div className="text-sm text-brand-950/50"><span className="block text-xs font-bold uppercase tracking-[.14em] text-brand-950/35">{t("customer.accountNumber")}</span>{customer.accountNumber}</div></div>
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label={t("customer.currentBalance")} value={currency(customer.balance, language)} detail={`${t("customer.nextDue")}: ${formatDate(customer.nextDue, language)}`} icon={WalletCards} />
        <KpiCard label={t("customer.openRequests")} value={String(openRequests)} detail={t("common.localDemoRecords")} icon={FilePlus2} />
        <KpiCard label={t("customer.currentStatus")} value={t(`status.${customer.serviceStatus}`)} detail={customer.serviceAddress} icon={ShieldCheck} />
        <KpiCard label={t("customer.currentUsage")} value={`${customer.usage} kWh`} detail={t("common.simulated")} icon={Gauge} />
      </section>
      <section className="grid gap-4 xl:grid-cols-2">
        <article className="surface-card p-5 sm:p-6"><div className="mb-4 flex items-center justify-between"><div><p className="text-sm font-semibold">{t("customer.monthlyConsumption")}</p><p className="text-xs text-brand-950/40">kWh · {t("common.demoData")}</p></div><Gauge className="h-4 w-4 text-brand-500" /></div><LineChart data={monthlyUsage} labels={months} valueLabel={t("customer.monthlyConsumption")} /></article>
        <article className="surface-card p-5 sm:p-6"><div className="mb-4 flex items-center justify-between"><div><p className="text-sm font-semibold">{t("customer.billingTrend")}</p><p className="text-xs text-brand-950/40">XOF · {t("common.demoData")}</p></div><ReceiptText className="h-4 w-4 text-brand-500" /></div><BarChart data={monthlyBills} labels={months} /></article>
      </section>
      <section className="grid gap-4 lg:grid-cols-[.8fr_1.2fr]">
        <article className="surface-card p-5 sm:p-6"><h2 className="text-lg font-semibold">{t("customer.quickActions")}</h2><div className="mt-5 grid gap-3">
          {quickActions.map(([label, href, Icon]) => <Link key={href} href={href} className="flex items-center gap-3 rounded-2xl border border-brand-950/[.07] bg-brand-mist/35 p-4 text-sm font-semibold transition hover:border-brand-500/25 hover:bg-brand-500/[.04]"><span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-brand-500"><Icon className="h-4 w-4" /></span>{label}<ArrowRight className="ml-auto h-4 w-4 text-brand-950/25" /></Link>)}
        </div></article>
        <article className="surface-card p-5 sm:p-6"><div className="flex items-center justify-between"><h2 className="text-lg font-semibold">{t("customer.activity")}</h2><Link href="/customer/service-requests" className="text-xs font-semibold text-brand-500">{t("common.view")}</Link></div><div className="mt-5 space-y-4">{requests.slice(0,3).map((request) => <div key={request.id} className="flex gap-4 border-b border-brand-950/[.06] pb-4 last:border-0"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-500 shadow-[0_0_0_5px_rgba(255,119,0,.09)]"/><div className="min-w-0"><p className="text-sm font-semibold">{request.type} · {request.id}</p><p className="mt-1 text-xs leading-5 text-brand-950/45">{request.description}</p></div><span className="ml-auto text-xs text-brand-950/35">{formatDate(request.created, language)}</span></div>)}</div></article>
      </section>
    </div>
  );
}
