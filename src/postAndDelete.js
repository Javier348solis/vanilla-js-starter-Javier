import { getDatos } from "./getData"
import Swal from 'sweetalert2'
import "../src/index.css"
let btnAgg = document.getElementById("boton")
let inputTask = document.getElementById("line")

const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  })

//POST
async function darDatos(){
    try {
        let tarea ={
            id:Date.now(),
            nombre:inputTask.value,
            estado:false
        }
        const respuesta = await fetch("http://localhost:3000/api/task",{
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(tarea)
        })
        let data = await respuesta.json()
        getDatos()
         console.log(data);
    } catch (error) {
        console.log(error);
    }
}

btnAgg.addEventListener("click", function () {
    if (inputTask.value!="") {
        darDatos()
    }
})

//DELETE

//URL DELETE http://localhost:3000/api/task/id
async function deleteTask(id) {
    try {
        const deleteApp = await fetch( `http://localhost:3000/api/task/${id}`,{ 
        method: "Delete"
    });
    if (deleteApp.ok) {
        await getDatos();
    await Toast.fire({
        icon: 'error',
        title: 'Succesfully task delete',
      })
    }
    else{
    }
    } catch (error) {
        console.error(error);
    }
}
export {deleteTask, darDatos}