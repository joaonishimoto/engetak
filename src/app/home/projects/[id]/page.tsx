"use client"

import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { data } from "@/database/groups/data"
import { getTwoFirstLetters } from "@/functions/getTwoFirstLetters"
import { AvatarFallback } from "@radix-ui/react-avatar"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface DataProps {
  id: string
  manager: string
  members: string[]
  project: {
    name: string
    tasks: {
      title: string
      assigned: string
      isComplete: boolean
    }[]
  }
}

export default function Page({ params }: { params: { id: string } }) {
  const { data: session, status } = useSession()
  const [projectManager, setProjectManager] = useState("")
  const [projects, setProjects] = useState<DataProps[] | undefined>()

  useEffect(() => {
    setProjects(data)
  }, [])

  return (
    <div className="p-5">
      {projects
        ?.filter((item) => item.id === params.id)
        ?.map((item, index) => (
          <div key={index} className="space-y-5">
            {item.project.tasks.map((item, index) => (
              <div key={index} className="bg-teal-400 hover:bg-teal-500 w-min">
                <h1 className="">{item.title}</h1>
                <Avatar>
                  <AvatarFallback className="font-semibold">
                    {getTwoFirstLetters(String(session?.user?.email))}
                  </AvatarFallback>
                </Avatar>
              </div>
            ))}
          </div>
        ))}
      !
    </div>
  )
}
