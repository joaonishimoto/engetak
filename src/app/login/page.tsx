"use client"

import { useToast } from "@/components/ui/use-toast"
import { signIn, useSession } from "next-auth/react"
import Image from "next/image"
import { useState } from "react"
import { getNameByEmail } from "../../functions/getNameByEmail"

import { Toaster } from "@/components/ui/toaster"
import { useRouter } from "next/navigation"

export default function Example() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { data: session, status } = useSession()
  const { toast } = useToast()
  const router = useRouter()

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault()

    const login = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    })

    if (login?.error) {
      console.log("error on credentials")
      return toast({
        variant: "destructive",
        title: "User not found",
        description: "There was a problem with your request.",
      })
    }

    const formattedName = getNameByEmail(email)

    const currentDate = new Date()
    const formattedDate = currentDate.toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    })

    toast({
      variant: "default",
      title: "Welcome, " + formattedName + "!" + " Redirecting..",
      description: formattedDate,
    })

    setTimeout(() => {
      router.push("/")
    }, 3000)
  }

  return (
    <div className="h-screen">
      <div className="flex h-full flex-1 flex-col justify-center px-6 lg:px-8 pb-20">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-5 ">
          <Image
            className="mx-auto h-48 w-48 -mb-20"
            width={700}
            height={700}
            src="/engetak.png"
            alt="Your Company"
          />
          <h1 className="mt-10 text-center text-3xl leading-9 tracking-tight text-zinc-900">
            <span className="text-teal-800 font-semibold">Welcome to </span>
            <span className="text-teal-400 font-bold">Engetak</span>
          </h1>
          <h2 className="text-center text-sm font-medium leading-7 text-zinc-500 pb-3">
            here is where the work flows
          </h2>
        </div>
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-zinc-900"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="your.name@engetak.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-zinc-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="1234567"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex items-center justify-center pt-3">
              <button
                className="w-2/3 rounded-md bg-teal-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                onClick={handleClick}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}
