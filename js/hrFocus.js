window.onload=function () {
	var pic=document.getElementById("pic1");
	var next=document.getElementById("next");
	var pre=document.getElementById("pre");
	var ad=document.getElementById("ad1");
	var autoTimer;
	var b=true;

	function focus(dis) {
		var newLeft=pic.offsetLeft+dis;
		var speed=dis/20;
		var timer = setInterval(function () {
			if (pic.offsetLeft === newLeft) {
				if(pic.offsetLeft<=-4000){
					pic.style.left ="-1000px";
				}else if(pic.offsetLeft>=0){
					pic.style.left ="-3000px"
				}
				clearInterval(timer);
			} else {
				pic.style.left = pic.offsetLeft + speed + "px";
			}
		}, 10);

	}

	next.onclick=function () {
		if (b){
			b=false;
			focus(-1000);
			b=true;
		}

	};
	pre.onclick=function () {
		if (b){
			b=false;
			focus(1000);
			b=true;
		}
	};

	function autoPlay() {
		autoTimer=setInterval(function () {
			next.onclick();
		},3000);
	}

	function autoStop() {
		clearInterval(autoTimer);
	}

	window.onblur=function (){
		autoStop();
	}

	window.onfocus=function(){
		autoPlay();
	}

	ad.onmouseover=function (){
		autoStop();
	};
	ad.onmouseout=function (){
		autoPlay();
	};


}

