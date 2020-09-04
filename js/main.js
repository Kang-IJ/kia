 $(function(){    
 
 jQuery(document).ready(function ($) {

            var jssor_1_options = {
              $AutoPlay: true,
              $SlideDuration: 1000,
              $SlideEasing: $Jease$.$OutQuint,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            /*responsive code begin*/
            /*you can remove responsive code if you don't want the slider scales while window resizing*/
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 1920);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 80);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            /*responsive code end*/
        });


	
	 /* 차량 슬라이더 */
  var mySlider=$("#cars ul").bxSlider({
      mode:"horizontal",
        speed:500,
        pager:false,
        moveSlides:1,
        slideWidth:500,
        minSlides:3,
        maxSlides:3,
        slideMargin:30,
        auto:false,
        autoHover:true,
        controls:false,
  		adaptiveHeight:!0,
  		responsive:!0
  });

  $(".prev_btn").on("click",function(){
  mySlider.goToPrevSlide();
  return false;
  });

  $(".next_btn").on("click",function(){
  mySlider.goToNextSlide();
  return false;
  });
  
	 /* 기아 뉴스 */
  var mySlider2=$("#cont4-1 ul").bxSlider({
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
  mySlider2.goToPrevSlide();
  return false;
  });

  $(".next_btn").on("click",function(){
  mySlider2.goToNextSlide();
  return false;
  });


		//right_menu
	$(".menu_icon").on("click",function(){
		$(".menu_2").stop().slideDown(300);
		$(this).find(".menu_2_in").stop().slideDown(300);
		$(".menu_icon img").attr("src","")
		$(".black_back").css("display","block");
		});
	$(".close, .black_back").on("click",function(){
		$(".menu_2").stop().slideUp(300);
		$(this).find(".menu_2_in").stop().slideUp(300);
		$(".black_back").css("display","none");
		$(".menu_icon img").attr("src","common/images/menu_icon_back.png")
	});
	
	//구매정보
		$(".pur").on("click",function(){
		$(".purchase").slideToggle("fast");
		$(".black_back").fadeToggle("fast");
		});
		$(".black_back, .pur_close").on("click",function(){
			$(".purchase").slideUp("fast");	
			$(".black_back").fadeOut("fast");
		});
		
			//top scroll 부드럽게 올라가기	
	$(document).ready(function(){
		$('.top').click(function(e){
			$.scrollTo(this.hash || 0, 300);
			e.preventDefault();
	   });
	});
//top
	$(window).scroll(function(){  // 화면 스크롤시 아래코드실행....
      var num = $(this).scrollTop();  // 스크롤값을 가져온다.
      if( num > 500 ){  // 스크롤을 200 이상했을시 보이고 이하는 감추기
          $(".top").fadeIn();
      }else{
          $(".top").fadeOut();
      }
 });
 
}); //function end
