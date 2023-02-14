window.onload = function () {
    document.getElementById('formularioEjemplo').onchange = triggerOpcion
}
function triggerOpcion() {
    for (let index = 0; index <= document.getElementsByName('color').length; index++) {
        var opcion = document.getElementsByName('color')[index]
        if(opcion.checked) {
            document.getElementById('parrafoColor').style.backgroundColor = opcion.value
        }        
    }
}
