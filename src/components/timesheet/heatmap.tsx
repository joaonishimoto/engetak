"use client"
import React, { useEffect, useState } from "react"
import Tooltip from "@uiw/react-tooltip"
import HeatMap from "@uiw/react-heat-map"
import { formatWorkedHours } from "@/functions/formatWorkedHours"
import { useSession } from "next-auth/react"

interface WorkItem {
  os: string
  item: string
  ref: string
  hours: string
}

interface DayData {
  day: string
  user: string
  work: WorkItem[]
}

interface HeatMapProps {
  data: DayData[]
}

export function HeatMapDemo({ data }: HeatMapProps) {
  const { data: session } = useSession()
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState("") // Change the format here

  useEffect(() => {
    const today = new Date()
    const twoMonthsAgo = new Date(
      today.getFullYear(),
      today.getMonth() - 3,
      today.getDate()
    )
    setStartDate(twoMonthsAgo)
  }, [])
  // Function to parse hours and convert them to a number
  const parseHours = (hoursString: string) => {
    const [hours, minutes] = hoursString.split(":")
    return parseInt(hours) + parseInt(minutes) / 60
  }

  // Calculate the count as the sum of hours for each day
  const transformedData = data
    .filter(({ user }) => user === session?.user?.email)
    .map(({ day, user, work }) => ({
      date: day,
      count: work.reduce((acc, { hours }) => acc + parseHours(hours), 0),
    }))

  const filteredWorks = data
    .filter(({ day }) => day === selectedDate)
    .filter(({ user }) => user === "joao.oliveira@engetak.com")
    .flatMap(({ work }) => work)


  const handleDateChange = (date: string) => {
    setSelectedDate(date)
    console.log(date)
  }

  return (
    <div>
      <HeatMap
        className=""
        legendCellSize={10}
        value={transformedData}
        width={250}
        startDate={startDate}
        endDate={endDate}
        rectProps={{
          rx: 2,
        }}
        weekLabels={["", "Mon", "", "Wed", "", "Fri"]}
        monthLabels={[
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ]}
        panelColors={{
          0: "#f0fdfa", // 0
          8: "#e7e5e4", // ta fodido
          9: "#99f6e4", // fez o mínimo
          11: "#14b8a6", // até 2 horas extras
          12: "red", // já ta metendo o loko
        }}
        rectRender={(props, data) => {
          const hourCount = data.count || 0
          const formattedDate = formatWorkedHours(data.date)

          function formatDate(dateString: string) {
            const [year, month, day] = dateString.split("/")
            const formattedMonth = month.padStart(2, "0")
            const formattedDay = day.padStart(2, "0")
            return `${year}/${formattedMonth}/${formattedDay}`
          }

          return (
            <Tooltip
              placement="top"
              content={`${hourCount} hours worked on ${formattedDate}`}
            >
              <rect
                {...props}
                onClick={() => handleDateChange(formatDate(data.date))}
              />
            </Tooltip>
          )
        }}
      />
      <div className="grid grid-cols-5 px-3">
        <h1 className="text-md text-zinc-500 font-semibold text-center">
          Date
        </h1>
        <h1 className="text-md text-zinc-500 font-semibold text-center">OS</h1>
        <h1 className="text-md text-zinc-500 font-semibold text-center">
          Item
        </h1>
        <h1 className="text-md text-zinc-500 font-semibold text-center">Ref</h1>
        <h1 className="text-md text-zinc-500 font-semibold text-center">
          Hours
        </h1>
      </div>
      {filteredWorks.map((workItem, index) => (
        <div className="grid grid-cols-5 px-3" key={index}>
          <h1 className="text-md text-zinc-500 font-semibold text-center">
            {selectedDate}
          </h1>
          <h1 className="text-md text-zinc-500 font-semibold text-center">
            {workItem.os}
          </h1>
          <h1 className="text-md text-zinc-500 font-semibold text-center">
            {workItem.item}
          </h1>
          <h1 className="text-md text-zinc-500 font-semibold text-center">
            {workItem.ref}
          </h1>
          <h1 className="text-md text-zinc-500 font-semibold text-center">
            {workItem.hours}
          </h1>
        </div>
      ))}
    </div>
  )
}
