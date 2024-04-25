"use client"

import { HeatMapDemo } from "@/components/timesheet/heatmap"
import { CalendarCheck, CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { useState, useEffect, ChangeEvent } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BiSolidPaperPlane } from "react-icons/bi"
import { datas } from "@/database/teste/data"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { randomUUID } from "crypto"

interface Appointment {
  id: string
  os: string
  item: string
  ref: string
  hours: string
}

const FormSchema = z.object({
  id: z.string(),
  os: z.string().length(3, {
    message: "OS must be exactly 3 characters.",
  }),
  item: z.string().length(2, {
    message: "Item must be exactly 2 characters.",
  }),
  ref: z.string().length(2, {
    message: "Ref must be exactly 2 characters.",
  }),
  hours: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: "Hours must be in HH:mm format (e.g., 08:00).",
  }),
})

const data: Appointment[] = []

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [appointments, setAppointments] = useState<Appointment[]>(data)
  
/*   const [newAppointment, setNewAppointment] = useState<Appointment>({
    id: "",
    os: "",
    item: "",
    ref: "",
    hours: "",
  }) */

  useEffect(() => {
    /* setNewAppointment(data[0] || { os: "", item: "", ref: "", hours: "" }) */
  }, []) // O array vazio [] garante que o useEffect só é executado uma vez, sem dependências

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: String(data.length + 1),
      os: "",
      item: "",
      ref: "",
      hours: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Appointed hours!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
    setAppointments((prevAppointments) => [...prevAppointments, data])
  }

  const calculateTotalHours = (): string => {
    let totalHours = 0
    appointments.forEach((appointment) => {
      const timeParts = appointment.hours.split(":")
      const hours = parseInt(timeParts[0], 10)
      const minutes = parseInt(timeParts[1], 10)
      totalHours += hours + minutes / 60
    })
    return totalHours.toFixed(2)
  }

  return (
    <div className="p-5 min-h-screen flex flex-col space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
      {/* Visualização de Calendário */}
      <div className="bg-white w-full h-min pb-2 flex flex-col border border-zinc-100 rounded-lg shadow-sm">
        <div className="inline mb-1 pb-2 pt-3 w-full bg-teal-300 rounded-t-lg">
          <h1 className="inline uppercase px-4 text-md font-bold text-white">
            <CalendarIcon className="inline mr-2 mb-1" />
            Visualization Area
          </h1>
        </div>
        {/* Renderização dos dados */}
        <div className="pt-4 px-4 flex flex-col">
          <div className="flex items-center justify-center">
            <HeatMapDemo data={datas} />
          </div>
          {/* Lista de Compromissos */}
          <div className="p-2">
            <div className="space-y-3">
              <div className="grid grid-cols-5 border-b pb-1 px-3">
                <h1 className="text-md text-teal-300 font-semibold text-center">
                  OS
                </h1>
                <h1 className="text-md text-teal-300 font-semibold text-center">
                  ITEM
                </h1>
                <h1 className="text-md text-teal-300 font-semibold text-center">
                  REF
                </h1>
                <h1 className="text-md text-teal-300 font-semibold text-center">
                  HOURS
                </h1>
                <h1 className="text-md text-teal-300 font-semibold text-center">
                  ACTIONS
                </h1>
              </div>
              {/* Mapeando os compromissos */}
              {appointments.length == 0 ? (
                <div className="flex items-center justify-center w-full text-md font-semibold text-zinc-500">
                  No Results.
                </div>
              ) : (
                appointments.map((appointment, index) => (
                  <div className="grid grid-cols-5 px-3" key={index}>
                    <h1 className="text-md text-zinc-500 font-semibold text-center">
                      {appointment.os}
                    </h1>
                    <h1 className="text-md text-zinc-500 font-semibold text-center">
                      {appointment.item}
                    </h1>
                    <h1 className="text-md text-zinc-500 font-semibold text-center">
                      {appointment.ref}
                    </h1>
                    <h1 className="text-md text-zinc-500 font-semibold text-center">
                      {appointment.hours}
                    </h1>
                    <h1 className="text-md text-zinc-500 font-semibold text-center">
                      ...
                    </h1>
                  </div>
                ))
              )}

              {/* Total de Horas */}
              <div className="flex items-center justify-between border-t pt-1 px-5">
                <h1 className="text-lg uppercase text-teal-400 font-semibold ml-3">
                  Total
                </h1>
                <h1 className="text-lg text-teal-400 font-semibold">
                  {calculateTotalHours()} hrs
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Área de Compromissos */}
      <div className="bg-white w-full h-min flex flex-col border border-zinc-100 rounded-lg shadow-sm">
        <div className="inline mb-1 pb-2 pt-3 w-full bg-teal-300 rounded-t-lg">
          <h1 className="inline uppercase px-4 text-md font-bold text-white">
            <CalendarIcon className="inline mr-2 mb-1" />
            Visualization Area
          </h1>
        </div>
        <div className="flex flex-col p-5 items-center">
          <div className="">
            <Calendar
              className="rounded-md border w-min"
              mode="single"
              selected={date}
              onSelect={setDate}
            />
          </div>
          <div className="flex flex-col p-5 w-72">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full ">
                <div className="gap-10 grid grid-cols-2">
                  <div className="">
                    <FormField
                      control={form.control}
                      name="os"
                      render={({ field }) => (
                        <div className="space-y-3">
                          <FormItem>
                            <FormLabel>OS</FormLabel>
                            <FormControl>
                              <Input placeholder="000" {...field} />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        </div>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="item"
                      render={({ field }) => (
                        <div className="space-y-3">
                          <FormItem>
                            <FormLabel>ITEM</FormLabel>
                            <FormControl>
                              <Input placeholder="00" {...field} />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        </div>
                      )}
                    />
                  </div>
                  <div className="">
                    <FormField
                      control={form.control}
                      name="ref"
                      render={({ field }) => (
                        <div className="space-y-3">
                          <FormItem>
                            <FormLabel>REF</FormLabel>
                            <FormControl>
                              <Input placeholder="2D" {...field} />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        </div>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="hours"
                      render={({ field }) => (
                        <div className="space-y-3">
                          <FormItem>
                            <FormLabel>HOURS</FormLabel>
                            <FormControl>
                              <Input type="time" {...field} />
                            </FormControl>
                            <FormDescription></FormDescription>
                            <FormMessage />
                          </FormItem>
                        </div>
                      )}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center w-full mt-5">
                  <Button
                    type="submit"
                    className="bg-teal-400 hover:bg-teal-400 font-semibold w-full"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
