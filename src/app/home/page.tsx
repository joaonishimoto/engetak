'use client'
import WorkingOnForm from "@/components/forms/workingOn";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession()

  return (
    <div>
      <WorkingOnForm email={String(session?.user?.email)} />
    </div>
  )
}

