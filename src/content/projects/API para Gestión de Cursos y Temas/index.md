---
title: "API para Gestión de Cursos y Temas"
summary: "Lorem ipsum dolor sit amet"
date: "Mar 15 2022"
draft: false
tags:
- Java
- Spring
- Hibernet
- MySQL
repoUrl: https://github.com/Mateo-404/SpringBoot_Ejercicio_1
---

## Implementación de una plataforma para la gestión de cursos y temas

Este backend permite a los usuarios llevar un control efectivo de los temas que han aprendido a lo largo de sus cursos. Para lograr esto, primero se crea una base de datos llamada `cursos`. Luego, se deberá iniciar el desarrollo de una aplicación web que permitirá a los usuarios realizar las siguientes acciones:

1. Crear un nuevo curso
2. Crear temas y asociarlos a un curso
3. Consultar todos los cursos disponibles
4. Consultar todos los temas de un curso específico
5. Buscar cursos que contengan la palabra "Java", que puede estar presente junto con otras palabras.
6. Modificar los datos de un curso existente
7. Modificar los datos de un tema específico

Para llevar a cabo estas acciones, se utilizan métodos HTTP correspondientes según la acción deseada. Además, se considera el uso de objetos DTO para las respuestas y se aplican las mejores prácticas en el desarrollo de software. La implementación de la lógica de negocio se realiza utilizando JPA (Java Persistence API) junto con Hibernate, lo cual permite la realización de operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en una base de datos MySQL.