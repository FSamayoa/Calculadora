function agregar(valor) {
    document.getElementById("pantalla").value += valor
    console.log(agregar)
}

function borrar() {
    document.getElementById("pantalla").value = ""
}

function calcula() {
    const calcular = document.getElementById("pantalla").value
    const resultado = eval(calcular)
    document.getElementById("pantalla").value = resultado
}





