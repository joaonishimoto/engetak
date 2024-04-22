'use client'

import { DataTableDemo } from "@/components/tables/users";
import { useSession } from "next-auth/react";


export default function Page() {
  const { data: session, status } = useSession()

  return (
    <div className="min-h-screen flex items-center justify-center bg- p-10 ">
      <div className="w-4/5">
        <DataTableDemo />
      </div>
    </div>
  )
}