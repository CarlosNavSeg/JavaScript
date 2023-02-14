$(document).ready(function () {
    $('form').change(function() {
        if($('#verde').prop('checked')) {
            $('body').css('background-color','green')
        }
        if($('#rojo').prop('checked')) {
            $('body').css('background-color','red')
        }
        if($('#azul').prop('checked')) {
            $('body').css('background-color','blue')
        }
    } 
)})


