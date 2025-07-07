# Gestor de Tareas - Prueba Técnica Nwoork

## Descripción

Aplicación para gestionar tareas, requerimientos crear, completar, filtrar y eliminar tareas
Backend hecho en .Net 6.0 y Frontend con framework React y TypeScript

## Tecnologías usadas

Backend: .Net Core 6.0
Frontend: React con TypeScript
Comunicación API: REST
CORS configurado para desarollo local
Axios para llamadas HTTP
Vite como blunder frontend
Swashbuckle (Swagger) para documentación automática de endpoints

## Requisitos previos
.NET 6 SDK (https://dotnet.microsoft.com/download/dotnet/6.0) instalado en tu equipo
.Node js y npm/yarn instalados

## Configuración y variables de entorno
El proyecto utiliza un archivo .env para configurar la url base de la API en frontend

1.- Copiar el archivo .env.example a .env y modificar si es necesario

2.- Backend corre en `http://localhost:5000`  

3.- Frontend corre en `http://localhost:5173`  


## Instrucciones para ejecutar el proyecto

### Backend
cd backend
dotnet run

### Frontend
npm install
npm run dev

## Endpoints principales API

GET /api/tasks — Obtener todas las tareas

GET /api/tasks/filter?completed=true|false — Filtrar tareas por estado

POST /api/tasks — Crear nueva tarea

PUT /api/tasks/{id}/toggle — Cambiar estado completado

DELETE /api/tasks/{id} — Eliminar tarea
