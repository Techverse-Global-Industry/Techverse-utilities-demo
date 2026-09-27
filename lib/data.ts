import type {
  Bill,
  Customer,
  DemoNotification,
  InstallationRequest,
  MaintenanceTicket,
  MonitoringMetric,
  Report,
  ServiceRequest,
  Technician,
} from "@/lib/types";

export const customer: Customer = {
  id: "CUS-DEMO-01",
  name: "Demo Customer",
  accountNumber: "AU-DEMO-10482",
  serviceAddress: "Demo Service Area · Zone A",
  serviceStatus: "Operational",
  balance: 42850,
  nextDue: "2026-10-05",
  usage: 248,
  lastBill: 39100,
};

export const bills: Bill[] = [
  { id: "INV-DEMO-0926", date: "2026-09-05", dueDate: "2026-10-05", usageCharge: 33400, serviceCharge: 9450, total: 42850, status: "Due" },
  { id: "INV-DEMO-0826", date: "2026-08-05", dueDate: "2026-09-05", usageCharge: 30100, serviceCharge: 9000, total: 39100, status: "Paid" },
  { id: "INV-DEMO-0726", date: "2026-07-05", dueDate: "2026-08-05", usageCharge: 28700, serviceCharge: 9000, total: 37700, status: "Paid" },
  { id: "INV-DEMO-0626", date: "2026-06-05", dueDate: "2026-07-05", usageCharge: 27600, serviceCharge: 9000, total: 36600, status: "Paid" },
];

export const serviceRequests: ServiceRequest[] = [
  {
    id: "SR-2026-00128",
    customer: "Demo Customer",
    type: "Service Issue",
    category: "Power quality",
    description: "Intermittent service reported in the demo property.",
    priority: "High",
    status: "assigned",
    created: "2026-09-24",
    preferredDate: "2026-09-28",
    contactPreference: "WhatsApp",
    assignedTeam: "Demo Field Team A",
    scheduledDate: "2026-09-28",
    resolution: "Pending simulated field visit",
  },
  {
    id: "SR-2026-00119",
    customer: "Demo Customer",
    type: "Meter Check",
    category: "Usage reading",
    description: "Requested a demonstration meter review.",
    priority: "Medium",
    status: "resolved",
    created: "2026-09-10",
    preferredDate: "2026-09-12",
    contactPreference: "Email",
    assignedTeam: "Demo Metering Team",
    scheduledDate: "2026-09-12",
    resolution: "Demo review completed",
  },
];

export const installations: InstallationRequest[] = [
  {
    id: "IN-2026-00831",
    serviceType: "Electricity",
    propertyAddress: "Demo Development · Plot B",
    customerName: "Demo Customer",
    phone: "+229 00 00 00 00",
    email: "demo@example.com",
    requestedDate: "2026-10-07",
    notes: "Front-end demonstration request.",
    status: "Received",
  },
];

export const maintenanceTickets: MaintenanceTicket[] = [
  { id: "MT-2026-0037", problem: "Distribution cabinet inspection", priority: "High", dateCreated: "2026-09-25", technician: "Demo Technician 01", status: "Scheduled" },
  { id: "MT-2026-0035", problem: "Water pressure sensor check", priority: "Medium", dateCreated: "2026-09-23", technician: "Demo Technician 02", status: "In Progress" },
  { id: "MT-2026-0031", problem: "Street-light controller test", priority: "Low", dateCreated: "2026-09-18", technician: "Demo Technician 03", status: "Resolved" },
];

export const technicians: Technician[] = [
  { id: "TECH-01", name: "Demo Technician 01", specialization: "Power systems", status: "En Route", currentTask: "SR-2026-00128", location: "Demo Zone A", eta: "18 min" },
  { id: "TECH-02", name: "Demo Technician 02", specialization: "Water systems", status: "On Site", currentTask: "MT-2026-0035", location: "Demo Zone C", eta: "On site" },
  { id: "TECH-03", name: "Demo Technician 03", specialization: "Smart metering", status: "Available", currentTask: "Unassigned", location: "Demo Operations Hub", eta: "Ready" },
  { id: "TECH-04", name: "Demo Technician 04", specialization: "Infrastructure", status: "Available", currentTask: "Unassigned", location: "Demo Zone B", eta: "Ready" },
];

export const notifications: DemoNotification[] = [
  { id: "N-1", type: "Maintenance", messageKey: "scheduledMaintenance", time: "09:05", read: false },
  { id: "N-2", type: "Information", messageKey: "requestAssigned", time: "08:30", read: false },
  { id: "N-3", type: "Information", messageKey: "billAvailable", time: "Yesterday", read: true },
  { id: "N-4", type: "Information", messageKey: "technicianScheduled", time: "Yesterday", read: true },
  { id: "N-5", type: "Warning", messageKey: "serviceAlert", time: "2 days", read: false },
];

export const monitoringMetrics: MonitoringMetric[] = [
  { labelKey: "networkStatus", value: "Stable", change: "+0.4%", status: "good" },
  { labelKey: "activeAlerts", value: "3", change: "-2", status: "attention" },
  { labelKey: "serviceAvailability", value: "Demo 98.6%", change: "+0.3%", status: "good" },
  { labelKey: "infrastructureHealth", value: "Demo 91%", change: "+1.8%", status: "good" },
  { labelKey: "energyFlow", value: "Demo 72%", change: "+4.1%", status: "good" },
  { labelKey: "waterFlow", value: "Demo 64%", change: "-1.2%", status: "attention" },
];

export const reports: Report[] = [
  { id: "REP-DEMO-0926", date: "2026-09-26", serviceRequests: 28, maintenance: 14, fieldJobs: 22, billingActivity: 41, alerts: 7 },
];

export const monthlyUsage = [142, 155, 149, 168, 174, 191, 205, 214, 248];
export const monthlyBills = [28000, 29400, 28700, 30900, 32100, 34500, 36600, 39100, 42850];
export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];
