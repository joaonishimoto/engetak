'use client'
import { Sidebar, SidebarItem } from "./Sidebar";
import { Box, FileClockIcon, Home, Layers, LayoutDashboard, Settings, StarIcon, StickyNote } from "lucide-react";
import { Dispatch, SetStateAction, createContext, useState } from "react";

type ContextType = {
  isExpanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
};

type MyApp = {
  children?: React.ReactNode;
}

export const Context = createContext<ContextType>({ isExpanded: false, setExpanded: () => {} });

export default function App({ children }: MyApp) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <Context.Provider value={{ isExpanded, setExpanded }}>
      <div className={`flex h-screen overflow-y-auto`}>
      <aside className={`fixed bg-white z-50
        ${isExpanded ? "w-[300px]" : "" }`}>
          <Sidebar>
            <SidebarItem icon={<Home size={20} />} text="Home" path="/home" />
            <SidebarItem icon={<FileClockIcon size={20} />} text="Time Sheet" path="/home/timesheet" />
            <SidebarItem icon={<StarIcon size={20} />} text="Gamification" path="/home/gamification"/>
            <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" path="/home/dashboard" />
            <SidebarItem icon={<Layers size={20} />} text="Tasks" path="/home/tasks" alert />
            <SidebarItem icon={<Box size={20} />} text="Detail" path="/home/detail" alert />
            <hr className="my-3" />
            <SidebarItem icon={<Settings size={20} />} text="Settings" path="/home/settings" />
          </Sidebar>
        </aside>
        <main className="flex-1 pl-[68px] h-screen w-full bg-app-050">
          {children}
        </main>
      </div>
    </Context.Provider>
  );
}
