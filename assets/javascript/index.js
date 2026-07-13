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

let taskIdCounter = 0;

// ------------------------------------------------------------
// PROGRAMADOR 3: lógica para AGREGAR tareas
// - Escuchar el submit de taskForm
// - Leer taskInput.value (y taskDueDate.value)
// - Crear un <li class="task-item"> siguiendo la plantilla
//   comentada en index.html y agregarlo a taskList
// - Ocultar #empty-state cuando haya al menos 1 tarea
// ------------------------------------------------------------

function formatDueDate(dateStr) {
  // dateStr viene en formato YYYY-MM-DD (input type="date")
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-');
  return `Vence: ${day}/${month}`;
}

function createTaskElement(text, dueDate) {
  taskIdCounter += 1;

  const li = document.createElement('li');
  li.className = 'task-item';
  li.dataset.id = String(taskIdCounter);

  li.innerHTML = `
    <label class="task-item__check">
      <input type="checkbox" class="task-checkbox">
      <span class="task-checkbox__mark" aria-hidden="true"></span>
    </label>

    <div class="task-item__body">
      <span class="task-text"></span>
      <span class="task-due"></span>
    </div>

    <div class="task-item__actions">
      <button class="task-edit-btn" aria-label="Editar tarea">✎</button>
      <button class="task-delete-btn" aria-label="Eliminar tarea">🗑</button>
    </div>
  `;

  // Se asigna el texto con textContent (no con innerHTML) para evitar
  // inyección de HTML si el usuario escribe algo como <script>...</script>
  li.querySelector('.task-text').textContent = text;
  li.querySelector('.task-due').textContent = formatDueDate(dueDate);

  return li;
}

function updateEmptyState() {
  const hasTasks = taskList.querySelectorAll('.task-item').length > 0;
  emptyState.style.display = hasTasks ? 'none' : '';
}

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = taskInput.value.trim();
  if (!text) return; // no agregar tareas vacías

  const newTask = createTaskElement(text, taskDueDate.value);
  taskList.appendChild(newTask);

  updateEmptyState();

  // Limpiar el formulario para la siguiente tarea
  taskForm.reset();
  taskInput.focus();
});

// Ocultar/mostrar el estado vacío al cargar la página
updateEmptyState();

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