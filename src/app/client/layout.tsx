'use client'
import Navbar from "@/components/client/Navbar"
import { UseLenis } from "@/hooks/useLenis"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    UseLenis();
    return (
        <div>
            <Navbar />
            <main>  
                  {children}
            </main>
        </div>
    )
}