'use client'
import DashboardLayout from "@/components/admin/DashboardLayout"
import axios from "axios";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react"
export default function AdminLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
      const checkAuth = async () => {
        try {
          const res = await axios.get('/api/auth/checkauth', {withCredentials:true})
          setUser(res.data.user)
          setLoading(false)

          if(res.data.user.role === 'user'){
            router.push('/')
          }
        } catch (error) {
          router.push('/')
        }
      }
      checkAuth()
  }, []);

  if(loading) return <p>Loading....</p>
  return (
    <>
      <DashboardLayout children={children} />
    </>
  )
}