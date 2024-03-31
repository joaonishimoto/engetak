import { DataTableDemo } from "@/components/UserTable";


export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-500 p-10 ">
      <div className="w-1/2">
        <DataTableDemo />
      </div>
    </div>
  )
}