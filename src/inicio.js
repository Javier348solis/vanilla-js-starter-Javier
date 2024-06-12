import { registro } from "./postData"
let boton0 = document.getElementById("btn1")

//Inicio de sesion


boton0.addEventListener("click",async ()=>{
    let name = document.getElementById("inp").value
    let email = document.getElementById("inp1").value
    let password = document.getElementById("inp2").value
    await registro(email,password,name)
    window.location.href="inicio2.html"
})
 