$(document).ready(function () {
    $('#contentDeployer').click(function () {
        let titulo = ""
        $.get("contenido.xml", function (data) {
                $(data).find('libro').each( function () {
                titulo = $(this).find("titulo").text()
                })
                $('#pageLoader').append(titulo)
            },
        );
});
})