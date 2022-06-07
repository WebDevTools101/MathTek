$(function(){
  'use strict'

  // This template is mobile first so active menu in navbar
  // has submenu displayed by default but not in desktop
  // so the code below will hide the active menu if it's in desktop
  if(window.matchMedia('(min-width: 992px)').matches) {
    $('.navbar .active').removeClass('show');
    $('.header-menu .active').removeClass('show');
  }

  // Shows header dropdown while hiding others
  $('.header .dropdown > a').on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('show');
    $(this).parent().siblings().removeClass('show');
  });

  // Showing submenu in navbar while hiding previous open submenu
  $('.navbar .with-sub').on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('show');
    $(this).parent().siblings().removeClass('show');
  });

  // this will hide dropdown menu from open in mobile
  $('.dropdown-menu .header-arrow').on('click', function(e){
    e.preventDefault();
    $(this).closest('.dropdown').removeClass('show');
  });

  // this will show navbar in left for mobile only
  $('#NavShow, #NavbarShow').on('click', function(e){
    e.preventDefault();
    $('body').addClass('navbar-show');
  });

  // this will hide currently open content of page
  // only works for mobile
  $('#ContentLeftShow').on('click touch', function(e){
    e.preventDefault();
    $('body').addClass('content-left-show');
  });

  // This will hide left content from showing up in mobile only
  $('#ContentLeftHide').on('click touch', function(e){
    e.preventDefault();
    $('body').removeClass('content-left-show');
  });

  // this will hide content body from showing up in mobile only
  $('#ContentBodyHide').on('click touch', function(e){
    e.preventDefault();
    $('body').removeClass('content-body-show');
  })

  // navbar backdrop for mobile only
  $('body').append('<div class="navbar-backdrop"></div>');
  $('.navbar-backdrop').on('click touchstart', function(){
    $('body').removeClass('navbar-show');
  });

  // Close dropdown menu of header menu
  $(document).on('click touchstart', function(e){
    e.stopPropagation();

    // closing of dropdown menu in header when clicking outside of it
    var dropTarg = $(e.target).closest('.header .dropdown').length;
    if(!dropTarg) {
      $('.header .dropdown').removeClass('show');
    }

    // closing nav sub menu of header when clicking outside of it
    if(window.matchMedia('(min-width: 992px)').matches) {

      // Navbar
      var navTarg = $(e.target).closest('.navbar .nav-item').length;
      if(!navTarg) {
        $('.navbar .show').removeClass('show');
      }

      // Header Menu
      var menuTarg = $(e.target).closest('.header-menu .nav-item').length;
      if(!menuTarg) {
        $('.header-menu .show').removeClass('show');
      }

      if($(e.target).hasClass('menu-sub-mega')) {
        $('.header-menu .show').removeClass('show');
      }

    } else {

      //
      if(!$(e.target).closest('#MenuShow').length) {
        var hm = $(e.target).closest('.header-menu').length;
        if(!hm) {
          $('body').removeClass('header-menu-show');
        }
      }
    }

  });

  $('#MenuShow').on('click', function(e){
    e.preventDefault();
    $('body').toggleClass('header-menu-show');
  })

  $('.header-menu .with-sub').on('click', function(e){
    e.preventDefault();
    $(this).parent().toggleClass('show');
    $(this).parent().siblings().removeClass('show');
  })

  $('.header-menu-header .close').on('click', function(e){
    e.preventDefault();
    $('body').removeClass('header-menu-show');
  })

});
