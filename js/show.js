window.onload=function(){
	$(".loading").hide();

}

//js判断手机横竖屏判断
function orient() { 
	if (window.orientation == 90 || window.orientation == -90) { 
	
		$(".portrait").hide();
		$(".cover").show(); 
    }
	else if (window.orientation == 0 || window.orientation == 180) { 
		$(".portrait").show();
		$(".cover").hide();
	}
}
	var timer;
	$(window).bind("orientationchange", function(){
		clearTimeout(timer);
		timer = setTimeout(orient, 300);
	});
orient();