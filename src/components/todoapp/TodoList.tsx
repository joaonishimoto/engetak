'use client'

import React, { useEffect, useState } from 'react';

import { Badge } from "@/components/ui/badge"
import TodoItem from './TodoItem';
import { InputWithButton } from './InputButton';
import { addTask, markTaskComplete, removeTask } from './actions';

export interface TaskProps {
  id: number;
  title: string;
  isComplete: boolean;
}

export interface TodoItemProps {
  task: TaskProps;
  onTaskUpdate: (updatedTask: TaskProps) => void;
  onDeleteTask: (taskId: number) => void;
}

export default function TodoList() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [completedCount, setCompletedCount] = useState<number>(0);
  const [showCompleted, setShowCompleted] = useState<boolean>(false); // Estado para controlar a exibição das tarefas concluídas

  useEffect(() => {
    // Mudar estado quando iniciar
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]') as TaskProps[];
    setTasks(storedTasks);

    // Contar tarefas completas inicialmente
    const count = storedTasks.reduce((acc, task) => (task.isComplete ? acc + 1 : acc), 0);
    setCompletedCount(count);
  }, []);

  const handleAddTask = (task: TaskProps) => {
    // Adicionar ao LocalStorage
    addTask(task);

    // Atualizar o estado
    setTasks(prevTasks => [...prevTasks, task]);
  };

  const handleDeleteTask = (taskId: number) => {
    // Remover do LocalStorage
    removeTask(taskId);
 
    // Atualizar o estado excluindo a tarefa removida
    const prevTasks = tasks.filter(task => task.id !== taskId);
    setTasks(prevTasks);

    // Atualizar contagem de tarefas completas após exclusão
    const count = prevTasks.reduce((acc, task) => (task.isComplete ? acc + 1 : acc), 0);
    setCompletedCount(count);
  };

  const handleTaskUpdate = (taskId: number) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        markTaskComplete(taskId);
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });

    setTasks(updatedTasks);

    // Atualizar contagem de tarefas completas
    const count = updatedTasks.reduce((acc, task) => (task.isComplete ? acc + 1 : acc), 0);
    setCompletedCount(count);
  };

  // Filtrar tarefas com base no estado de showCompleted
  const filteredTasks = showCompleted ? tasks.filter(task => task.isComplete) : tasks.filter(task => !task.isComplete);

  return (
    <div className="min-h-screen w-full bg-teal-100">
      <div className="fixed w-[calc(100%-4rem)] h-20 flex items-center justify-center py-5 bg-white shadow-sm">
        <InputWithButton onAddTask={handleAddTask} />
      </div>
      <div className="pt-20"/>
      {
        tasks.length != 0
        ?
          <div className="mx-auto sm:w-[640px] flex justify-between items-center py-3 font-medium text-sm/3">
            <button className='text-teal-800 font-medium ml-4' onClick={() => setShowCompleted(!showCompleted)}>
              <span className='mr-2'>filter:</span>
              <Badge className={!showCompleted ? 'bg-red-500 hover:bg-red-600' : 'bg-teal-400 hover:bg-teal-500'}>
                {!showCompleted ? 'not completed' : 'completed'}
              </Badge>
            </button>
            <div className='text-teal-800 mr-4'>
              {showCompleted
                ? `${completedCount}/${tasks.length}`
                : `${tasks.length - completedCount}/${tasks.length}`
              }
            </div> 
          </div>
        :
        null
      }
      <div className="">
        <ul className="mx-auto sm:w-[640px] space-y-3 pb-3">
          {filteredTasks.map(task => (
            <TodoItem
              key={task.id}
              task={task}
              onTaskUpdate={() => handleTaskUpdate(task.id)}
              onDeleteTask={() => handleDeleteTask(task.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
