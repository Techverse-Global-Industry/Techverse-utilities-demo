"use client";
import { Bell, CheckCheck, X } from "lucide-react";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { useApp } from "@/components/motion/AppProviders";

export function NotificationsPanel() {
  const { t, notifications, setNotifications } = useApp();
  const markRead=(id:string)=>setNotifications((current)=>current.map((item)=>item.id===id?{...item,read:true}:item));
  const dismiss=(id:string)=>setNotifications((current)=>current.filter((item)=>item.id!==id));
  return <div className="space-y-8"><div><DemoBadge compact/><h1 className="dashboard-title mt-4">{t("notifications.title")}</h1><p className="dashboard-subtitle">{t("notifications.subtitle")}</p></div><div className="space-y-3">{notifications.map((notification)=><article key={notification.id} className={`surface-card flex gap-4 p-5 ${notification.read?"opacity-70":""}`}><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-500"><Bell className="h-4 w-4"/></span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><StatusBadge tone={notification.type==="Critical"?"critical":notification.type==="Warning"?"attention":"neutral"}>{t(`notifications.${notification.type.toLowerCase()}`)}</StatusBadge><span className="text-xs text-brand-950/35">{notification.time}</span></div><p className="mt-3 text-sm font-medium leading-6">{t(`notifications.${notification.messageKey}`)}</p><div className="mt-4 flex gap-2">{!notification.read?<button onClick={()=>markRead(notification.id)} className="button-secondary !min-h-9 !px-3"><CheckCheck className="h-3.5 w-3.5"/>{t("notifications.markRead")}</button>:null}<button onClick={()=>dismiss(notification.id)} className="button-secondary !min-h-9 !px-3"><X className="h-3.5 w-3.5"/>{t("notifications.dismiss")}</button></div></div></article>)}</div></div>;
}
