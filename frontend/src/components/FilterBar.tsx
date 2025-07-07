type Props = {
  onFilterChange: (filter: "all" | "completed" | "pending") => void;
};

export default function FilterBar({ onFilterChange }: Props) {
  return (
    <div className="flex gap-4 mb-4">
      <button onClick={() => onFilterChange("all")} className="btn">
        Todas
      </button>
      <button onClick={() => onFilterChange("completed")} className="btn">
        Completadas
      </button>
      <button onClick={() => onFilterChange("pending")} className="btn">
        Pendientes
      </button>
    </div>
  );
}
