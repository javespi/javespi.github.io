$(document).ready(function (){
    $('#link_mail').bind('click', function (e) {
        e.preventDefault();
        if ($('#span_mail').is(':hidden')) {
            $('#span_mail').show();
        } else {
            $('#span_mail').hide();
        }
    });

    $('#span_mail').bind('click', function (e) {
        e.preventDefault();
        var dot = String.fromCharCode(46); var at = String.fromCharCode(64);
        $(location).attr('href', 'mailto:mail' + at + 'javespi'+ dot +'com');
    });
});
