import React from 'react';
import { CircleCheckIcon, CircleMinusIcon } from 'lucide-react';


export interface TaskProps {
  id: number;
  title: string;
  isComplete: boolean;
}

interface TodoItemProps {
  task: TaskProps;
  onTaskUpdate: () => void;
  onDeleteTask: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onTaskUpdate, onDeleteTask }) => {
  const handleToggleComplete = () => {
    onTaskUpdate(); // Chama a função de atualização do pai
  };

  const handleDeleteTask = () => {
    onDeleteTask(); // Chama a função de deleção do pai
  };

  return (
    <div
      className={`rounded-lg shadow-md p-2 mx-4 flex justify-between items-center font-semibold transition-all duration-500 ${
        task.isComplete ? 'bg-teal-300 text-white' : 'bg-white text-teal-600'
      }`}
    >
      <div className={`flex items-center ${task.isComplete ? '' : ''}`}>
        <span className="ml-3 break-all mr-2">{task.title}</span>
      </div>
      <div className="flex space-x-1">
        <button
          onClick={handleToggleComplete}
          className={`p-1.5 rounded transition-all duration-300 ${
            task.isComplete ? 'hover:bg-zinc-100 text-teal-600' : 'hover:bg-teal-100 text-teal-500'
          }`}
        >
          <CircleCheckIcon size={23} />
        </button>
        <button
          onClick={handleDeleteTask}
          className={`p-1.5 rounded transition-all duration-300 ${
            task.isComplete ? 'hover:bg-zinc-100 text-red-600' : 'hover:bg-red-100 text-red-500'
          }`}
        >
          <CircleMinusIcon size={23} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
