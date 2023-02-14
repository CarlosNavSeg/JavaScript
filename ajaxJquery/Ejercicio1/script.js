$(document).ready(function () {
    $('#contentDeployer').click(function () {
    $.get("text.txt", function (data) {
            $("body").append( data )
        },
    );
})})