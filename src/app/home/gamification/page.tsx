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
      <div className="bg-white w-full p-4 h-20 flex items-center justify-between border border-zinc-100 rounded shadow-sm">
        <h1 className="font-semibold text-teal-700 text-3xl">
          {getNameByEmail(String(session?.user?.email))}
        </h1>
        <UserPoints email={String(session?.user?.email)} />
      </div>
      <div className="sm:grid sm:grid-cols-[1fr_300px] sm:gap-5 space-y-5 sm:space-y-0">
        <div className="space-y-5 xl:grid xl:grid-cols-[1fr_1fr] xl:gap-5 xl:space-y-0">
          <div className="bg-white w-full h-min px-4 py-2 flex flex-col border border-zinc-100 rounded shadow-sm">
            <div className="inline mb-1 pb-2 w-full border-b">
              <h1 className="inline text-2xl font-semibold text-teal-700">
                <CircleCheckIcon className="inline mr-3" />
                Tasks
              </h1>
            </div>
            <TasksBoard />
          </div>
          <div className="bg-white w-ful h-min px-4 py-2 flex flex-col border border-zinc-100 rounded shadow-sm">
            <div className="inline mb-1 pb-2 w-full border-b">
              <h1 className="inline text-2xl font-semibold text-teal-700">
                <Gift className="inline mr-3" />
                Rewards
              </h1>
            </div>
            <RewardsBoard />
          </div>
        </div>
        <div className="bg-white h-min px-4 py-2 flex flex-col border border-zinc-100 rounded shadow-sm">
          <div className="inline mb-1 pb-2 w-full border-b">
            <div className="flex items-center justify-between text-2xl font-semibold text-teal-700">
              <div>
                <MedalIcon className="inline mr-3" />
                Leaderboard
              </div>
              <div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-teal-400 hover:bg-teal-500 font-semibold">
                      <LightbulbIcon />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Request Lúmens</DialogTitle>
                      <DialogDescription>
                        Write a brief description below with the reasons why you
                        should receive the points.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="points" className="text-right">
                          Message
                        </Label>
                        <Textarea
                          className="w-full col-span-3"
                          placeholder=""
                        />
                        <Label htmlFor="points" className="text-right">
                          Points
                        </Label>
                        <Input
                          id="points"
                          type="number"
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button className="bg-teal-500 hover:bg-teal-600 transition-all duration-300">
                        Send Request
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          <LeaderboardBoard />
        </div>
      </div>
    </div>
  )
}
