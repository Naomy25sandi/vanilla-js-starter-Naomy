// Inserte el código aquí
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const taskCountElement = document.getElementById('task-count');
const addTaskButton2 = document.getElementById('task-count');



async function postT() {
  try {
  let tarea ={
    id:Date.now(),
    nombre: taskInput.value,
    estado:false
  }
  const response = await fetch ("http://localhost:3000/api/task",{
    method:"POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(tarea)
  })
  let datos = await response.json()
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
    const response = await fetch("http://localhost:3000/api/task")
    let task = await response.json();
    task.forEach(element=>{// para recorrer mis datos
      let div = document.createElement("div")
      let checkBox= document.createElement("input")
      let p = document.createElement('p')
      p.classList.add("parrafo")
      checkBox.type= "checkbox"
      let del = document.createElement('button')
     del.innerHTML= "eliminar"
     del.addEventListener('click',()=>{
      deleteTask(element.id) // llamar la funcion delete
      })
      checkBox.addEventListener("click",()=>{
        updateTask(element.id)
      })
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
 
//delete
//url delete http://localhost:3000/api/task/id
async function deleteTask(id) {
  try {
    const response = await fetch (`http://localhost:3000/api/task/${id}`,{
    method: "DELETE"
  });
  if (response.ok) {
    await getTask();
    console.log("Tarea eliminada con exito")
    
  } else {
    console.log("Error al eliminar la tarea")
  }
  } catch (error) {
    console.log(error);
  }
}




//put 
async function updateTask(id) {// se llama la funcion para el checkbox
  try{
    let task ={
      estado:true
   }
    const response = await fetch (`http://localhost:3000/api/task/${id}`,{
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(task)
  })
  let data = await response.json()
  console.log(data);
  } catch (error){
    console.error(error);
  }
}

