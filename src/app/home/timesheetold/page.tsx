"use client"

import { HeatMapDemo } from "@/components/calendar/heatmap"
import { CalendarCheck, CalendarIcon, Check } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  
  return (
    <div className="p-5 min-h-screen flex flex-col space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
      <div className="bg-white w-full h-min pb-2 flex flex-col border border-zinc-100 rounded-lg shadow-sm">
        <div className="inline mb-1 pb-2 pt-3 w-full bg-teal-300 rounded-t-lg">
          <h1 className="inline uppercase px-4 text-md font-bold text-white">
            <CalendarIcon className="inline mr-2 mb-1" />
            Visualization Area
          </h1>
        </div>
        <div className="pt-4 px-4 flex flex-col">
          <div className="flex items-center justify-center">
            <HeatMapDemo />
          </div>
          {/* Appointment */}
          <div className="p-2">
            <h1 className="text-lg text-center py-2 text-teal-400 font-semibold">
              Today Works
            </h1>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h1 className="text-md text-zinc-400 font-medium ml-3">
                  Start:
                </h1>
                <h1 className="text-md text-zinc-400 font-medium">07:32</h1>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-md text-zinc-400 font-medium ml-3">End:</h1>
                <h1 className="text-md text-zinc-400 font-medium">16:36</h1>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-md text-zinc-400 font-medium ml-3">
                  Extra Start:
                </h1>
                <h1 className="text-md text-zinc-400 font-medium">16:36</h1>
              </div>
              <div className="flex items-center justify-between pb-1">
                <h1 className="text-md text-zinc-400 font-medium ml-3">
                  Extra End:
                </h1>
                <h1 className="text-md text-zinc-400 font-medium">18:36</h1>
              </div>
              <div className="flex items-center justify-between border-t pt-1.5">
                <h1 className="text-md text-teal-400 font-bold ml-3">
                  Total Work:
                </h1>
                <h1 className="text-md text-teal-400 font-medium">08:00</h1>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="text-md text-teal-400 font-bold ml-3">
                  Extra Work:
                </h1>
                <h1 className="text-md text-teal-400 font-medium">02:04</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full h-min flex flex-col border border-zinc-100 rounded-lg shadow-sm">
        <div className="inline mb- pb-2 pt-3 w-full bg-teal-300 rounded-t-lg">
          <h1 className="inline uppercase px-4 text-md font-bold text-white">
            <CalendarCheck className="inline mr-2 mb-1" />
            Appointment Area
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="w-full p-5 border-b sm:border-none flex items-center justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border w-min"
            />
          </div>
          <div className="p-5 w-full space-y-5 flex flex-col items-center justify-center">
            <div className="flex items-center justify-between w-60">
              <h1 className="text-teal-400 text-lg font-semibold">Start</h1>
              <div className="flex flex-row gap-2">
                <Input type="time" className="w-min h-10" />
                <Button className="bg-teal-300 hover:bg-teal-400 size-10 text-3xl pb-3">
                  +
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between w-60">
              <h1 className="text-teal-400 text-lg font-semibold">End</h1>
              <div className="flex flex-row gap-2">
                <Input type="time" className="w-min h-10" />
                <Button className="bg-teal-300 hover:bg-teal-400 size-10 text-3xl pb-3">
                  +
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between w-60">
              <h1 className="text-teal-400 text-lg font-semibold">
                Extra Start
              </h1>
              <div className="flex flex-row gap-2">
                <Input type="time" className="w-min h-10" />
                <Button className="bg-teal-300 hover:bg-teal-400 size-10 text-3xl pb-3">
                  +
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between w-60">
              <h1 className="text-teal-400 text-lg font-semibold">Extra End</h1>
              <div className="flex flex-row gap-2">
                <Input type="time" className="w-min h-10" />
                <Button className="bg-teal-300 hover:bg-teal-400 size-10 text-3xl pb-3">
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
