// post

async function postData(nuevoUsuario) {
  try {
  
    let response = await fetch ('http://localhost:3001/api/task',{
      method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(nuevoUsuario)
    })
  
  } catch (error) {
    console.log(error)
  }
  
}

//get
async function getUsuarios() {
  try {
    let response = await fetch('http://localhost:3001/api/task',{
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let datos = await response.json()
    return datos;
  } catch (e) {
    console.log (e)
  }
}

// put
async function actualizaDatos(idUsuario) {
  try{
    let actualizar={
      estado:true
   }
    const response = await fetch (`http://localhost:3001/api/task/${idUsuario}`,{
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(task)
  })
  let datos = await response.json()
  console.log(data);
  } catch (error){
    console.error(error);
  }
}


export{getUsuarios,postData}
