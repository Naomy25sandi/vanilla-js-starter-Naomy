
import { getTask } from ".";


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
 export{updateTask}
  export{deleteTask}

