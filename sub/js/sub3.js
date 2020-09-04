// JavaScript Document

$(function(){
	
var tabBtn=$(".tab_btn>ul>li");
var tabCont=$(".tab_cont>div");
    
tabCont.hide().eq(0).show();
    
tabBtn.click(function(e){
e.preventDefault();
    
var target=$(this);
var index=target.index();
    
tabBtn.removeClass("active");
target.addClass("active");
tabCont.css("display","none");
tabCont.eq(index).css("display","block");
}); //tabBtn end
	
var tabBtn2=$(".move>li");
    
tabBtn2.click(function(e){
e.preventDefault();
    
var target=$(this);
var index=target.index();
    
tabBtn2.removeClass("active2");
target.addClass("active2");
}); //tabBtn end  

  
$(".list3>li").on("click",function(){
  $(this).find(".sub").slideToggle();
  return false;
});



	});  //function end
