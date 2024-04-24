"use client"
import { HeatMapDemo } from "@/components/calendar/heatmap"
import WorkingOnForm from "@/components/forms/workingOn"
import { useSession } from "next-auth/react"
import { text } from "stream/consumers"

export default function Page() {
  const { data: session, status } = useSession()

  return (
    <div className="bg-teal-50 min-h-screen p-5 gap-5 space-y-5">
      <div className="bg-white w-full h-min pb-2 flex flex-col border border-zinc-100 rounded-lg shadow-sm">
        <WorkingOnForm email={String(session?.user?.email)} />
      </div>
    </div>
  )
}
