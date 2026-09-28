$(document).ready(function(){ //시작

  // 2차 메뉴
  $(".depth2").hide();

  $(".gnb li").hover(function(){

    $(this).children(".depth2").stop().fadeToggle();

  });

  // 검색
  $(".btn-search").click(function(){

    $(".search").fadeIn();

  });

  $(".search-close").click(function(){

    $(".search").fadeOut();

  });

  // 햄버거
  $(".ham").click(function(){

    $(".dim").fadeIn();
    $(".mgnb-wrap").animate({"right" : "0"});

  });

  $(".mgnb-close").click(function(){

    $(".dim").fadeOut();
    $(".mgnb-wrap").animate({"right" : "-100%"});

  });

  const visual_list = new Swiper(".visual-list",{
    effect : "fade",

    fadeEffect:{
      crossFade: true
    },

    loop : true,

    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

    pagination: {
    el: '.swiper-pagination',
    type: 'fraction', // 하단 숫자 바
  },
  });

  const about_txt_list = new Swiper(".about-txt-list",{

    effect : "fade",

    fadeEffect:{
      crossFade: true
    }, // fade 작동시 이미지끼리 겹치는거 방지.

  });

  const about_img_list = new Swiper(".about-img-list",{

    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  speed: 1000,

  pagination: {
    el: '.swiper-pagination',
    clickable: true, // 숫자바 쓰면 지우기
  },

  });

  about_txt_list.controller.control = about_img_list;
  about_img_list.controller.control = about_txt_list;

  const prd_list = new Swiper(".prd-list", {

    centeredSlides : true, //loop : true 와 사용하면 종종 버그가 날수 있음.

    loop : true,

    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

    navigation: {
    nextEl: '.prd-next',
    prevEl: '.prd-prev',
  },

  slidesPerView : 1,

breakpoints: {
  1000: { 
    slidesPerView: 2,
  },
  1400: { 
    slidesPerView: 3,
  },
},

  });

  $("#collection ul li").hover(function(){

    $(this).addClass("active").siblings().removeClass("active");

  });

}); //끝