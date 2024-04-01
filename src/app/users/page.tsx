'use client'

import { DataTableDemo } from "@/components/UserTable";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export default function Page() {
  const { data: session, status } = useSession()

  if(!session) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg- p-10 ">
      <div className="w-1/2">
        <DataTableDemo />
      </div>
    </div>
  )
}