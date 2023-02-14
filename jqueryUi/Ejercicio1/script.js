$(document).ready(function () {
    $("#esconder").click(function () {
        $("#imagen").hide()
    })
    $("#show").click(function () { 
       $("#imagen").show()
    });
    $("#fundido").click(function () { 
        $("#imagen").fadeIn()
    });
    $("#deslizamiento").click(function () { 
        $("#imagen").slideUp()
        
    });
});