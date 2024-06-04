// Inserte el código aquí
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const taskCountElement = document.getElementById('task-count');


async function postT() {
  try {
  let tarea ={
    id:Date.now(),
    nombre: taskInput.value,
    estado:false
  }
  const respuesta = await fetch ("http://localhost:3000/api/task",{
    method:"POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(tarea)
  })
  let datos = await respuesta.json()
  console.log(datos);
  getTask()
} catch (error) {
  console.log(error)
}
}
addTaskButton.addEventListener("click",postT)

async function getTask() {
  taskList.innerHTML = ""
  try {
    const respuesta = await fetch("http://localhost:3000/api/task")
    let task = await respuesta.json();
    task.forEach(element=>{// para recorrer mis datos
      let div = document.createElement("div")
      let checkBox= document.createElement("input")
      let p = document.createElement('p')
      p.classList.add("parrafo")
      checkBox.type= "checkbox"
      let del = document.createElement('button')
     del.innerHTML= "eliminar"
     p.innerHTML = element.nombre
     p.appendChild(del)
     p.appendChild(checkBox)
     div.appendChild(p)
     taskList.appendChild(div)
     
  })
    console.log(task);
  } catch (error) {
    console.log(error);
  }
}
getTask()

//del.addEventListener('click', ()=>{

//}
//)