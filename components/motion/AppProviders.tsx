"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import Lenis from "lenis";
import { maintenanceTickets as seedTickets, notifications as seedNotifications, serviceRequests as seedRequests, technicians as seedTechnicians } from "@/lib/data";
import { translations, type TranslationTree } from "@/lib/translations";
import type { DemoNotification, Language, MaintenanceTicket, ServiceRequest, Technician } from "@/lib/types";

type AppContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (path: string) => string;
  requests: ServiceRequest[];
  setRequests: React.Dispatch<React.SetStateAction<ServiceRequest[]>>;
  tickets: MaintenanceTicket[];
  setTickets: React.Dispatch<React.SetStateAction<MaintenanceTicket[]>>;
  technicians: Technician[];
  setTechnicians: React.Dispatch<React.SetStateAction<Technician[]>>;
  notifications: DemoNotification[];
  setNotifications: React.Dispatch<React.SetStateAction<DemoNotification[]>>;
  unreadCount: number;
};

const AppContext = createContext<AppContextValue | null>(null);

function readPath(tree: TranslationTree, path: string): string {
  const result = path.split(".").reduce<string | TranslationTree | undefined>((current, key) => {
    if (!current || typeof current === "string") return undefined;
    return current[key];
  }, tree);
  return typeof result === "string" ? result : path;
}

function loadLocal<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [requests, setRequests] = useState<ServiceRequest[]>(seedRequests);
  const [tickets, setTickets] = useState<MaintenanceTicket[]>(seedTickets);
  const [technicians, setTechnicians] = useState<Technician[]>(seedTechnicians);
  const [notifications, setNotifications] = useState<DemoNotification[]>(seedNotifications);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("aurelia-language");
    if (storedLanguage === "en" || storedLanguage === "fr") setLanguageState(storedLanguage);
    setRequests(loadLocal("aurelia-requests", seedRequests));
    setTickets(loadLocal("aurelia-tickets", seedTickets));
    setTechnicians(loadLocal("aurelia-technicians", seedTechnicians));
    setNotifications(loadLocal("aurelia-notifications", seedNotifications));
  }, []);

  useEffect(() => {
    localStorage.setItem("aurelia-language", language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => localStorage.setItem("aurelia-requests", JSON.stringify(requests)), [requests]);
  useEffect(() => localStorage.setItem("aurelia-tickets", JSON.stringify(tickets)), [tickets]);
  useEffect(() => localStorage.setItem("aurelia-technicians", JSON.stringify(technicians)), [technicians]);
  useEffect(() => localStorage.setItem("aurelia-notifications", JSON.stringify(notifications)), [notifications]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const setLanguage = useCallback((value: Language) => setLanguageState(value), []);
  const t = useCallback((path: string) => readPath(translations[language], path), [language]);
  const unreadCount = useMemo(() => notifications.filter((notification) => !notification.read).length, [notifications]);

  const value = useMemo<AppContextValue>(() => ({
    language,
    setLanguage,
    t,
    requests,
    setRequests,
    tickets,
    setTickets,
    technicians,
    setTechnicians,
    notifications,
    setNotifications,
    unreadCount,
  }), [language, setLanguage, t, requests, tickets, technicians, notifications, unreadCount]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProviders");
  return context;
}
