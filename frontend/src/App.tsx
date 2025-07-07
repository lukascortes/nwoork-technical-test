import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

import {
  getTasks,
  createTask,
  deleteTask,
  toggleTask,
  getFilteredTasks,
} from "./api";

type Task = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  const fetchTasks = async () => {
    try {
      if (filter === "all") {
        const res = await getTasks();
        setTasks(res.data);
      } else {
        const completed = filter === "completed";
        const res = await getFilteredTasks(completed);
        setTasks(res.data);
      }
    } catch (error) {
      console.error("Error al obtener tareas:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  const handleCreate = async (title: string, description: string) => {
    try {
      await createTask({ title, description });
      fetchTasks();
    } catch (error) {
      console.error("Error al crear tarea:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (error) {
      console.error("Error al eliminar tarea:", error);
    }
  };

  const handleToggle = async (id: string) => {
    try {
      await toggleTask(id);
      await fetchTasks();
      const res = await getTasks();
      console.log(res.data);  // para verificar estado en consola
      setTasks(res.data);
    } catch (error) {
      console.error("Error al cambiar estado:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-4 text-center">Gestor de Tareas</h1>
        <TaskForm onCreate={handleCreate} />
        <FilterBar onFilterChange={(value) => setFilter(value)} />
        <TaskList tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} />
      </div>
    </div>
  );
}
