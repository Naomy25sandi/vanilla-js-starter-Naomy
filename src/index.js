// Inserte el código aquí
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const taskCountElement = document.getElementById('task-count');
const addTaskButton2 = document.getElementById('task-count');
import { postT } from "./index2";

taskInput.addEventListener("keydown",(e)=>{
  if (e.key=="Enter") {
    postT()
  }
})



//buton agregar se hace el evento del click 
addTaskButton.addEventListener("click",postT)// 
              // funcion de agregar datos 
async function getTask() {
  taskList.innerHTML = ""  // donde se almacena los datos
  try {
    const response = await fetch("http://localhost:3000/api/task") // se hace la peticion de la promesa.
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
     checkBox.addEventListener("click", ()=>{
      if (checkBox.checked==true) {
        updateTask(element.id)
          taskCountElement.value++
      }else{
        taskCountElement.value--
      }
  })
     
  })
    console.log(task);
  } catch (error) {
    console.log(error);
  }
}
getTask()// funcion de get
 
//delete
//url delete http://localhost:3000/api/task/id
async function deleteTask(id) {
  try {
    const response = await fetch (`http://localhost:3000/api/task/${id}`,{
    method: "DELETE"
  });
  if (response.ok) {
    await getTask();
    alert("Tarea eliminada con exito")
    
  } else {
    alert("Error al eliminar la tarea")
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

export {getTask}