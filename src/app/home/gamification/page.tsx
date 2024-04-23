"use client"

import { Badge } from "@/components/ui/badge"
import { Suspense, useEffect, useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { getNameByEmail } from "@/functions/getNameByEmail"
import {
  CircleCheckIcon,
  Gift,
  GiftIcon,
  LightbulbIcon,
  MedalIcon,
} from "lucide-react"

import { useSession } from "next-auth/react"
import { LeaderboardBoard } from "@/components/boards/leaderboard"
import { TasksBoard } from "@/components/boards/tasks"
import { RewardsBoard } from "@/components/boards/rewards"
import { UserPoints } from "@/components/gamification/getUserPoints"

export default function Page() {
  const { data: session, status } = useSession()

  return (
    <div className="min-h-screen p-4 space-y-5 bg-teal-50">
      <div className="bg-white w-full p-4 h-20 flex items-center justify-between border border-zinc-100 rounded-lg shadow-sm">
        <h1 className="font-semibold text-teal-700 text-3xl">
          {getNameByEmail(String(session?.user?.email))}
        </h1>
      </div>
      <div className="sm:grid sm:grid-cols-[1fr_300px] sm:gap-5 space-y-5 sm:space-y-0">
        <div className="space-y-5 xl:grid xl:grid-cols-[1fr_1fr] xl:gap-5 xl:space-y-0">
          <div className="bg-white w-full h-min pb-2 flex flex-col border border-zinc-100 rounded-lg shadow-sm">
            <div className="inline mb-1 py-2 w-full bg-teal-300 rounded-t-lg">
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
            <div className="inline mb-1 py-2 w-full bg-teal-300 rounded-t-lg">
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
          <div className="inline mb-1 py-2 w-full bg-teal-300 rounded-t-lg">
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
