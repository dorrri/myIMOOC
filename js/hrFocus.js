window.onload=function () {
	var pic=document.getElementById("pic1");
	var next=document.getElementById("next");
	var pre=document.getElementById("pre");
	var ad=document.getElementById("ad1");
	var autoTimer;

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
		focus(-1000);
	};
	pre.onclick=function () {
		focus(1000);
	};

	function autoPlay() {
		autoTimer=setInterval(function () {
			next.onclick();
		},3000);
	}

	function autoStop() {
		clearInterval(autoTimer);
	}

	autoPlay();

	ad.onmouseover=function (){
		autoStop();
	};
	ad.onmouseout=function (){
		autoPlay();
	};


}

