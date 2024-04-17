import CreateUserForm from "@/components/adm/createUserForm";
import SendPoints from "@/components/adm/sendPoints";
import { DataTableDemo } from "@/components/tables/usersTable";
import { Skeleton } from "@/components/ui/skeleton";
import { LightbulbIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen w-full p-5 space-y-5">
      <div className="pb-5
      sm:grid sm:grid-cols-2 sm:gap-5
      ">
        <div className="w-full">
          <h1 className="text-3xl font-medium text-teal-400 border-b pb-1">
            Users Table
          </h1>
          <DataTableDemo />
        </div>
        <div className="h-full space-y-16">
          <div className="w-full">
            <h1 className="text-3xl font-medium text-teal-400 border-b pb-1">
              Create a New User
            </h1>
            <CreateUserForm />
          </div>
          <div className="w-full">
            <h1 className="text-3xl font-medium text-teal-400 border-b pb-1">     
              Give or Take Lúmens <LightbulbIcon size={50} className="inline mb-3 text-teal-300 text-md"/>
            </h1>
            <SendPoints />
          </div>
        </div>
      </div>

      <div className="sm:grid grid-cols-2 gap-5">
        <div>
          <Skeleton className="w-full h-full"/>
        </div>
        <div className="sm:grid gap-5">
          <Skeleton className="w-full h-48"/>
          <Skeleton className="w-full h-48"/>
          <Skeleton className="w-full h-48"/>
          <Skeleton className="w-full h-48"/>
        </div>
      </div>
    </div>
  )
}