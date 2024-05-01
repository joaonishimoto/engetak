"use client"

import { Button } from "@/components/ui/button"
import { data } from "@/database/groups/data"
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

export default function Page() {
  const { data: session, status } = useSession()
  const [projectManager, setProjectManager] = useState("")
  const [projects, setProjects] = useState<DataProps[] | undefined>()

  useEffect(() => {
    setProjects(data)
    setProjectManager(String(session?.user?.email))
  }, [session])

  return (
    <div className="p-5 space-x-5">
      {projects
        ?.filter((item) => item.manager === projectManager)
        ?.map((item, index) => (
          <Link href={`/home/projects/${item.id}`} key={index}>
            <Button className="bg-teal-400 hover:bg-teal-500">
              {item.project.name}
            </Button>
          </Link>
        ))}
    </div>
  )
}
