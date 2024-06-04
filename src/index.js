// Inserte el código aquí
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const taskCountElement = document.getElementById('task-count');

addTaskButton.addEventListener('click', function () {
  postT()
});

async function postT() {
try {
  let tarea ={
    id:Date.now(),
    nombre: input.value
  }
  const respuesta = await fetch ("http://localhost:3000/api/task",{
    method:"POST",
    headers:{
      "Content-type":"application/json:charset=UTF-8"
    },
    body: JSON.stringify(tarea)
  })
 
  
} catch (error) {
  console.log(error)
}

}

async function getTask() {
  try {
    const respuesta = await fetch("http://localhost:3000/api/task")
    let task = await respuesta.json()
    task.forEach(element=>{
      let div = document.createElement("div")
      let checkBox= document.createElement("input")
      checkBox.type= "checkbox"
   

    })
    console.log(task);
  } catch (error) {
    console.log(error);
  }
  
}
