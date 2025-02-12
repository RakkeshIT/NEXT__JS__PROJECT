import Navbar from "@/components/client/Navbar"
import { ReactNode } from "react"

export default function ClientLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    )
}