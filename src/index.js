// Inserte el código aquí
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const taskCountElement = document.getElementById('task-count');

addTaskButton.addEventListener('click', function (e) {
  e.preventDefault()
});

async function task() {
  try {
    const respuesta = await fetch("")
    let task = await respuesta.json()
    console.log(task);
  } catch (error) {
    console.log(error);
  }
  
}
