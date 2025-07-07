import TaskItem from "./TaskItem";

type Task = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};

type Props = {
  tasks: Task[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

export default function TaskList({ tasks, onDelete, onToggle }: Props) {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
}
