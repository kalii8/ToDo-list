$(document).ready(function() {
  $('li').click(function(){
    $(this).toggleClass('uncheck');
   $(this).find(('>:first-child')).toggleClass('logo-uncheck');
  })
});
