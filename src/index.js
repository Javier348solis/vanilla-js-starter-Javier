// Inserte el código aquí
let btnAgg = document.getElementById("boton")
let inputTask = document.getElementById("line")
let contenedor = document.getElementById("main-counter")
let datos = document.getElementById("white-space")



//GET
async function getDatos() {
    try {
        const respuesta = await fetch("http://localhost:3000/api/task")
        let datosFetch = await respuesta.json()
        console.log(datosFetch);
        datosFetch.forEach(create1 => {
            let inp = document.createElement("input")
            inp.type = "checkbox"
        inp.classList.add(" ")
        let btn = document.createElement("button")
        btn.classList.add("boton")
        let paragraph = document.createElement("p")
        paragraph.classList.add("Parra")
        btn.innerHTML="Delete"
        paragraph.innerHTML=create1.nombre
        paragraph.appendChild(btn)
        paragraph.appendChild(inp)
        datos.appendChild(paragraph)
    });
    
} catch (error) {
    console.error(error);
}
}
//POST
async function darDatos(){
    try {
        let tarea ={
            id:Date.now(),
            nombre:inputTask.value,
            estad0:false
        }
        const respuesta = await fetch("http://localhost:3000/api/task",{
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(tarea)
        })
        let data = await respuesta.json()
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

btnAgg.addEventListener("click",darDatos)



getDatos()