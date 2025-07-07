type Task = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};

type Props = {
  task: Task;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

export default function TaskItem({ task, onDelete, onToggle }: Props) {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h3 className={`text-lg font-semibold ${task.isCompleted ? "line-through text-gray-400" : ""}`}>
          {task.title}
        </h3>
        <p className="text-sm text-gray-600">{task.description}</p>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => onToggle(task.id)}
          className="text-sm px-2 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-600"
        >
          {task.isCompleted ? "Reabrir" : "Completar"}
        </button>
        <button
          onClick={() => {
            if (confirm("¿Eliminar esta tarea?")) onDelete(task.id);
          }}
          className="text-sm px-2 py-1 rounded bg-red-600 text-white hover:bg-red-700"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
