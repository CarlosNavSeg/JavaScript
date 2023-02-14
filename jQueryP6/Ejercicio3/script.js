$(document).ready(function () {
    $("#ejecutarPlugin").click(function () { 
        $("#cuadrado").nuevoPlugin()
        
    });

    $.fn.nuevoPlugin = function (options) {
        let cuadradoApps = {
            display: "inline",
            width: "50px"
        }
    
    $.extend(options, cuadradoApps);
        this.css("display", "block")
        this.css("height", "100px")
    }
})