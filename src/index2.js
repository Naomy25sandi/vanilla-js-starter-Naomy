const taskInput = document.getElementById('task-input');// volvi a llamar a donde escribo las tareas
import { getTask } from "."; // importo mi variable 

async function postT() { // funcion post
    try {
    let tarea ={
      id:Date.now(),
      nombre: taskInput.value, //input donde se agrega la tarea//
      estado:false
    }
    const response = await fetch ("http://localhost:3001/api/task",{
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

  export {postT}