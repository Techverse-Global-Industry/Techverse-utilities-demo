export type Language = "en" | "fr";
export type RequestStatus = "submitted" | "review" | "assigned" | "scheduled" | "progress" | "resolved";
export type Priority = "Low" | "Medium" | "High" | "Critical";
export type TechnicianStatus = "Available" | "En Route" | "On Site" | "Offline";

export interface Customer {
  id: string;
  name: string;
  accountNumber: string;
  serviceAddress: string;
  serviceStatus: string;
  balance: number;
  nextDue: string;
  usage: number;
  lastBill: number;
}

export interface ServiceRequest {
  id: string;
  customer: string;
  type: string;
  category: string;
  description: string;
  priority: Priority;
  status: RequestStatus;
  created: string;
  preferredDate: string;
  contactPreference: string;
  assignedTeam: string;
  scheduledDate?: string;
  resolution?: string;
}

export interface Bill {
  id: string;
  date: string;
  dueDate: string;
  usageCharge: number;
  serviceCharge: number;
  total: number;
  status: "Paid" | "Due";
}

export interface InstallationRequest {
  id: string;
  serviceType: string;
  propertyAddress: string;
  customerName: string;
  phone: string;
  email: string;
  requestedDate: string;
  notes: string;
  status: string;
}

export interface MaintenanceTicket {
  id: string;
  problem: string;
  priority: Priority;
  dateCreated: string;
  technician: string;
  status: "Open" | "In Progress" | "Scheduled" | "Resolved";
}

export interface Technician {
  id: string;
  name: string;
  specialization: string;
  status: TechnicianStatus;
  currentTask: string;
  location: string;
  eta: string;
}

export interface DemoNotification {
  id: string;
  type: "Information" | "Maintenance" | "Warning" | "Critical";
  messageKey: string;
  time: string;
  read: boolean;
}

export interface MonitoringMetric {
  labelKey: string;
  value: string;
  change: string;
  status: "good" | "attention" | "critical";
}

export interface Report {
  id: string;
  date: string;
  serviceRequests: number;
  maintenance: number;
  fieldJobs: number;
  billingActivity: number;
  alerts: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface CompanyConfig {
  name: string;
  whatsappNumber: string;
  phone: string;
  email: string;
}
