
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { LogOutIcon, MoreVertical, UserIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "./App";

import { getNameByEmail } from "@/functions/getNameByEmail";
import { useSession } from "next-auth/react";
import { getTwoFirstLetters } from "@/functions/getTwoFirstLetters";
import { AvatarIcon } from "@radix-ui/react-icons";

export function UserLine() {
  const { isExpanded, setExpanded } = useContext(Context);
  const { data: session, status } = useSession()

  
  return (
    <div className="border-t flex p-3 cursor-default">
      <Avatar>
        {/* <AvatarImage src="https://github.com/joaonishimoto.png" /> */}
        <AvatarFallback className="font-semibold">
          {getTwoFirstLetters(String(session?.user?.email))}
        </AvatarFallback>
      </Avatar>
      <div
        className={`flex justify-between items-center overflow-hidden
        ${isExpanded 
          ? "w-full ml-3" 
          : "w-0"
        }`}
      >
        <div className="leading-4">
          <h4 className="font-semibold">
            {getNameByEmail(String(session?.user?.email))}
          </h4>
          <span className="text-xs text-gray-600">
            {session?.user?.email}
          </span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical size={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer"><UserIcon size={15} className="mr-3 text-zinc-600"/>
              <Link href={'/home/profile'}>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <LogOutIcon size={15} className="mr-3 text-zinc-600"/>
              <button onClick={() => signOut()}>Logout</button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}