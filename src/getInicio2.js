//GET

async function inicioSesion() {
    try {
        const respuesta = await fetch("http://localhost:3000/api/task")
        let usersFetch = await respuesta.json()
       return usersFetch
    } catch (error) {
        console.error(error)
    }
}
export {inicioSesion}