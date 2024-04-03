'use client'
import { getNameByEmail } from "@/functions/getNameByEmail"
import { useSession } from "next-auth/react"
import { Suspense } from "react"

export function WelcomeClient({ children }: any) {
  const { data: session } = useSession()

  const formattedName = getNameByEmail(session?.user?.email ?? "")

  return (
    <Suspense fallback={<div>OIIIIIIIIIIIIIIIII</div>}>
      <h1>
        {"Welcome, " + formattedName + "!"}
      </h1>
    </Suspense>
  )
}