		$(document).ready(function(){
		$(".screenbg ul li").each(function(){
			$(this).css("opacity","0");
		});
		$(".screenbg ul li:first").css("opacity","1");
		var index = 0;
		var t;
		var li = $(".screenbg ul li");	
		var number = li.size();
		function change(index){
			li.css("visibility","visible");
			li.eq(index).siblings().animate({opacity:0},6000);
			li.eq(index).animate({opacity:1},6000);
		}
		function show(){
			index = index + 1;
			if(index<=number-1){
				change(index);
			}else{
				index = 0;
				change(index);
			}
		}
		t = setInterval(show,4000);
		var width = $(window).width();
		$(".screenbg ul img").css("width",width+"px");
	});