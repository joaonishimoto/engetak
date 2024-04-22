import { User } from "@prisma/client";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { LightbulbIcon } from "lucide-react";
import { getNameByEmail } from "@/functions/getNameByEmail";

export function LeaderboardBoard() {

  const [ranking, setRanking] = useState<User[]>([])

  useEffect(() => {
    const fetchDatabase = async () => {
      try {
        const response: AxiosResponse<User[]> = await axios.get('/api/users')
        setRanking(response.data);

      } catch (error) {
        console.error('Error to get clients:', error);
      }
    };
    fetchDatabase();
  }, [])

  return (
    <div className="">
      {ranking
      .sort((a, b) => b.points - a.points)
      .map((item, index) => (
        <li key={index} className="flex items-center justify-between py-3">
          <span className="text-lg font-medium text-teal-500">
            {getNameByEmail(item.email)}
          </span>
          <Badge variant={"outline"} className="text-teal-400 text-base font-bold py-1">
            {item.points} <LightbulbIcon size={20} className="ml-1 text-teal-400 text-md" />
          </Badge>
        </li>
      ))}
    </div>
  )
}