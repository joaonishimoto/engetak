export interface TaskProps {
  id: number;
  title: string;
  isComplete: boolean;
}

export function addTask(task: TaskProps) {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]') as TaskProps[];

  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function markTaskComplete(id: number) {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]') as TaskProps[];
  const updatedTasks = tasks.map(task => {
    if (task.id === id) {
      return { ...task, isComplete: !task.isComplete };
    }
    return task;
  });

  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

export function removeTask(id: number) {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]') as TaskProps[];
  const updatedTasks = tasks.filter(task => task.id !== id);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}