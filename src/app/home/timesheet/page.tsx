"use client"

import { HeatMapDemo } from "@/components/timesheet/heatmap"
import { CalendarCheck, CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { useState, useEffect, ChangeEvent } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BiSolidPaperPlane } from "react-icons/bi"
import { datas } from "@/database/teste/data"

interface Appointment {
  os: string
  item: string
  ref: string
  hours: string
}

const data: Appointment[] = []


export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [appointments, setAppointments] = useState<Appointment[]>(data)
  const [newAppointment, setNewAppointment] = useState<Appointment>({
    os: "",
    item: "",
    ref: "",
    hours: "",
  })

  useEffect(() => {
    setNewAppointment(data[0] || { os: "", item: "", ref: "", hours: "" })
  }, []) // O array vazio [] garante que o useEffect só é executado uma vez, sem dependências

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewAppointment((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAddAppointment = () => {
    setAppointments((prev) => [...prev, newAppointment])
    setNewAppointment({
      os: "",
      item: "",
      ref: "",
      hours: "",
    })
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
            <CalendarCheck className="inline mr-2 mb-1" />
            Appointment Area
          </h1>
        </div>
        <div className="p-5 w-full space-y-5 flex flex-col sm:grid sm:grid-cols-2 sm:gap-10 items-center justify-center">
          <div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border w-min"
            />
          </div>
          {/* Inputs */}
          <div className="space-y-4">
            {/* <h1 className='text-teal-400 font-semibold text-lg uppercase'>POINT</h1> */}
            <div className="flex items-center justify-between w-56">
              <h1 className="text-zinc-500 text-lg font-semibold">OS</h1>
              <div className="flex flex-row gap-2">
                <Input
                  type="number"
                  name="os"
                  value={newAppointment.os}
                  onChange={handleInputChange}
                  className="w-24 h-10 text-md font-semibold text-zinc-500"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-56">
              <h1 className="text-zinc-500 text-lg font-semibold">ITEM</h1>
              <div className="flex flex-row gap-2">
                <Input
                  type="number"
                  name="item"
                  value={newAppointment.item}
                  onChange={handleInputChange}
                  className="w-24 h-10 text-md font-semibold text-zinc-500"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-56">
              <h1 className="text-zinc-500 text-lg font-semibold">REF</h1>
              <div className="flex flex-row gap-2">
                <Input
                  type="text"
                  name="ref"
                  value={newAppointment.ref}
                  onChange={handleInputChange}
                  className="w-24 h-10 text-md font-semibold text-zinc-500"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-56">
              <h1 className="text-zinc-500 text-lg font-semibold">HOURS</h1>
              <div className="flex flex-row gap-2">
                <Input
                  type="time"
                  name="hours"
                  value={newAppointment.hours}
                  onChange={handleInputChange}
                  className="w-24 h-10 text-md font-semibold text-zinc-500"
                />
              </div>
            </div>
            {/* Botão de Envio */}
            <div className="w-56 text-right">
              <Button
                onClick={handleAddAppointment}
                className="bg-teal-400 hover:bg-teal-500 font-bold w-24"
              >
                <p className="mr-2">SEND</p>
                <BiSolidPaperPlane />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
