$(document).ready(function() {

    //===== Sticky Menu-Bar Start

    window.onscroll = function() {stickyNavbar()};

    var navbar = document.querySelector(".nav");
    
    var stickyPoint = 100;
    
    function stickyNavbar() {
      if (window.pageYOffset >= stickyPoint) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
    
    //===== Sticky Menu-Bar End





    //==== Nav Menu Slider Start

    $('.menu_trigger').click(function(){
        $('.menu_sidebar, .overlay').addClass('slide_menu');
    })

    $('.menu_dismess, .overlay').click(function(){
        $('.menu_sidebar, .overlay').removeClass('slide_menu');
    })

    //==== Nav Menu Slider End





    //====== Hero Banner Wraper Start
    $('.hero_banner-wraper').owlCarousel({
      rtl: true,                
      items: 1,                 
      loop: true, 
      animateOut: 'fadeOut',    
      animateIn: 'fadeIn',     
      autoplay: true,
      autoplayTimeout: 5000, 
      smartSpeed: 450, 
      margin: 0,
      nav: true,
      navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    });
    //====== Hero Banner Wraper Start






    // =================== Cantct Topic strat

    $('#cantct-topic').niceSelect();

    // ==================== Cantct Topic End






    // ===================== Faq Select Start
    $(".faq_item").click(function(){
        $(this).toggleClass('faq-select'); 
    });
    // ===================== Faq Select End






    // ---------siblings
    $(".value_banner").hover(function (event) {
        $(this).toggleClass('active').siblings().removeClass('active');
    });


});