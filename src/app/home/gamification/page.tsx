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
import { LightbulbIcon } from "lucide-react";

export default function Page() {
  const [points, setPoints] = useState(0)

  useEffect(() => {
  }, [points])

  const data = [
    {
      name: 'Fazer tal coisa',
      points: 800
    },
    {
      name: 'Fazer tal coisa',
      points: 300
    },
    {
      name: 'Fazer tal coisa',
      points: 100
    },
    {
      name: 'Fazer tal coisa',
      points: 200
    }
  ]

  return (
    <div className="h-screen p-4 space-y-4">
      <div className="bg-white w-full p-4 h-16 flex items-center justify-between border border-zinc-100 rounded shadow-sm">
        <h1 className="font-semibold text-teal-400  text-xl">
          Gustavo Miranda
        </h1>
        <Badge className="bg-teal-400 hover:bg-teal-400 text-white font-bold py-1">
          {points} <LightbulbIcon size={20} className="ml-1 text-white text-md"/>
        </Badge>
      </div>
      <div className="bg-white w-full p-4 h-16 flex items-center justify-between border border-zinc-100 rounded shadow-sm">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Request Lúmens</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Request Lúmens 💡</DialogTitle>
            <DialogDescription>
              Write a brief description below with the reasons why you receive the points. 
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
            <Button type="submit">Send Request</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      </div>
      <div className="bg-white w-full px-4 py-2 flex flex-col border border-zinc-100 rounded shadow-sm">
        {data.map(
          (item, index) => (
            <li key={index} className="flex items-center justify-between py-2">
              <span className="text-lg font-medium text-teal-600">
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

