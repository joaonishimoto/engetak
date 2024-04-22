'use client'

import { ClientsTable } from "@/components/tables/clients";
import { useSession } from "next-auth/react";


export default function Page() {
  const { data: session, status } = useSession()

  return (
    <div className="min-h-screen flex items-center justify-center bg- p-10 ">
      <div className="w-4/5">
        <ClientsTable />
      </div>
    </div>
  )
}