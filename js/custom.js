// Your custom js code goes here.
$(document).ready(function() {
  $("#ekadashi-link").on('click', function() {
    $("#probootstrap-content .page:not('.hide')").stop().fadeOut('fast', function() {
      $(this).addClass('hide');
      if($('ul.probootstrap-side-menu>li').hasClass('active')){
        $('ul.probootstrap-side-menu>li').removeClass('active')
      }
      // $("#sathram-link").removeClass('active');
      // $("#sapthaham-link").removeClass('active');
      $("#ekadashi-link").addClass('active');
      $('#ekadashi').fadeIn('slow').removeClass('hide');
    });
  });
  $("#sathram-link").on('click', function() {
    $("#probootstrap-content .page:not('.hide')").stop().fadeOut('fast', function() {
      $(this).addClass('hide');
      if($('ul.probootstrap-side-menu>li').hasClass('active')){
        $('ul.probootstrap-side-menu>li').removeClass('active')
      }
      // $("#ekadashi-link").removeClass('active');
      // $("#sapthaham-link").removeClass('active');
      $("#sathram-link").addClass('active');
      $('#sathram').fadeIn('slow').removeClass('hide');
    });
  });
  $("#sapthaham-link").on('click', function() {
    $("#probootstrap-content .page:not('.hide')").stop().fadeOut('fast', function() {
      $(this).addClass('hide');
      if($('ul.probootstrap-side-menu>li').hasClass('active')){
        $('ul.probootstrap-side-menu>li').removeClass('active')
      }
      $("#sapthaham-link").addClass('active');
      $('#sapthaham').fadeIn('slow').removeClass('hide');
    });
  });
});
