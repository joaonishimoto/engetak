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
import { CircleCheckIcon, GiftIcon, LightbulbIcon, MedalIcon } from "lucide-react";
import { useSession } from "next-auth/react";

export default function Page() {
  const [points, setPoints] = useState(1250)
  const { data: session, status } = useSession()

  useEffect(() => {
  }, [points])

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

  const ranking = [
    {
      name: 'João Oliveira',
      points: 800
    },
    {
      name: 'Gustavo Miranda',
      points: 2300
    },
    {
      name: 'Gabriel Cunha',
      points: 100
    },
    {
      name: 'Camila Moura',
      points: 200
    }
  ]

  return (
    <div className="h-screen p-4 space-y-4">
      <div className="bg-white w-full p-4 h-20 flex items-center justify-between border border-zinc-100 rounded shadow-sm">
        <h1 className="font-semibold text-teal-400 text-3xl">
        {getNameByEmail(String(session?.user?.email))}
        </h1>
        <Badge className="bg-teal-400 hover:bg-teal-400 text-white text-lg font-medium py-1">
          {points} <LightbulbIcon size={20} className="ml-1 text-white text-md"/>
        </Badge>
      </div>
      <div className="bg-white w-full p-4 h-16 flex items-center justify-between border border-zinc-100 rounded shadow-sm">
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
      <div className="bg-white w-full px-4 py-2 flex flex-col border border-zinc-100 rounded shadow-sm">
      <div className="inline mb-1 pb-2 w-full border-b">
          <h1 className="inline text-2xl font-semibold text-teal-700">
            <CircleCheckIcon className="inline mr-3"/> 
            Tasks
          </h1>
        </div>
        {tasks.map(
          (item, index) => (
            <li key={index} className="flex items-center justify-between py-2">
              <span className="text-lg font-medium text-teal-500">
                {item.name}
              </span>
              <Badge variant={"outline"} className="text-teal-400 text-base font-bold py-1">
                {'+ ' + item.points} <LightbulbIcon size={20} className="ml-1 text-teal-400 text-md" />
              </Badge>
            </li>
          ))}
      </div>

      <div className="bg-white w-full px-4 py-2 flex flex-col border border-zinc-100 rounded shadow-sm">
      <div className="inline mb-1 pb-2 w-full border-b">
          <h1 className="inline text-2xl font-semibold text-teal-700">
            <GiftIcon className="inline mr-3"/> 
            Rewards
          </h1>
        </div>
        {rewards.map(
          (item, index) => (
            <li key={index} className="flex items-center justify-between py-2">
              <span className="text-lg font-medium text-teal-500">
                {item.name}
              </span>
              <Badge variant={"outline"} className="text-teal-400 text-base font-bold py-1">
                {'- ' + item.points} <LightbulbIcon size={20} className="ml-1 text-teal-400 text-md" />
              </Badge>
            </li>
          ))}
      </div>

      <div className="bg-white w-full px-4 py-2 flex flex-col border border-zinc-100 rounded shadow-sm">
        <div className="inline mb-1 pb-2 w-full border-b">
          <h1 className="inline text-2xl font-semibold text-teal-700">
            <MedalIcon className="inline mr-3"/> 
            Leaderboard
          </h1>
        </div>
        {ranking
          .sort((a, b) => b.points - a.points)
          .map((item, index) => (
            <li key={index} className="flex items-center justify-between py-2">
              <span className="text-lg font-medium text-teal-500">
                {item.name}
              </span>
              <Badge variant={"outline"} className="text-teal-400 text-base font-bold py-1">
                {item.points} <LightbulbIcon size={20} className="ml-1 text-teal-400 text-md" />
              </Badge>
            </li>
          ))}
      </div>
    </div>
  )
}

