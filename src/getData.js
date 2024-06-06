//GET
import { uploadCheck } from ".";
import { deleteTask    } from "./postAndDelete";
let datos = document.getElementById("white-space")
let contenedor = document.getElementById("main-counter")

async function getDatos() {
    datos.innerHTML=""
    try {
        const respuesta = await fetch("http://localhost:3000/api/task")
        let datosFetch = await respuesta.json()
        console.log(datosFetch);
        datosFetch.forEach(create1 => {
            let inp = document.createElement("input")
            inp.type = "checkbox"
        let btn = document.createElement("button")
        btn.classList.add("boton")
        let paragraph = document.createElement("p") 
        paragraph.classList.add("Parra")
        btn.innerHTML="Delete"
        btn.addEventListener("click",()=>{
            // LLAMAR A LA FUNCION DELETE
            deleteTask(create1.id)
        })
        paragraph.innerHTML=create1.nombre
        paragraph.appendChild(btn)
        paragraph.appendChild(inp)
        datos.appendChild(paragraph)
        inp.addEventListener("click", ()=>{
            if (inp.checked==true) {
                uploadCheck(create1.id)
                contenedor.value++                
            }else{
                contenedor.value--
            }
        })
    });
    
} catch (error) {
    console.error(error);
}
}
export {getDatos}