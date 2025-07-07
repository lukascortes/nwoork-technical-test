using Microsoft.AspNetCore.Mvc;
using TaskManagerApi.Models;
using TaskManagerApi.Services;

namespace TaskManagerApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : ControllerBase
    {
        private readonly TaskService _taskService;

        public TasksController(TaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<TaskItem>> GetAll() => Ok(_taskService.GetAll());

        [HttpGet("filter")]
        public ActionResult<IEnumerable<TaskItem>> GetByCompletionStatus([FromQuery] bool isCompleted) =>
            Ok(_taskService.GetByCompletionStatus(isCompleted));

        [HttpPost]
        public ActionResult<TaskItem> Create([FromBody] TaskItem task)
        {
            var createdTask = _taskService.Add(task);
            return CreatedAtAction(nameof(GetAll), new { id = createdTask.Id }, createdTask);
        }

        [HttpPut("{id}/toggle")]
        public ActionResult ToggleCompletion(Guid id)
        {
            if (!_taskService.ToggleCompletion(id)) return NotFound();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(Guid id)
        {
            if (!_taskService.Delete(id)) return NotFound();
            return Ok(new { message = "Tarea eliminada exitosamente" });
        }
    }
}
