import type { Metadata } from "next";
import { PlatformShell } from "@/components/platform/PlatformShell";
export const metadata: Metadata = { title: "Operations Platform" };
export default function Layout({children}:{children:React.ReactNode}){return <PlatformShell>{children}</PlatformShell>}
