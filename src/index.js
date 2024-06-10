// Inserte el código aquí
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const taskCountElement = document.getElementById('task-count');
const noHay = document.getElementById('noHay');
// importe el metodo post a una hoja de js, delete y put ambos en otro js//
import { postT } from "./index2"; 
import { deleteTask } from "./index3";
import { updateTask } from "./index3";

// la funcion para que agreguen tareas con el enter y que no se agreguen tareas vacias al hacer enter//
taskInput.addEventListener("keydown",(e)=>{
  if (e.key=="Enter" && taskInput.value!="" && taskInput.value.trim()) {
    postT()
  }
})



//buton agregar se hace el evento del click 
addTaskButton.addEventListener("click",function () {
  if (taskInput.value!="" &&  taskInput.value.trim()) { //se agrega la funcion 
    postT()
  }
})// 
              // funcion de agregar datos 
async function getTask() {
  taskList.innerHTML = ""  // donde se almacena los datos
  try {
    const response = await fetch("http://localhost:3000/api/task") // se hace la peticion de la promesa.
    let task = await response.json();
    let taskA = Array.from(task) /* Pasamos la variable task a un arreglo llamado taskA, lo convertimos usando Array.from(task)
                                   Validamos la longitud de este arreglo usando .lenght SI es 0, se le coloca el display block al p que se creo
                                   en el HTML. EN CASO que sea mayor a 0 la longitud, se vuelve a ocultar el p  
                                */
    if(taskA.length==0){
      noHay.style.display="block"
    }else{
      noHay.style.display="none"
    }
      task.forEach(element=>{// para recorrer mis datos
      let div = document.createElement("div") 
      let checkBox= document.createElement("input")
      let p = document.createElement('p')
      p.classList.add("parrafo")
      checkBox.type= "checkbox"
      let del = document.createElement('button')
      del.classList.add("btnE")
      del.innerHTML= "Eliminar"
      del.addEventListener('click',()=>{// se agrega el evento 
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
     checkBox.addEventListener("click", ()=>{ //se le agrego el evento al la casilla del check
      if (checkBox.checked==true) {
        updateTask(element.id)
          taskCountElement.value++
      }else{
        taskCountElement.value--
      }
  })
     
  })
    console.log(task);
  } catch (error) { // para prevenir errores
    console.log(error);
  }
}
getTask()//se llama funcion de get
 


export {getTask} 