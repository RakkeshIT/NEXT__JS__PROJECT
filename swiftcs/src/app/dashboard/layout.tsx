'use client'
import UserDashboard from '@/components/client/UserDashboard'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <UserDashboard children={children} />
    </>
  )
}

export default layout