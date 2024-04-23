'use client'

import { Task } from "@prisma/client";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { LightbulbIcon } from "lucide-react";
import { FaLightbulb } from "react-icons/fa";

export function TasksBoard() {

  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const fetchDatabase = async () => {
      try {
        const response: AxiosResponse<Task[]> = await axios.get('/api/tasks')
        setTasks(response.data);

      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchDatabase();
  }, [])

  return (
    <div className="">
      {tasks.length === 0 ? (
        <p className="flex items-center justify-center p-5 text-teal-500 font-medium">
          No Tasks.
        </p>
      ) : (
        <ul>
          {tasks
            .sort((a, b) => a.points - b.points)
            .map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-3"
              >
                <span className="text-lg font-medium text-zinc-400">
                  {item.name}
                </span>
                <Badge
                  variant={"outline"}
                  className="text-teal-400 text-base font-bold py-1 border-none"
                >
                  {item.points}{" "}
                  <FaLightbulb
                    size={20}
                    className="ml-1 text-teal-400 text-md"
                  />
                </Badge>
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}
