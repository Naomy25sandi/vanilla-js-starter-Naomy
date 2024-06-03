// Inserte el código aquí
const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const taskCountElement = document.getElementById('task-count');

    let taskCount = [];

    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') {
        alert('Debes ingresar una tarea');
        return;
      }

      const taskElement = document.createElement('div');
      taskElement.classList.add('task');

      const taskLabel = document.createElement('span');
      taskLabel.textContent = taskText;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Eliminar';
      deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskElement);
        taskCount--;
        updateTaskCount();
      });

      taskElement.appendChild(taskLabel);
      taskElement.appendChild(deleteButton);
      taskList.appendChild(taskElement);

      taskInput.value = '';
      taskCount++;
      updateTaskCount();
    }

    function updateTaskCount() {
      taskCountElement.textContent = `${taskCount} tareas`;
    }

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
