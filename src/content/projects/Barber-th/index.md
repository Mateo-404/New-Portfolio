---
title: "Sistema de Gestión de Barbería"
summary: "Aplicación web fullstack para reservas, administración y estadísticas"
date: "Jul 2025"
draft: false
tags:
- Java
- Spring Boot
- PostgreSQL
- HTML5
- CSS3
- JavaScript
- Chart.js
- MVC
repoUrl: https://github.com/Mateo-404/Barberia
demoUrl: https://mateo-404.github.io/Barberia/
---

El proyecto es una aplicación web fullstack desarrollada como trabajo final de mi carrera de Técnico Universitario en Programación (UTN FRRa). Permite a los clientes reservar turnos online y al administrador gestionar reservas, servicios y estadísticas de manera eficiente.

Los clientes pueden seleccionar tipo de servicio, fecha y hora, y registrar sus datos personales. El panel administrativo permite visualizar, modificar y eliminar turnos, así como acceder a reportes de ganancias, servicios más solicitados y clientes frecuentes. Los gráficos de estadísticas están implementados con Chart.js.

El sistema realiza operaciones ABML (altas, bajas, modificaciones y lecturas) sobre turnos, clientes y servicios, implementando buenas prácticas de arquitectura en capas y patrón MVC. El login del administrador es simulado, con planificación de JWT para seguridad futura.

### Funcionalidades principales
- Reserva de turnos en línea con selección de servicios y horarios.
- Registro de clientes y gestión de datos.
- Panel de administración con calendario interactivo, estadísticas y reportes.
- ABML para turnos, clientes y servicios.
- Seguridad y compatibilidad responsiva en todos los dispositivos.

### Demo en Línea
- **Frontend (Cliente):** [https://mateo-404.github.io/Barberia/](https://mateo-404.github.io/Barberia/)  
- **Frontend (Administrador):** [https://mateo-404.github.io/Barberia/admin/login.html](https://mateo-404.github.io/Barberia/admin/login.html)  
  *(Usuario: admin@admin.com | Contraseña: admin)*

### Organización del Proyecto
- **Repositorio en GitHub:** [Barberia](https://github.com/Mateo-404/Barberia)  
- **Tablero de Tareas:** [GitHub Projects](https://github.com/users/Mateo-404/projects/9)
