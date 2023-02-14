$(document).ready(function () {
    $("h1").each(function() {
        $(this).click(function() {
            $(this).animate({
                color: "blue"
            })
        })
    })
});