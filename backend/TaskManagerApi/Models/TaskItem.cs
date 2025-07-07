using System.ComponentModel.DataAnnotations;

namespace TaskManagerApi.Models
{
    public class TaskItem
    {
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required(ErrorMessage = "El titulo es obligatorio.")]
        [MaxLength(100, ErrorMessage = "El titulo no puede exceder los 100 caracteres.")]
        public string Title { get; set; } = string.Empty;

        [MaxLength(500, ErrorMessage = "La descripción no puede exceder los 500 caracteres.")]
        public string Description { get; set; } = string.Empty;
        public bool IsCompleted { get; set; } = false;
    }
}