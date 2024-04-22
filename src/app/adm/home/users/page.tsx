'use client'

import CreateUserForm from "@/components/forms/createUser";
import { DataTableDemo } from "@/components/tables/users";

export default function Page() {

  return (
    <div className="min-h-screen flex flex-col justify-start p-5 sm:w-[36rem] sm:mx-auto">
      <div className="">
        <h1 className="text-3xl font-medium text-teal-400 border-b pb-1">
          Users
        </h1>
        <DataTableDemo />
      </div>
      <div className="">
      <h1 className="text-3xl font-medium text-teal-400 border-b pb-1">
        Create a New User
      </h1>
        <CreateUserForm />
      </div>
    </div>
  )
}