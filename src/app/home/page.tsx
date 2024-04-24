"use client"
import { HeatMapDemo } from "@/components/calendar/heatmap"
import WorkingOnForm from "@/components/forms/workingOn"
import { useSession } from "next-auth/react"
import { CircularProgress } from "@nextui-org/react"
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

/*       ;<div className="">
        <CircularProgress
          classNames={{
            svg: "w-20 h-20 drop-shadow-md",
            indicator: "",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
            label: "text-xl text-teal-400 font-semibold",
          }}
          label={60 * 8 - 60 * 7 + " mins"}
          size="lg"
          value={60 * 7}
          color={"success"}
          maxValue={60 * 8}
          strokeWidth={4}
          formatOptions={{ style: "unit", unit: "minute" }}
          showValueLabel={false}
        />
      </div> */
