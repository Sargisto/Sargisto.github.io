  var btntop = $('.btn-top');
 $(window).on("scroll",function () {
 	
 if($(window).scrollTop()>=200){
 		
 		btntop.fadeIn(1000)
 }
 else{
 		btntop.fadeOut()
 	}
 })

 btntop.on('click',function(){
$('html,body').animate({scrollTop:0},1000)
       })

 $(".a").click(function(){
  $('html,body').animate({scrollTop:0},1000)
});
 $(".b").click(function(){
  $('html,body').animate({scrollTop:700},1000)
});
 $(".c").click(function(){
  $('html,body').animate({scrollTop:2000},1000)
});
 $(".d").click(function(){
  $('html,body').animate({scrollTop:3000},1000)
});
 $(".e").click(function(){
  $('html,body').animate({scrollTop:1350},1000)
});

 var i=1;
    $(".f").click(function(){
    i++
    
    if(i%2==0){
        $(".block").css("display", "none");
        }
        else{
        $(".block").css("display", "block");
        }
    });