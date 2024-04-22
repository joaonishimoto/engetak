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
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CommandList } from "cmdk"
import axios from "axios"
import { prisma } from "@/lib/prisma"

interface Framework {
  id: number;
  name: string;
}

export function ComboboxClient() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')
  const [frameworks, setFrameworks] = React.useState<Framework[]>([]) // Definindo o tipo de dados

  React.useEffect(() => {
    const fetchFrameworks = async () => {
      try {
        const response = await axios.get('/api/clients')
        setFrameworks(response.data)
      } catch (error) {
        console.error('Error fetching frameworks:', error)
      }
    }
    fetchFrameworks()
  }, []) 

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between font-normal"
        >
          {value
            ? frameworks.find((framework) => framework.name === value)?.name
            : "SELECT CLIENT..."
          }
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search Client..." className="h-9" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.id}
                  value={framework.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.name}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === framework.name ? "opacity-100" : "opacity-0"
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
