$(document).ready(function (){
    $('#link_mail').bind('click', function (e) {
        e.preventDefault();
        if ($('#span_mail').is(':hidden')) {
            $('#span_mail').show();
        } else {
            $('#span_mail').hide();
        }
    });
});
