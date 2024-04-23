"use client"

import Image from "next/image"

import React, { ReactNode, useContext, useMemo } from "react"

import { ChevronFirst, ChevronLast } from "lucide-react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Context } from "./App"
import { UserLine } from "./User"

type SidebarProps = {
  children: ReactNode
}

type SidebarItemProps = {
  icon: React.ReactNode
  text: string
  alert?: boolean
  path: string
}

export function Sidebar({ children }: SidebarProps) {
  const { isExpanded, setExpanded } = useContext(Context)

  return (
    <div
      className={`h-full w-full overflow-y-auto overflow-x-hidden scrollbar-thin ${
        isExpanded ? "" : ""
      }`}
    >
      <nav className="h-screen flex flex-col bg-white border-r shadow-lg">
        <div
          className={`flex justify-between items-center my-3 -mb-1 ${
            isExpanded ? "ml-10" : ""
          }`}
        >
          <Image
            src={"/engetak.png"}
            alt=""
            width={500}
            height={500}
            className={`overflow-hidden ${isExpanded ? "w-20 h-20" : "w-0"}`}
          />
          {isExpanded ? (
            <p className="text-app-500 font-bold mr-auto text-xl -ml-2">
              ENGETAK
            </p>
          ) : null}
          <div className="h-20 flex items-center justify-center">
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 mr-4 rounded-lg bg-gray-50 hover:bg-teal-100 text-app-400 transition-all duration-300"
            >
              {isExpanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>
        </div>

        <Context.Provider value={{ isExpanded, setExpanded }}>
          <ul className="flex-1 mx-3">{children}</ul>
        </Context.Provider>
        <UserLine />
      </nav>
    </div>
  )
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  alert,
  path,
}) => {
  const { isExpanded } = useContext(Context)

  const pathname = usePathname()

  const isActive = useMemo(() => {
    if (path === "/home") {
      return path === pathname || pathname == path
    }
    return path === pathname || pathname.includes(path)
  }, [path, pathname])

  return (
    <Link href={path} className="">
      <li
        className={`relative flex items-center py-2 px-3 my-3 font-medium rounded-md cursor-pointer group 
        ${
          isActive
            ? "bg-app-400 text-white font-semibold shadow-[2px_2px_5px_1px_rgba(0,0,0,0.2)] transition-all duration-300"
            : "text-zinc-400 hover:text-app-400 hover:bg-zinc-100 hover:font-semibold transition-all duration-300"
        }
        ${isExpanded ? "hover:translate-x-1" : ""}`}
      >
        {icon}
        <span
          className={`overflow-hidden ${
            isExpanded ? "ml-5 pt-0.5 h-[28px]" : "w-0 h-[28px]"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-app-400
              ${isExpanded ? "" : "top-1"} 
              ${isActive ? "bg-teal-600" : ""}    
            `}
          ></div>
        )}

        {!isExpanded && (
          <div
            className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-app-100 text-app-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
          >
            {text}
          </div>
        )}
      </li>
    </Link>
  )
}
