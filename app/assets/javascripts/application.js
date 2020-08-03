// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require bootstrap
//= require activestorage
//= require gsap/dist/gsap.js
//= require scrolloverflow.js
//= require fullpage.js
//= require_tree .


var previousScroll = 20;
    // scroll functions
$(window).scroll(function(e) {
    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop();
    if (scroll >= previousScroll) {
        $('.pos-f-t').addClass("navbar-hide");

    }else if (scroll < previousScroll) {
        $('.pos-f-t').removeClass("navbar-hide");
    }
    previousScroll = scroll;

});

window.addEventListener('load', function() {
    console.log('All assets are loaded at')
    $(".loader-wrapper").fadeOut("slow", "swing");
})
