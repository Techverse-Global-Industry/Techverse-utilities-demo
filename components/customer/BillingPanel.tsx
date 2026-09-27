"use client";
import { useState } from "react";
import { Download, Eye, Printer, ReceiptText } from "lucide-react";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { KpiCard } from "@/components/ui/KpiCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LineChart } from "@/components/dashboard/Charts";
import { bills, customer, monthlyBills, months } from "@/lib/data";
import { currency, downloadText, formatDate } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";
import type { Bill } from "@/lib/types";

export function BillingPanel() {
  const { t, language } = useLanguage();
  const [selected, setSelected] = useState<Bill | null>(null);
  const previous = bills[1];
  const downloadInvoice = (bill: Bill) => {
    downloadText(`${bill.id}.txt`, `${t("billing.invoiceNote")}\n${bill.id}\n${t("billing.usageCharges")}: ${currency(bill.usageCharge, language)}\n${t("billing.serviceCharges")}: ${currency(bill.serviceCharge, language)}\n${t("common.total")}: ${currency(bill.total, language)}\n`);
  };
  return <div className="space-y-8"><div><DemoBadge compact /><h1 className="dashboard-title mt-4">{t("billing.title")}</h1><p className="dashboard-subtitle">{t("billing.subtitle")}</p></div>
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><KpiCard label={t("customer.currentBalance")} value={currency(customer.balance, language)} icon={ReceiptText}/><KpiCard label={t("billing.previousBalance")} value={currency(previous.total, language)}/><KpiCard label={t("billing.dueDate")} value={formatDate(customer.nextDue, language)}/><KpiCard label={t("billing.lastPayment")} value={currency(previous.total, language)} detail={formatDate(previous.dueDate, language)}/></section>
    <section className="surface-card p-5 sm:p-6"><h2 className="text-lg font-semibold">{t("customer.billingTrend")}</h2><div className="mt-3"><LineChart data={monthlyBills} labels={months} valueLabel={t("customer.billingTrend")}/></div></section>
    <section><h2 className="mb-4 text-lg font-semibold">{t("billing.billingHistory")}</h2><div className="table-shell"><table className="table-base"><thead><tr><th>{t("billing.invoice")}</th><th>{t("common.date")}</th><th>{t("billing.usageCharges")}</th><th>{t("billing.serviceCharges")}</th><th>{t("common.total")}</th><th>{t("common.status")}</th><th /></tr></thead><tbody>{bills.map((bill) => <tr key={bill.id}><td className="font-semibold">{bill.id}</td><td>{formatDate(bill.date,language)}</td><td>{currency(bill.usageCharge,language)}</td><td>{currency(bill.serviceCharge,language)}</td><td className="font-semibold">{currency(bill.total,language)}</td><td><StatusBadge tone={bill.status === "Paid" ? "good" : "attention"}>{bill.status === "Paid" ? t("billing.paid") : t("billing.due")}</StatusBadge></td><td><div className="flex items-center gap-2"><button onClick={() => setSelected(bill)} className="rounded-lg p-2 hover:bg-brand-mist" aria-label={t("billing.viewInvoice")}><Eye className="h-4 w-4"/></button><button onClick={() => downloadInvoice(bill)} className="rounded-lg p-2 hover:bg-brand-mist" aria-label={t("billing.downloadInvoice")}><Download className="h-4 w-4"/></button></div></td></tr>)}</tbody></table></div></section>
    {selected ? <div className="fixed inset-0 z-[70] grid place-items-center bg-brand-950/55 p-4 backdrop-blur-sm" role="dialog" aria-modal="true"><div className="w-full max-w-lg rounded-[2rem] bg-white p-6 shadow-2xl"><div className="flex items-start justify-between"><div><p className="eyebrow">{t("billing.invoice")}</p><h2 className="mt-2 text-2xl font-semibold">{selected.id}</h2><p className="mt-1 text-xs text-brand-950/40">{t("billing.invoiceNote")}</p></div><button className="button-secondary !min-h-9 !px-3" onClick={() => setSelected(null)}>{t("common.close")}</button></div><div className="mt-7 space-y-3 rounded-2xl bg-brand-mist/60 p-5 text-sm"><div className="flex justify-between"><span>{t("billing.usageCharges")}</span><strong>{currency(selected.usageCharge,language)}</strong></div><div className="flex justify-between"><span>{t("billing.serviceCharges")}</span><strong>{currency(selected.serviceCharge,language)}</strong></div><div className="flex justify-between border-t border-brand-950/10 pt-3 text-lg"><span>{t("common.total")}</span><strong>{currency(selected.total,language)}</strong></div></div><div className="mt-5 flex flex-wrap gap-2"><button onClick={() => downloadInvoice(selected)} className="button-primary"><Download className="h-4 w-4"/>{t("billing.downloadInvoice")}</button><button onClick={() => window.print()} className="button-secondary"><Printer className="h-4 w-4"/>{t("billing.printInvoice")}</button></div></div></div> : null}
  </div>;
}
