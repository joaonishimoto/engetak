'use client'

import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getNameByEmail } from "@/functions/getNameByEmail";
import { CircleCheckIcon, Gift, GiftIcon, LightbulbIcon, MedalIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { LeaderboardBoard } from "@/components/boards/leaderboard";
import { TasksBoard } from "@/components/boards/tasks";
import { RewardsBoard } from "@/components/boards/rewards";

export default function Page() {
  const [points, setPoints] = useState(1250)
  const { data: session, status } = useSession()


  const tasks = [
    {
      name: 'Task 01',
      points: 1800
    },
    {
      name: 'Task 02',
      points: 300
    },
    {
      name: 'Task 03',
      points: 100
    },
    {
      name: 'Task 04',
      points: 200
    }
  ]

  const rewards = [
    {
      name: 'Reward 01',
      points: 800
    },
    {
      name: 'Reward 02',
      points: 2300
    },
    {
      name: 'Reward 03',
      points: 100
    },
    {
      name: 'Reward 04',
      points: 200
    }
  ]

  return (
    <div className="min-h-screen p-4 space-y-4 bg-teal-50">
      <div className="bg-white w-full p-4 h-20 flex items-center justify-between border border-zinc-100 rounded shadow-sm">
        <h1 className="font-semibold text-teal-400 text-3xl">
          {getNameByEmail(String(session?.user?.email))}
        </h1>
        <Badge className="bg-teal-400 hover:bg-teal-400 text-white text-lg font-medium py-1">
          {points} <LightbulbIcon size={20} className="ml-1 text-white text-md"/>
        </Badge>
      </div>
      
      <div className="sm:grid sm:grid-cols-[1fr_440px] sm:gap-5">
        <div className="space-y-5">
          <div className="bg-white w-full h-min px-4 py-2 flex flex-col border border-zinc-100 rounded shadow-sm">
            <div className="inline mb-1 pb-2 w-full border-b">
              <h1 className="inline text-2xl font-semibold text-teal-700">
                <CircleCheckIcon className="inline mr-3"/> 
                Tasks
              </h1>
            </div>
            <TasksBoard />
          </div>

          <div className="bg-white w-ful h-min px-4 py-2 flex flex-col border border-zinc-100 rounded shadow-sm">
            <div className="inline mb-1 pb-2 w-full border-b">
              <h1 className="inline text-2xl font-semibold text-teal-700">
                <Gift className="inline mr-3"/> 
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
              <MedalIcon className="inline mr-3"/> 
              Leaderboard
              </div>
              <div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-teal-400 hover:bg-teal-500 font-semibold">
                      Request Lúmens
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Request Lúmens</DialogTitle>
                      <DialogDescription>
                        Write a brief description below with the reasons why you should receive the points. 
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="points" className="text-right">
                        Message
                        </Label>
                        <Textarea className="w-full col-span-3" placeholder="" />
                        <Label htmlFor="points" className="text-right">
                        Points
                        </Label>
                        <Input id="points" type="number" className="col-span-3" />
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

