'use client'

import CreateUserForm from "@/components/forms/createOs";
import { OsesTable } from "@/components/tables/oses";
import { useSession } from "next-auth/react";


export default function Page() {
  const { data: session, status } = useSession()

  return (
    <div className="min-h-screen flex flex-col justify-start p-5 sm:w-[36rem] sm:mx-auto">
      <div className="">
        <h1 className="text-3xl font-medium text-teal-400 border-b pb-1">
          OS
        </h1>
        <OsesTable />
      </div>
      <div className="">
      <h1 className="text-3xl font-medium text-teal-400 border-b pb-1">
        Create a New OS
      </h1>
        <CreateUserForm />
      </div>
    </div>
  )
}