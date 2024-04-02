'use client'
import { getNameByEmail } from "@/app/functions/getNameByEmail"
import { useSession } from "next-auth/react"

export function WelcomeClient({ children }: any) {
  const { data: session } = useSession()

  const formattedName = getNameByEmail(session?.user?.email ?? "")

  return (
    <h1>
      {"Welcome, " + formattedName + "!"}
    </h1>
  )
}