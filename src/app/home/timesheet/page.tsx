"use client"

import { HeatMapDemo } from "@/components/calendar/heatmap"
import { CalendarCheck, CalendarIcon, Check } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BiPaperPlane, BiSolidPaperPlane } from "react-icons/bi"

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
            <div className="space-y-3">
              <div className="grid grid-cols-5 border-b pb-1 px-3">
                <h1 className="text-md text-teal-300 font-semibold text-center">
                  OS
                </h1>
                <h1 className="text-md text-teal-300 font-semibold text-center">
                  ITEM
                </h1>
                <h1 className="text-md text-teal-300 font-semibold text-center">
                  REF
                </h1>
                <h1 className="text-md text-teal-300 font-semibold text-center">
                  HOURS
                </h1>
                <h1 className="text-md text-teal-300 font-semibold text-center">
                  ACTIONS
                </h1>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-5 px-3">
                  <h1 className="text-md text-zinc-500 font-semibold text-center">
                    A307
                  </h1>
                  <h1 className="text-md text-zinc-500 font-semibold text-center">
                    01
                  </h1>
                  <h1 className="text-md text-zinc-500 font-semibold text-center">
                    2D
                  </h1>
                  <h1 className="text-md text-zinc-500 font-semibold text-center">
                    04:30
                  </h1>
                  <h1 className="text-md text-zinc-500 font-semibold text-center">
                    ...
                  </h1>
                </div>
                <div className="grid grid-cols-5 px-3">
                  <h1 className="text-md text-zinc-500 font-semibold text-center">
                    A307
                  </h1>
                  <h1 className="text-md text-zinc-500 font-semibold text-center">
                    01
                  </h1>
                  <h1 className="text-md text-zinc-500 font-semibold text-center">
                    2D
                  </h1>
                  <h1 className="text-md text-zinc-500 font-semibold text-center">
                    04:30
                  </h1>
                  <h1 className="text-md text-zinc-500 font-semibold text-center">
                    ...
                  </h1>
                </div>
              </div>
              <div className="flex items-center justify-between border-t pt-1 px-5">
                <h1 className="text-lg uppercase text-teal-400 font-bold ml-3">
                  Total
                </h1>
                <h1 className="text-lg text-teal-400 font-bold">08:00</h1>
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
            <div className="flex items-center justify-between w-56">
              <h1 className="text-zinc-500 text-lg font-semibold">OS</h1>
              <div className="flex flex-row gap-2">
                <Input
                  type="number"
                  className="w-24 h-10 text-md font-semibold text-zinc-500"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-56">
              <h1 className="text-zinc-500 text-lg font-semibold">ITEM</h1>
              <div className="flex flex-row gap-2">
                <Input
                  type="number"
                  className="w-24 h-10 text-md font-semibold text-zinc-500"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-56">
              <h1 className="text-zinc-500 text-lg font-semibold">REF</h1>
              <div className="flex flex-row gap-2">
                <Input
                  type="text"
                  className="w-24 h-10 text-md font-semibold text-zinc-500"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-56">
              <h1 className="text-zinc-500 text-lg font-semibold">HOURS</h1>
              <div className="flex flex-row gap-2">
                <Input
                  type="time"
                  value={"08:00"}
                  className="w-24 h-10 text-md font-semibold text-zinc-500"
                />
              </div>
            </div>
            <div className="w-56 text-right">
              <Button className="bg-teal-400 hover:bg-teal-500 font-bold w-24">
                <p className="mr-2">SEND</p>
                <BiSolidPaperPlane />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
