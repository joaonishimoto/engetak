/* "use client"

import { User } from "@prisma/client"
import axios, { AxiosResponse } from "axios"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

interface UserProps {
  email: string
}

export default function WorkingOnForm({ email }: UserProps) {
  const [userWorkingOn, setUserWorkingOn] = useState("")

  useEffect(() => {
    const fetchDatabase = async () => {
      try {
        const response: AxiosResponse<User> = await axios.post(
          "/api/workingon",
          {
            email,
          }
        )

        setUserWorkingOn(response.data.email)
      } catch (error) {
        console.error("Error: ", error)
      }
    }
    fetchDatabase()
  }, [email])

  return (
    <div className="bg-white rounded-lg p-5 w-max">
      <div className="text-3xl">
        <span className="text-teal-400 font-medium mr-4">Working On:</span>
        <span className="text-teal-600 font-bold">{userWorkingOn}</span>
      </div>
    </div>
  )
}
 */