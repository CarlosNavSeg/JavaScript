$(document).ready(function () {
    $("#desaparecerParrafos").click(function() {
        $("p").parrafosOpacos()
    })
    $.fn.parrafosOpacos = function () {
        $(this).css('opacity', '0')
    }    
});