$(document).ready (function () {
    $('#show').bind('click', function() {
        $('#texto').show(2500)
    })
    $('#hide').bind('click', function() {
        $('#texto').hide('slow')
    })
})
