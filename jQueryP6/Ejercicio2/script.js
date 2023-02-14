$(document).ready(function () {
    $("#ejecutarPlugin").click(function () { 
        $("#cuadrado").nuevoPlugin()
        
    });
    $.fn.nuevoPlugin = function () {
        $(this).css('display', 'inline')
        $(this).animate({
            'left': '+=200px'
        }, 1500)
        $(this).animate({
            'width': '-=50px'
        }, 500)
        $(this).animate({
            'height': '-=50px'
        }, 500)
        $(this).animate({
            'left': '-=200px'
        }, 500)
        $(this).animate({
            'width': '+=50px'
        })
        $(this).animate({
            'height': '+=50px'
        }, 500)
        $(this).hide(1500)
    };
})