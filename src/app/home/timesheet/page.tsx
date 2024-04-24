import { HeatMapDemo } from "@/components/calendar/heatmap";
import { ComingSoon } from "@/components/home/comingsoon";
import { Calendar, CalendarCheck, Clock, MedalIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="p-5">
      <div className="bg-white w-full h-min pb-2 flex flex-col border border-zinc-100 rounded-lg shadow-sm">
        <div className="inline mb-1 pb-2 pt-3 w-full bg-teal-300 rounded-t-lg">
          <h1 className="inline uppercase px-4 text-md font-bold text-white">
            <Calendar className="inline mr-2 mb-1" />
            Calendar Point
          </h1>
        </div>
        <div className="pt-4 px-4 flex flex-col">
          <div className="flex items-center justify-center">
            <HeatMapDemo />
          </div>
          {/* Appointment */}
          <div className="p-2">
            <h1 className="text-lg text-center py-2 text-teal-400 font-semibold">
              Today Appointment
            </h1>
            <div className="space-y-1">
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
    </div>
  )
}