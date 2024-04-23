"use client"

import {
  CircleCheckIcon,
  Gift,
  MedalIcon,
} from "lucide-react"

import { LeaderboardBoard } from "@/components/boards/leaderboard"
import { TasksBoard } from "@/components/boards/tasks"
import { RewardsBoard } from "@/components/boards/rewards"

export default function Page() {
  return (
    <div className="min-h-screen p-4 bg-teal-50">
      <div className="w-full pb-8 pt-6 flex justify-center items-end">
        <h1 className="text-teal-500 tracking-[0.2em] text-5xl font-bold bg-gradient-to-r from-[#44dcc3] to-[#13c7d0] text-transparent bg-clip-text">
          GAMIFY
        </h1>
      </div>
      <div className="sm:grid sm:grid-cols-[1fr_300px] sm:gap-5 space-y-5 sm:space-y-0">
        <div className="space-y-5 xl:grid xl:grid-cols-[1fr_1fr] xl:gap-5 xl:space-y-0">
          <div className="bg-white w-full h-min pb-2 flex flex-col border border-zinc-100 rounded-lg shadow-sm">
            <div className="inline mb-1 pb-2 pt-3 w-full bg-teal-300 rounded-t-lg">
              <h1 className="inline uppercase px-4 text-md font-bold text-white">
                <CircleCheckIcon className="inline mr-2 mb-1" />
                Tasks
              </h1>
            </div>
            <div className="px-4">
              <TasksBoard />
            </div>
          </div>
          <div className="bg-white w-full h-min pb-2 flex flex-col border border-zinc-100 rounded-lg shadow-sm">
            <div className="inline mb-1 pb-2 pt-3 w-full bg-teal-300 rounded-t-lg">
              <h1 className="inline uppercase px-4 text-md font-bold text-white">
                <Gift className="inline mr-2 mb-1" />
                Rewards
              </h1>
            </div>
            <div className="px-4">
              <RewardsBoard />
            </div>
          </div>
        </div>
        <div className="bg-white w-full h-min pb-2 flex flex-col border border-zinc-100 rounded-lg shadow-sm">
          <div className="inline mb-1 pb-2 pt-3 w-full bg-teal-300 rounded-t-lg">
            <h1 className="inline uppercase px-4 text-md font-bold text-white">
              <MedalIcon className="inline mr-2 mb-1" />
              LeaderBoard
            </h1>
          </div>
          <div className="px-4">
            <LeaderboardBoard />
          </div>
        </div>
      </div>
    </div>
  )
}
