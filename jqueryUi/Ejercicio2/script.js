$(document).ready(function () {
    $("#saludo").click(function (e) { 
        e.preventDefault();
        $("#mensajeBienvenida").addClass('active')
    });
    $("#despedida").click(function () {
        $("#mensajeBienvenida").removeClass('active')
    })
});