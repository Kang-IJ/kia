// JavaScript Document

$(function(){
  
  
  //cars
  var mySlider=$("#cars ul").bxSlider({
      mode:"horizontal",
        speed:500,
        pager:false,
        moveSlides:1,
        slideWidth:500,
        minSlides:1,
        maxSlides:1,
        slideMargin:30,
        auto:false,
        autoHover:true,
        controls:false
  });

  $(".prev_btn").on("click",function(){
  mySlider.goToPrevSlide();
  return false;
  });

  $(".next_btn").on("click",function(){
  mySlider.goToNextSlide();
  return false;
  });
  
  
  //cars2
  var mySlider2=$("#cars2 ul").bxSlider({
      mode:"horizontal",
        speed:500,
        pager:false,
        moveSlides:1,
        slideWidth:500,
        minSlides:1,
        maxSlides:1,
        slideMargin:30,
        auto:false,
        autoHover:true,
        controls:false
  });

  $(".prev_btn2").on("click",function(){
  mySlider2.goToPrevSlide();
  return false;
  });

  $(".next_btn2").on("click",function(){
  mySlider2.goToNextSlide();
  return false;
  });
  
});