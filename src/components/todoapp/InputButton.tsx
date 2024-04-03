'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

export interface TaskProps {
  id: number;
  title: string;
  isComplete: boolean;
}

interface InputWithButtonProps {
  onAddTask: (task: TaskProps) => void;
}

export function InputWithButton({ onAddTask }: InputWithButtonProps) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const handleAddTask = () => {
    const newTask = {
      id: Math.random(),
      title: inputValue,
      isComplete: false
    };

    if (inputValue !== "") {
      onAddTask(newTask);
      setError(false);
      setInputValue('')
    } else {
      setError(true);
    }
    
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2 mx-4">
      <Input
        type="text"
        placeholder={`${!error ? "new task.." : "type something here.."}`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="text-teal-600 font-semibold text-md"
      />
      <Button
        onClick={handleAddTask}
        className={`transition-colors duration-200 ${error ? "bg-red-500 hover:bg-red-600" : "bg-teal-400 hover:bg-teal-500"}`}>
        <Plus size={20}/>
      </Button>
    </div>
  )
}
