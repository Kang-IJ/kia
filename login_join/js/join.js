// JavaScript Document $(function(){    
  $(function(){    


			//top scroll 부드럽게 올라가기	
	$(document).ready(function(){
		$('.top').click(function(e){
			$.scrollTo(this.hash || 0, 300);
			e.preventDefault();
			});
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
		$(".menu_icon img").attr("src","../common/images/menu_icon_back.png")
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
//top
	$(window).scroll(function(){  // 화면 스크롤시 아래코드실행....
      var num = $(this).scrollTop();  // 스크롤값을 가져온다.
      if( num > 100 ){  // 스크롤을 200 이상했을시 보이고 이하는 감추기
          $(".top").fadeIn();
      }else{
          $(".top").fadeOut();
      }
 });
  
}); //function end
