$(document).ready(function () {
    $('#sumar').on('click', function () {
        $('#sumar').prop('checked') ? crearElementoYSuma() : borrarElemento()
    }) 

    function crearElementoYSuma () {
        let resultado = 0
        Array.from($('input[name=sumando]')).forEach( sumando => {
            resultado += parseInt(sumando.value)
        })
        let resultField = $('<p id="result"></p>').text(resultado)
        $('body').append(resultField)
    }

    function borrarElemento() {
        $('#result').remove()
    }
})

