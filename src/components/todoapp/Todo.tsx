import { createContext, Dispatch, SetStateAction, useState } from "react";
import TodoList from "./TodoList";

export interface TaskProps {
  id: number;
  title: string;
  isComplete: boolean;
}

type ContextType = {
  tasks: TaskProps[];
  setTasks: Dispatch<SetStateAction<TaskProps[]>>;
};

export const Context = createContext<ContextType>({ tasks: [], setTasks: () => {} });

export default function Todo() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  return (
    <Context.Provider value={{ tasks, setTasks }}>
      <TodoList />
    </Context.Provider>
  );
}
