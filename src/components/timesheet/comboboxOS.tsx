"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { os } from "@/database/OS/database"
import { useComboboxContext } from "./comboboxContext"

export function ComboboxOS() {
  const [open, setOpen] = React.useState(false)
  
  const { activeOS, setActiveOS, activeItem, setActiveItem, activeReference, setActiveReference, activeHours, setActiveHours } = useComboboxContext();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {activeOS
            ? os.find((os) => os.name === activeOS)?.name
            : "Select OS..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search OS" className="h-9" />
          <CommandEmpty>No OS found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {os.map((os) => (
                <CommandItem
                  key={os.name}
                  value={os.name}
                  onSelect={(currentValue) => {
                    setActiveItem("")
                    setActiveReference("")
                    setActiveHours("")
                    setActiveOS(currentValue === activeOS ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {os.name + "_" + os.desc}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      activeOS === os.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
