'use client'

import { User } from "@prisma/client";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { LightbulbIcon } from "lucide-react";
import { getNameByEmail } from "@/functions/getNameByEmail";

interface UserPointsProps {
  email: string;
}

export function UserPoints({ email }: UserPointsProps) {

  const [userPoints, setPoints] = useState(0)

  useEffect(() => {
    const fetchDatabase = async () => {
      try {
        const response: AxiosResponse = await axios.post('/api/points', {
          email: 'joao.oliveira@engetak.com'
        })

        const { points } = response.data

        setPoints(points);

      } catch (error) {
        console.error('Error to get clients:', error);
      }
    };
    fetchDatabase();
  }, [])

  return (
    <Badge className="bg-teal-400 hover:bg-teal-400 text-xl">
      {userPoints} <LightbulbIcon size={20} className="ml-1"/>
    </Badge>
  )
}