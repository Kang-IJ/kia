$(function(){
    
    
var tabBtn=$(".move>li");
var tabCont=$(".news>div");
    
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
    
    
    
    
});