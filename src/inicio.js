import { registro } from "./postData"
import { inicioSesion } from "./getInicio2"
//Register
let boton0 = document.getElementById("btn1")

//Inicio de sesion
let nameLogin = document.getElementById("inp3")
let passwordLogin = document.getElementById("inp4")
let boton1 = document.getElementById("boton")


boton0.addEventListener("click",async ()=>{
    let name = document.getElementById("inp")
    let email = document.getElementById("inp1")
    let password = document.getElementById("inp2")
   await registro(email,password,name)
})
boton1.addEventListener("click",async ()=>{
    let nameLogin = document.getElementById("inp3")
    let passwordLogin = document.getElementById("inp4 ")
   await inicioSesion(nameLogin, passwordLogin)
})
 