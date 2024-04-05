'use client'

import CreateUserForm from "@/components/adm/createOsForm";
import { DataTableDemo } from "@/components/tables/osTable";
import { useSession } from "next-auth/react";


export default function Page() {
  const { data: session, status } = useSession()

  return (
    <div className="min-h-screen flex flex-col justify-start p-5 sm:w-[36rem] sm:mx-auto">
      <div className="">
        <h1 className="text-3xl font-medium text-teal-400 border-b pb-1">
          OS
        </h1>
        <DataTableDemo />
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