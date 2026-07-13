// ============================================================
// script.js — esqueleto de referencia
// La estructura y el diseño ya están listos (Programador 2).
// Aquí cada quien agrega su lógica en la sección que le toca.
// ============================================================

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskDueDate = document.getElementById('task-due-date');
const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');
const completedCountEl = document.getElementById('completed-count');
const totalCountEl = document.getElementById('total-count');

// ------------------------------------------------------------
// PROGRAMADOR 3: lógica para AGREGAR tareas
// - Escuchar el submit de taskForm
// - Leer taskInput.value (y taskDueDate.value, ver nota abajo)
// - Crear un <li class="task-item"> siguiendo la plantilla
//   comentada en index.html y agregarlo a taskList
// - Ocultar/quitar #empty-state cuando haya al menos 1 tarea
// ------------------------------------------------------------


// ------------------------------------------------------------
// PROGRAMADOR 4: lógica para FECHA DE VENCIMIENTO
// - Tomar el valor de taskDueDate al crear la tarea
// - Mostrarlo dentro del <span class="task-due"> de ese task-item
// ------------------------------------------------------------


// ------------------------------------------------------------
// PROGRAMADOR 1: lógica para ELIMINAR / ACTUALIZAR tareas
// - Usar delegación de eventos sobre taskList
// - Click en .task-delete-btn -> eliminar el <li> más cercano
// - Click en .task-edit-btn -> permitir editar el .task-text
// ------------------------------------------------------------


// ------------------------------------------------------------
// PROGRAMADOR 4: contador de tareas completadas
// - Escuchar 'change' en .task-checkbox (delegación sobre taskList)
// - Actualizar completedCountEl y totalCountEl
// ------------------------------------------------------------