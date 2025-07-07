using TaskManagerApi.Models;

namespace TaskManagerApi.Services
{
    public class TaskService
    {
        private readonly List<TaskItem> _tasks = new();

        public IEnumerable<TaskItem> GetAll() => _tasks;

        public IEnumerable<TaskItem> GetByCompletionStatus(bool isCompleted) =>
            _tasks.Where(t => t.IsCompleted == isCompleted);

        public TaskItem Add(TaskItem task)
        {
            _tasks.Add(task);
            return task;
        }

        public TaskItem? GetById(Guid id) => _tasks.FirstOrDefault(t => t.Id == id);

        public bool ToggleCompletion(Guid id)
        {
            var task = GetById(id);
            if (task == null) return false;
            task.IsCompleted = !task.IsCompleted;
            return true;
        }

        public bool Delete(Guid id)
        {
            var task = GetById(id);
            if (task == null) return false;
            return _tasks.Remove(task);
        }
    }
}
