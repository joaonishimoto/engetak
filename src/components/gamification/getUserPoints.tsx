"use client"

import { User } from "@prisma/client"
import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { Badge } from "../ui/badge"
import { LightbulbIcon } from "lucide-react"
import { getNameByEmail } from "@/functions/getNameByEmail"
import { useSession } from "next-auth/react"
import { FaLightbulb } from "react-icons/fa"
import { FcEngineering } from "react-icons/fc"

interface UserPointsProps {
  email: string
}

export function UserPoints({ email }: UserPointsProps) {
  const { data: session, status } = useSession()
  const [userPoints, setPoints] = useState(0)

  useEffect(() => {
    const fetchDatabase = async () => {
      try {
        const response: AxiosResponse = await axios.post("/api/points", {
          email: String(session?.user?.email),
        })

        const { points } = response.data

        setPoints(points)
      } catch (error) {
        console.error("Error to get clients:", error)
      }
    }
    fetchDatabase()
  }, [session])

  return (
    <Badge
      variant={"outline"}
      className="text-4xl text-teal-400 gap-2 border-none font-bold"
    >
      <FaLightbulb size={30} className="inline mt-1" />
      {userPoints}
    </Badge>
  )
}
