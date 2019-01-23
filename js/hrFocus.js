window.onload=function () {
	var pic=document.getElementById("pic1");
	var next=document.getElementById("next");
	var pre=document.getElementById("pre");
	var ad = document.getElementById("ad1");
	var cirBtns=ad.getElementsByTagName("span");

	var index=1;
	var animated=false;

	pre.onclick=function () {
		if (index===1){
			index=3;
		} else{
			index-=1;
		}

		if (!animated){
			animate(1000);
		}

		showBtns();
	}

	next.onclick=function () {
		if (index===3){
			index=1;
		} else{
			index+=1;
		}

		if (!animated){
			animate(-1000);
		}

		showBtns();
	}

	function animate(offset) {
		animated=true;
		var newLeft=pic.offsetLeft+offset;
		var time=300;
		var interval=5;
		var speed=offset/(time/interval);

		function go() {
			if((speed<0 && pic.offsetLeft>newLeft)||(speed>0 && pic.offsetLeft<newLeft)){
				pic.style.left=pic.offsetLeft+speed+"px";
				setTimeout(go,interval);
			} else {
				animated=false;
				pic.style.left=newLeft+"px";

				if (newLeft <= -4000) {
					pic.style.left = "-1000px";
				} else if (newLeft >= 0) {
					pic.style.left = "-3000px"
				}
			}
		}
		go();

	}

	function showBtns() {
		for(var i=0;i<cirBtns.length;i++){
			var button=cirBtns[i];
			if(button.className === "on"){
				button.className="";
				break;
			}
		}
		cirBtns[index-1].className="on";
	}

	for(var i=0;i<cirBtns.length;i++){
		var button=cirBtns[i];
		button.onclick=function () {
			if(this.className==="on"){
				return;
			}

			var myIndex=parseInt(this.getAttribute("index"));
			var offset=-1000*(myIndex-index);
			if(!animated){
				animate(offset);
			}
			index=myIndex;
			showBtns();
		}
	}

	var autoTimer;
	function autoPlay() {
		autoTimer=setInterval(function () {
			next.onclick();
		},3000);
	}

	function autoStop() {
		clearInterval(autoTimer);
	}

	ad.onmouseover=autoStop;
	ad.onmouseout=autoPlay;

	autoPlay();

	// function focus(dis) {
	// 	var newLeft=pic.offsetLeft+dis;
	// 	var speed=dis/20;
	// 	var timer = setInterval(function () {
	// 		if (pic.offsetLeft === newLeft) {
	// 			if(pic.offsetLeft<=-4000){
	// 				pic.style.left ="-1000px";
	// 			}else if(pic.offsetLeft>=0){
	// 				pic.style.left ="-3000px"
	// 			}
	// 			clearInterval(timer);
	// 		} else {
	// 			pic.style.left = pic.offsetLeft + speed + "px";
	// 		}
	// 	}, 10);
	// 	b=false;
	//
	// }
	//
	// next.onclick=function () {
	// 	if (b){
	// 		return;
	// 	}
	// 	b=true;
	// 	focus(-1000);
	//
	// };
	// pre.onclick=function () {
	// 	if (b){
	// 		return;
	// 	}
	// 	b=true;
	// 	focus(1000);
	// };
	//
	// function autoPlay() {
	// 	autoTimer=setInterval(function () {
	// 		next.onclick();
	// 	},3000);
	// }
	//
	// function autoStop() {
	// 	clearInterval(autoTimer);
	// }
	//
	// autoPlay();
	//
	// ad.onmouseover=autoStop;
	//
	// ad.onmouseout=autoPlay;

}

