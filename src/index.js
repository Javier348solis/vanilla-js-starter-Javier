// Inserte el código aquí
let inputTask = document.getElementById("line")
import { darDatos } from "./postAndDelete"


inputTask.addEventListener("keydown",(e)=>{
    if (e.key=="Enter" && inputTask.value != "") {
        darDatos()
    }
})



//PUT
async function uploadCheck(id) {
    try {
        let task = {
            estado:true
        }
    const answer = await fetch(`http://localhost:3000/api/task/${id}`,{
        method:"PUT",
        headers:{
            "Content-type": "application/json"
        },
        body:JSON.stringify(task)
    })
    let data = await answer.json()
    console.log(data)
    } catch (error) {
        console.log(error);
    }
}

// Llamar a la función updateCounter al cargar los datos por primera vez

// Agregar un event listener para cada vez que se cambie el estado del checkbox


export {uploadCheck}