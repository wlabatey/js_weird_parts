$(document).ready(function() {

  $('.collapse')
    .on('show.bs.collapse', function() {
      $(this)
      .parent().parent().prev()
      .find('span.glyphicon')
      .removeClass("glyphicon-triangle-bottom")
      .addClass("glyphicon-triangle-right");
      })
    .on('hidden.bs.collapse', function () {
      $(this)
      .parent().parent().prev()
      .find('span.glyphicon')
      .removeClass("glyphicon-triangle-right")
      .addClass("glyphicon-triangle-bottom");
      });
    });
