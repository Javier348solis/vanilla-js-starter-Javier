//Post
async function registro(email,pass,user){ 
    try {
        const register = await fetch("http://localhost:3000/api/task",{
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(
                {
                    correo:email,
                    contrasena:pass,
                    usuario:user
                }
            )
        })
        let data = await register.json()
         console.log(data);
    } catch (error) {
        console.log(error);
    }
}
export{registro}