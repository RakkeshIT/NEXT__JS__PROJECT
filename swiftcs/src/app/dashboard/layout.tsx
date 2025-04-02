import UserDashboard from '@/components/client/UserDashboard'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <UserDashboard children={children} />
    </>
  )
}

export default layout