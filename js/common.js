$(document).ready(function(){
 $('#link_mail').bind('click', function (e) {
  e.preventDefault(); var s = $('#span_mail');
  if (s.css('visibility') == 'visible') s.css('visibility', 'hidden'); else s.css('visibility', 'visible');
 });
});
