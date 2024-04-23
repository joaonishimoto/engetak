"use client"

import { User } from "@prisma/client"
import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { Badge } from "../ui/badge"
import { getNameByEmail } from "@/functions/getNameByEmail"
import { UserPoints } from "../gamification/getUserPoints"
import { useSession } from "next-auth/react"
import { FaLightbulb } from "react-icons/fa"
import { BiSolidMedal } from "react-icons/bi"
import { FaMedal } from "react-icons/fa"
export function LeaderboardBoard() {
  const { data: session, status } = useSession()
  const [ranking, setRanking] = useState<User[]>([])

  useEffect(() => {
    const fetchDatabase = async () => {
      try {
        const response: AxiosResponse<User[]> = await axios.get("/api/users")
        setRanking(response.data)
      } catch (error) {
        console.error("Error to get clients:", error)
      }
    }
    fetchDatabase()
  }, [])

  return (
    <div className="">
      <div className="flex items-center justify-center py-4">
        <UserPoints email={String(session?.user?.email)} />
      </div>
      <div>
        {ranking
          .sort((a, b) => b.points - a.points)
          .map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between py-2.5"
            >
              <span className="text-lg font-medium text-zinc-400">
                {index == 0 ? (
                  <div className="">
                    {getNameByEmail(item.email)}
                    <FaMedal
                      size={20}
                      className="inline ml-3 mb-0.5 text-yellow-300"
                    />
                  </div>
                ) : (
                  <div>{getNameByEmail(item.email)}</div>
                )}
              </span>
              {index == 0 ? (
                <Badge
                  variant={"outline"}
                  className=" text-teal-400 text-base font-bold py-1.5 rounded-full flex items-center justify-center border-none"
                >
                  {item.points}{" "}
                  <FaLightbulb
                    size={20}
                    className="ml-1 text-teal-400 text-md"
                  />
                </Badge>
              ) : index == 1 ? (
                <Badge
                  variant={"outline"}
                  className=" text-teal-400 text-base font-bold py-1.5 rounded-full flex items-center justify-center border-none"
                >
                  {item.points}{" "}
                  <FaLightbulb
                    size={20}
                    className="ml-1 text-teal-400 text-md"
                  />
                </Badge>
              ) : index == 2 ? (
                <Badge
                  variant={"outline"}
                  className=" text-teal-400 text-base font-bold py-1.5 rounded-full flex items-center justify-center border-none"
                >
                  {item.points}{" "}
                  <FaLightbulb
                    size={20}
                    className="ml-1 text-teal-400 text-md"
                  />
                </Badge>
              ) : item.points === 0 ? (
                <Badge
                  variant={"outline"}
                  className=" text-teal-700 text-base font-bold py-1.5 rounded-full flex items-center justify-center border-none"
                >
                  {item.points}{" "}
                  <FaLightbulb
                    size={20}
                    className="ml-1 text-teal-700 text-md"
                  />
                </Badge>
              ) : (
                <Badge
                  variant={"outline"}
                  className=" text-teal-400 text-base font-bold py-1.5 rounded-full flex items-center justify-center border-none"
                >
                  {item.points}{" "}
                  <FaLightbulb size={20} className="ml-1 text-teal-400 text-md" />
                </Badge>
              )}
            </li>
          ))}
      </div>
    </div>
  )
}
