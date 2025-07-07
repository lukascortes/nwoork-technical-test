using Microsoft.OpenApi.Models;

using Swashbuckle.AspNetCore.SwaggerUI;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173") // 
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});
// Registro de servicios y configuración de dependencias
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Task Manager API",
        Version = "v1",
        Description = "API gestión de tareas prueba técnica Nwoork .",
    
    });
});
builder.Services.AddSingleton<TaskManagerApi.Services.TaskService>();

var app = builder.Build();

// Configuración del pipeline de la aplicación HTTP
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowFrontend");
app.UseAuthorization();

app.MapControllers();

app.Run();
