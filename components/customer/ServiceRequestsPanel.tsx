"use client";
import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Search } from "lucide-react";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { useApp } from "@/components/motion/AppProviders";
import { nextDemoId, formatDate } from "@/lib/utils";
import type { RequestStatus, ServiceRequest } from "@/lib/types";

const stages: RequestStatus[] = ["submitted", "review", "assigned", "scheduled", "progress", "resolved"];
const stageKeys: Record<RequestStatus,string> = { submitted: "stageSubmitted", review: "stageReview", assigned: "stageAssigned", scheduled: "stageScheduled", progress: "stageProgress", resolved: "stageResolved" };

export function ServiceRequestsPanel({ operations = false }: { operations?: boolean }) {
  const { t, language, requests, setRequests } = useApp();
  const [createdId, setCreatedId] = useState<string | null>(null);
  const [query, setQuery] = useState("SR-2026-00128");
  const [selectedId, setSelectedId] = useState("SR-2026-00128");
  const selected = useMemo(() => requests.find((request) => request.id.toLowerCase() === selectedId.toLowerCase()), [requests, selectedId]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const id = nextDemoId("SR");
    const item: ServiceRequest = {
      id,
      customer: "Demo Customer",
      type: String(form.get("serviceType") || "Service Issue"),
      category: String(form.get("category") || "General"),
      description: String(form.get("description") || "Demo service request"),
      preferredDate: String(form.get("preferredDate") || "2026-09-28"),
      contactPreference: String(form.get("contactPreference") || "Email"),
      priority: String(form.get("priority") || "Medium") as ServiceRequest["priority"],
      status: "submitted",
      created: "2026-09-26",
      assignedTeam: "Pending demo assignment",
    };
    setRequests((current) => [item, ...current]);
    setCreatedId(id);
    setQuery(id);
    setSelectedId(id);
    event.currentTarget.reset();
  }

  function advance(request: ServiceRequest) {
    const index = stages.indexOf(request.status);
    const status = stages[Math.min(index + 1, stages.length - 1)];
    setRequests((current) => current.map((item) => item.id === request.id ? { ...item, status } : item));
  }

  return <div className="space-y-8"><div><DemoBadge compact/><h1 className="dashboard-title mt-4">{operations ? t("platform.requests") : t("requests.title")}</h1><p className="dashboard-subtitle">{t("requests.subtitle")}</p></div>
    {!operations ? <section className="grid gap-6 xl:grid-cols-[1.05fr_.95fr]"><form onSubmit={submit} className="surface-card p-5 sm:p-6"><div className="grid gap-4 sm:grid-cols-2"><label className="text-xs font-semibold text-brand-950/60">{t("requests.serviceType")}<select name="serviceType" className="form-field mt-2"><option value="Electricity">{t("requests.electricity")}</option><option value="Water">{t("requests.waterService")}</option><option value="Infrastructure">{t("requests.infrastructureService")}</option></select></label><label className="text-xs font-semibold text-brand-950/60">{t("requests.issueCategory")}<select name="category" className="form-field mt-2"><option value="Service Issue">{t("requests.serviceIssue")}</option><option value="Meter Check">{t("requests.meterCheck")}</option><option value="Maintenance">{t("requests.maintenanceCategory")}</option></select></label><label className="sm:col-span-2 text-xs font-semibold text-brand-950/60">{t("requests.description")}<textarea name="description" required rows={4} className="form-field mt-2 resize-none"/></label><label className="text-xs font-semibold text-brand-950/60">{t("requests.preferredDate")}<input type="date" name="preferredDate" required className="form-field mt-2"/></label><label className="text-xs font-semibold text-brand-950/60">{t("requests.contactPreference")}<select name="contactPreference" className="form-field mt-2"><option value="Email">{t("requests.email")}</option><option value="WhatsApp">{t("requests.whatsapp")}</option><option value="Phone">{t("requests.phone")}</option></select></label><label className="text-xs font-semibold text-brand-950/60">{t("requests.priority")}<select name="priority" className="form-field mt-2"><option value="Low">{t("status.Low")}</option><option value="Medium">{t("status.Medium")}</option><option value="High">{t("status.High")}</option></select></label></div><button className="button-primary mt-5" type="submit">{t("requests.send")}<ArrowRight className="h-4 w-4"/></button></form>
      <div className="surface-card flex min-h-72 items-center justify-center p-6 text-center">{createdId ? <div><CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600"/><h2 className="mt-4 text-2xl font-semibold">{t("requests.submitted")}</h2><p className="mt-2 text-sm text-brand-950/45">{t("requests.fakeId")}</p><p className="mt-1 rounded-xl bg-brand-mist px-4 py-3 font-mono text-sm font-semibold">{createdId}</p></div> : <div><p className="eyebrow">{t("common.demoData")}</p><p className="mt-4 max-w-sm text-sm leading-6 text-brand-950/45">{t("common.demoOnly")}</p></div>}</div></section> : null}
    <section className="surface-card p-5 sm:p-6"><h2 className="text-lg font-semibold">{t("requests.tracker")}</h2><div className="mt-4 flex gap-2"><div className="relative flex-1"><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-950/30"/><input value={query} onChange={(e: { target: { value: string } })=>setQuery(e.target.value)} className="form-field pl-10" placeholder={t("requests.searchPlaceholder")}/></div><button className="button-primary" onClick={()=>setSelectedId(query)}>{t("common.search")}</button></div>
      {selected ? <div className="mt-7"><div className="grid gap-4 rounded-2xl bg-brand-mist/50 p-5 sm:grid-cols-2 lg:grid-cols-4"><div><span className="text-[10px] font-bold uppercase tracking-[.12em] text-brand-950/35">{t("requests.type")}</span><p className="mt-1 text-sm font-semibold">{selected.type}</p></div><div><span className="text-[10px] font-bold uppercase tracking-[.12em] text-brand-950/35">{t("common.customer")}</span><p className="mt-1 text-sm font-semibold">{selected.customer}</p></div><div><span className="text-[10px] font-bold uppercase tracking-[.12em] text-brand-950/35">{t("requests.created")}</span><p className="mt-1 text-sm font-semibold">{formatDate(selected.created,language)}</p></div><div><span className="text-[10px] font-bold uppercase tracking-[.12em] text-brand-950/35">{t("common.status")}</span><div className="mt-1"><StatusBadge tone={selected.status === "resolved" ? "good" : "attention"}>{t(`requests.${stageKeys[selected.status]}`)}</StatusBadge></div></div></div>
        <h3 className="mt-7 text-sm font-semibold">{t("requests.timeline")}</h3><div className="mt-5 grid gap-3 md:grid-cols-6">{stages.map((stage,index)=>{ const active = index <= stages.indexOf(selected.status); return <div key={stage} className={`rounded-2xl border p-4 ${active ? "border-brand-500/25 bg-brand-500/[.05]" : "border-brand-950/[.07] bg-white"}`}><span className={`mb-3 grid h-7 w-7 place-items-center rounded-full text-xs font-bold ${active ? "bg-brand-500 text-white" : "bg-brand-mist text-brand-950/35"}`}>{index+1}</span><p className="text-xs font-semibold">{t(`requests.${stageKeys[stage]}`)}</p></div>;})}</div><button disabled={selected.status === "resolved"} onClick={()=>advance(selected)} className="button-secondary mt-5 disabled:cursor-not-allowed disabled:opacity-40">{t("requests.advance")}<ArrowRight className="h-4 w-4"/></button></div> : <p className="mt-6 text-sm text-brand-950/45">{t("common.noResults")}</p>}
    </section>
    <section className="table-shell"><table className="table-base"><thead><tr><th>ID</th><th>{t("requests.type")}</th><th>{t("common.priority")}</th><th>{t("common.status")}</th><th>{t("requests.scheduledDate")}</th></tr></thead><tbody>{requests.map((request)=><tr key={request.id}><td className="font-mono text-xs font-semibold">{request.id}</td><td>{request.type}</td><td>{t(`status.${request.priority}`)}</td><td><StatusBadge tone={request.status === "resolved" ? "good" : "attention"}>{t(`requests.${stageKeys[request.status]}`)}</StatusBadge></td><td>{request.scheduledDate || "—"}</td></tr>)}</tbody></table></section>
  </div>;
}
