"use client";
import { CheckCircle2, Clock3, Wrench } from "lucide-react";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { KpiCard } from "@/components/ui/KpiCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { useApp } from "@/components/motion/AppProviders";
import { formatDate } from "@/lib/utils";
import type { MaintenanceTicket } from "@/lib/types";

export function MaintenancePanel({ operations = false }: { operations?: boolean }) {
  const { t, language, tickets, setTickets } = useApp();
  const count = (status: MaintenanceTicket["status"]) => tickets.filter((item)=>item.status===status).length;
  const cycle = (ticket: MaintenanceTicket) => { const next: Record<MaintenanceTicket["status"],MaintenanceTicket["status"]>={Open:"In Progress","In Progress":"Scheduled",Scheduled:"Resolved",Resolved:"Resolved"}; setTickets((current)=>current.map((item)=>item.id===ticket.id?{...item,status:next[item.status]}:item)); };
  return <div className="space-y-8"><div><DemoBadge compact/><h1 className="dashboard-title mt-4">{t("maintenance.title")}</h1><p className="dashboard-subtitle">{t("maintenance.subtitle")}</p></div><section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><KpiCard label={t("maintenance.openTickets")} value={String(count("Open"))} icon={Wrench}/><KpiCard label={t("maintenance.inProgress")} value={String(count("In Progress"))} icon={Clock3}/><KpiCard label={t("maintenance.scheduled")} value={String(count("Scheduled"))}/><KpiCard label={t("maintenance.resolved")} value={String(count("Resolved"))} icon={CheckCircle2}/></section><section className="table-shell"><table className="table-base"><thead><tr><th>{t("maintenance.ticketId")}</th><th>{t("maintenance.problem")}</th><th>{t("common.priority")}</th><th>{t("maintenance.created")}</th><th>{t("maintenance.technician")}</th><th>{t("common.status")}</th><th/></tr></thead><tbody>{tickets.map((ticket)=><tr key={ticket.id}><td className="font-mono text-xs font-semibold">{ticket.id}</td><td>{ticket.problem}</td><td>{t(`status.${ticket.priority}`)}</td><td>{formatDate(ticket.dateCreated,language)}</td><td>{ticket.technician}</td><td><StatusBadge tone={ticket.status==="Resolved"?"good":"attention"}>{t(`status.${ticket.status.replaceAll(" ", "")}`)}</StatusBadge></td><td>{ticket.status!=="Resolved"?<button onClick={()=>cycle(ticket)} className="text-xs font-semibold text-brand-500">{operations?t("common.update"):t("common.view")}</button>:null}</td></tr>)}</tbody></table></section></div>;
}
