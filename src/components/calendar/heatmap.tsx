"use client"

// https://uiwjs.github.io/react-heat-map/
// npm install @uiw/react-heat-map --save

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
  const { data: session, status } = useSession()
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState("")

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

  return (
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

        return (
          <Tooltip
            placement="top"
            content={`${hourCount} hours worked on ${formattedDate}`}
          >
            <rect
              {...props}
              onClick={() => {
                setSelectedDate(data.date === selectedDate ? "" : data.date)
              }}
            />
          </Tooltip>
        )
      }}
    />
  )
}
