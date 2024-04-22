'use client'

import { Reward } from "@prisma/client";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { LightbulbIcon } from "lucide-react";
import { getNameByEmail } from "@/functions/getNameByEmail";

export function RewardsBoard() {

  const [rewards, setRewards] = useState<Reward[]>([])

  useEffect(() => {
    const fetchDatabase = async () => {
      try {
        const response: AxiosResponse<Reward[]> = await axios.get('/api/rewards')
        setRewards(response.data);

      } catch (error) {
        console.error('Error to get clients:', error);
      }
    };
    fetchDatabase();
  }, [])

  return (
    <div className="">
      {rewards.length === 0 
      ? 
        <p className="flex items-center justify-center p-5 text-teal-500 font-medium">
          No Rewards.
        </p>
      : (
        <ul>
          {rewards
            .sort((a, b) => a.points - b.points)
            .map((item, index) => (
              <li key={index} className="flex items-center justify-between py-3">
                <span className="text-lg font-medium text-teal-500">
                  {item.name}
                </span>
                <Badge variant={"outline"} className="text-teal-400 text-base font-bold py-1">
                  {item.points} <LightbulbIcon size={20} className="ml-1 text-teal-400 text-md" />
                </Badge>
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}