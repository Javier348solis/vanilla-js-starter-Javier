import { inicioSesion } from "./getInicio2";

let boton1 = document.getElementById("boton")

boton1.addEventListener("click",comparation )
 async function comparation () {
    let nameLogin = document.getElementById("inp3").value
    let passwordLogin = document.getElementById("inp4").value

    let bandera = true
    let datos = await inicioSesion()
 
    datos.forEach(users => {
        if (users.correo === nameLogin && users.contrasena === passwordLogin) {
            bandera = false
           
            localStorage.setItem("cuenta",users)
        ///   window.location.href="page.html"
          alert("Succesfully LOGIN")
          
            
        }
        if (bandera) {
        alert("Error, METASE EN LA VARA")
            bandera = false
            
        }
    });
}


//Validacion PUT
