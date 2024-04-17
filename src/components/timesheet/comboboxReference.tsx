/* "use client"

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
import { useComboboxContext } from "./comboboxContext"

const references = [
  "3D", "2D", "DOC"
]

export function ComboboxReference() {
  const [open, setOpen] = React.useState(false)
  
  const { activeOS, setActiveOS, activeItem, setActiveItem, activeReference, setActiveReference, activeHours, setActiveHours } = useComboboxContext();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          disabled={activeOS == "" ? true : false}
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {activeOS
            ? references.find((references) => references === activeReference)
            : "Select Reference..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Reference" className="h-9" />
          <CommandEmpty>No Reference found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {references.map((references, index) => (
                <CommandItem
                  key={index}
                  value={references}
                  onSelect={(currentValue) => {
                    setActiveReference(currentValue === activeReference ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {references}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      activeReference === references ? "opacity-100" : "opacity-0"
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
 */