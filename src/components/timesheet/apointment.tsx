'use client'

import HeatMap from "@uiw/react-heat-map";
import Tooltip from "@uiw/react-tooltip";
import { useEffect, useState } from 'react';
import { ComboboxOS } from "@/components/timesheet/comboboxOS";
import { ComboboxOSItem } from "@/components/timesheet/comboboxOSItem";
import { ComboboxContextProvider } from "@/components/timesheet/comboboxContext";
import { formatWorkedHours } from "@/functions/formatWorkedHours";

const value = [
  { date: "2024/04/02", count: 9 },
  { date: "2024/04/01", count: 1 },
  { date: "2024/03/31", count: 8 },
  { date: "2024/03/30", count: 8 },
  { date: "2024/03/29", count: 8 },
  { date: "2024/03/28", count: 5 },
  { date: "2024/03/27", count: 10 },
  { date: "2024/03/26", count: 8 },
  { date: "2024/03/25", count: 8 },
  { date: "2024/03/24", count: 8 },
  { date: "2024/03/23", count: 8 },
  { date: "2024/03/22", count: 15 },
  { date: "2024/03/21", count: 8 },
  { date: "2024/03/20", count: 8 },
  { date: "2024/03/19", count: 8 },
  { date: "2024/03/18", count: 8 },
  { date: "2024/03/17", count: 10 },
  { date: "2024/03/16", count: 8 },
  { date: "2024/03/15", count: 9 },
  { date: "2024/03/14", count: 10 },
  { date: "2024/03/13", count: 9 },
  { date: "2024/03/12", count: 8 },
  { date: "2024/03/11", count: 8 },
  { date: "2024/03/10", count: 9 },
  { date: "2024/03/09", count: 12 },
];

const database = [
  {
    date: "2024/04/02",
    workedOn: [
      {
        os: {
          a: 270,
          desc: "COMAU_REAR_RAILS",
          client: "COMAU",
          hours: 5,
          subtasks: [
            {
              item: 1,
              desc: "PORTA_ANTERIOR",
              status: "DETALHAMENTO"
            }
          ],          
        }
      },
      {
        os: {
          a: 271,
          desc: "COMAU_REAR",
          client: "COMAU",
          hours: 3,
          subtasks: [
            {
              item: 1,
              desc: "PORTA_POSTERIOR",
              status: "3D"
            }
          ],          
        }
      }
    ],
    
  }
]

export const Apointment: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState('')

  useEffect(() => {
    const today = new Date();
    const twoMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 3, today.getDate());
    setStartDate(twoMonthsAgo);
  }, []);

  return (
    <ComboboxContextProvider>
      <div className="h-screen flex flex-col items-center justify-center bg-white">
        <div>
          <ComboboxOS />
          <ComboboxOSItem />
        </div>
        <div className="rounded  border border-teal-200"> {/* shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] */}
          <HeatMap className="pt-4 pl-4 mr-2"
            legendCellSize={8}
            value={value}
            width={250}
            startDate={startDate}
            endDate={endDate}
            rectProps={{
              rx: 2
            }}
            weekLabels = {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
            monthLabels ={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
            panelColors = {{
              0: '#f0fdfa',       // 0
              8: '#e7e5e4',       // ta fodido
              9: '#99f6e4',       // fez o mínimo
              11: '#14b8a6',      // até 2 horas extras
              12: 'red',      // já ta metendo o loko
            }}
            
            rectRender={(props, data) => {

              const hourCount = data.count || 0

              const formattedDate = formatWorkedHours(data.date)

              return (
                <Tooltip placement="top" content={`${hourCount} hours worked on ${formattedDate}`}>
                  <rect {...props} onClick={() => {setSelectedDate(data.date === selectedDate ? '' : data.date)}}/>
                </Tooltip>
              );
          }}/>
          
        </div>
        {selectedDate}
      </div>
    </ComboboxContextProvider>
  );
}
