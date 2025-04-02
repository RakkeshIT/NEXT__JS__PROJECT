'use client'
import getUserFromToken from '@/hooks/useAuthUser';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Dashboard() {
  const [user, setUser] = useState(null);
  // const router = useRouter();
  // const [loading, setLoading] = useState(true);
  // const token = localStorage.getItem('authToken')
  // const userrole = localStorage.getItem('userRole')

  // if(!token || userrole !== "SuperAdmin"){
  //   router.push('/')
  // }else{
  //   setLoading(false)
  // }
  // if(loading) return <p>Loading.....</p>
  // useEffect(() => {
  //   const loggedUser = getUserFromToken();
  //   if(!loggedUser || loggedUser.role !== "SuperAdmin"){
  //     router.push('/')
  //   }else{
  //     setUser(loggedUser)
  //   }
  // }, []);
  return (
   <>
      <h1>Admin Pannel</h1>
   </>
  );
}