import { getDatos } from "./getData"
let btnAgg = document.getElementById("boton")
let inputTask = document.getElementById("line")

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
        console.error(error);
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
        alert("Succesfully task delete")
    }
    else{
        alert("Nothing")
    }
    } catch (error) {
        console.error(error);
    }
}
export {deleteTask, darDatos}