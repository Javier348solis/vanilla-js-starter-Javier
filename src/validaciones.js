
let inputTask = document.getElementById("line")


function validarInput() {
    if(inputTask.value==""){
        alert("No hay tareas, UBIQUESE!!!")
        return false
    }else{
        return true
    }
}
export {validarInput}