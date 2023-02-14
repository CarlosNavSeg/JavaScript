$(document).ready(function () {
    $("#efecto").click(function() {
        $("#cuadrado").animate({
            left: '+=300px'
        }, 1500)
        $("#cuadrado").animate({
            top: '+=300px'
        }, 1500)
        $("#cuadrado").animate({
            left: '-=300px'
        }, 1500)
        $("#cuadrado").animate({
            top: '-=300px'
        }, 1500)

    })
    $("#pararEfecto").click(function() {
        $("#cuadrado").stop(true)
        $("#cuadrado").css("top", "0")
        $("#cuadrado").css("left", "0")
    })
});