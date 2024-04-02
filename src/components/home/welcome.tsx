'use client'

import { getNameByEmail } from "@/app/functions/getNameByEmail"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export function Welcome() {
  const { data: session, status } = useSession()

  const userEmail: string = session?.user?.email ?? ""

  const formattedName = getNameByEmail(userEmail)

  return(
    <h1>Welcome, {formattedName}!</h1>
  )
}
