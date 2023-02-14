$(document).ready(function () {
    $('#form').submit(function (data) {
        data.preventDefault()
        $.post("contenido.php", { nombre: $('#nombre').val(), email:$('#email').val(), password:$('#password').val()},
            function (data) {
                $("body").append(data)
            },
        )
});
})