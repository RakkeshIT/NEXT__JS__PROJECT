import DashboardLayout from "@/components/admin/DashboardLayout"
import { ReactNode } from "react"

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
      <>
        <DashboardLayout children={children}/>
      </>
    )
}