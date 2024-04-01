'use client'

import { DataTableDemo } from "@/components/UserTable";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export default function Page() {
  const { data: session, status } = useSession()

  return (
    <div className="min-h-screen flex items-center justify-center bg- p-10 ">
      <div className="w-1/2">
        <DataTableDemo />
        <button onClick={() => signOut()} className="py-1.5 px-2 bg-teal-300 rounded text-white font-medium">deslogar</button>
      </div>
    </div>
  )
}