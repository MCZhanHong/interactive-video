	/*var canvas=document.getElementById("inter-video");
	var ctx=canvas.getContext("2d");*/
	var video=document.getElementById("video");
	//视频监听
	

	//绘制在画布上
	

	//console.log(video.volume);
	//视频控制
	var play=document.getElementById("play");
	var pause=document.getElementById("pause");
	var fullscreen=document.getElementById("fullscreen");
	var exitfullscreen=document.getElementById("exitfullscreen");
	
	//播放进度条
	var play1=document.getElementById("play1");
	var playprocess1=document.getElementById("playprocess1");
	var playprocess=document.getElementById("playprocess");
	var playcontrol=document.getElementById("playcontrol");
	var disX1=0;
	

	
	//进度条移动
	//var disY1=0;
	window.onload=function(){
		video.addEventListener("timeupdate",show);
		video.oncanplay=function(){
			function drawvideo(){
			//ctx.drawImage(video,0,0,640,480);
			window.requestAnimationFrame(drawvideo);
			}
			drawvideo();
		}
		play.addEventListener("click",function(){
		video.play();
		play.style.display="none";
		pause.style.display="inline";
	});
	pause.addEventListener("click",function(){
		video.pause();
		play.style.display="inline";
		pause.style.display="none";
	});

	volumeopen.addEventListener("click",function(){
		volumeclose.style.display="inline";
		volumeopen.style.display="none";
		video.muted=true;
	});
	volumeopen.addEventListener("mouseover",function(){
		volumecontrol.style.display="inline";
	});
	volumeclose.addEventListener("click",function(){
		volumeopen.style.display="inline";
		volumeclose.style.display="none";
		video.muted=false;
	});
	volumeclose.addEventListener("mouseover",function(){
		volumecontrol.style.display="inline";
	});
	volumecontrol.addEventListener("mouseover",function(){
		volumecontrol.style.display="inline";
	});
	volumecontrol.addEventListener("mouseout",function(){
		volumecontrol.style.display="none";
	});

		videotime=parseInt(video.duration);
		console.log(videotime);
		var w=playprocess.offsetWidth;
		video.addEventListener("timeupdate",processmove);
		video.addEventListener("timeupdate",timechange);
		function processmove(){
			var x=video.currentTime/videotime*playprocess.offsetWidth;
			playcontrol.style.left=x+'px';
			playprocess1.style.width=x+6+'px';
		}
		

		//时间
		
		var chour,cminute,csecond;
		chour=parseInt(videotime/(60*60));
		cminute=parseInt((videotime-chour*60*60)/60);
		csecond=parseInt(videotime-chour*60*60-cminute*60);
		if(cminute<10&&csecond>=10)
			document.getElementById("ctime").innerHTML=chour+':0'+cminute+':'+csecond;
		else if(csecond<10&&cminute>=10)
			document.getElementById("ctime").innerHTML=chour+':'+cminute+':0'+csecond;
		else if(cminute<10&&csecond<10)
			document.getElementById("ctime").innerHTML=chour+':0'+cminute+':0'+csecond;
		else
			document.getElementById("ctime").innerHTML=chour+':'+cminute+':'+csecond;
		
		
		function timechange(){
			var nhour,nminute,nsecond;
			var playtime=Math.round(video.currentTime);
			nhour=parseInt(playtime/(60*60));
			nminute=parseInt((playtime-nhour*60*60)/60);
			nsecond=parseInt(playtime-nhour*60*60-nminute*60);
			console.log(nhour);
			console.log(nminute);
			console.log(nsecond);
			//document.getElementById("ntime").innerHTML=nhour+':'+nminute+':'+nsecond;
			if(nminute<10&&nsecond>=10)
				document.getElementById("ntime").innerHTML=nhour+':0'+nminute+':'+nsecond;
			else if(nsecond<10&&nminute>=10)
				document.getElementById("ntime").innerHTML=nhour+':'+nminute+':0'+nsecond;
			else if(nminute<10&&nsecond<10)
				document.getElementById("ntime").innerHTML=nhour+':0'+nminute+':0'+nsecond;
			else
				document.getElementById("ntime").innerHTML=nhour+':'+nminute+':'+nsecond;
			//document.getElementById("xtime").innerHTML='/';
			//aTime();
		}
		
		play1.onmousedown = function (ev) { //鼠标按下
        var oEvent = ev || event;
        var w=playprocess.offsetWidth;
        disX1 = oEvent.clientX - playcontrol.offsetLeft;
        //disY1 = oEvent.clientY - playcontrol.offsetTop;
        play1.onmousemove = function (ev) {
        	var oEvent = ev || event;
        	var l = oEvent.clientX - disX1;
            //var t = oEvent.clientY - disY1;
            /*if (l < 0)
            	l = 0;*/
            if (l > document.documentElement.clientWidth - playcontrol.offsetWidth) {
                      l = document.documentElement.clientWidth - playcontrol.offsetWidth;
                    }
            if(l<-6)	l=-6;
            if(l>w-6)	l=w-6;
                //volumebutton.style.left = l + 'px';      //确定DIV的左边位置
                //console.log(w);
            playcontrol.style.left= l+ 'px';
            console.log(l);
            playprocess1.style.width=l+6+'px';
            video.currentTime=(l+6)/w*videotime;
        }
            //确定DIV的上边位置
            //console.log(t);
        play1.onmouseup = function () {      //当鼠标松开后关闭移动事件和自身事件
            play1.onmousemove = null;
            play1.onmouseup = null;
        }   
    }
	};


	//显示音量控制
	var volume=document.getElementById("volume");
	var volumeopen=document.getElementById("volumeopen");
	var volumeclose=document.getElementById("volumeclose");
	var volumecontrol=document.getElementById("volumecontrol");
	var volumebar=document.getElementById("volume-bar");
	var volumebar1=document.getElementById("volume-bar1");

	

	//音量大小控制
	var nowvolume=volumebar.offsetHeight;
	var volumebutton=document.getElementById("volume-button");
	var h=volumebar1.offsetHeight;
	console.log(h);
	//console.log(nowvolume);
	//console.log(volumebutton.offsetHeight);
	//console.log(document.documentElement.clientHeight);
    //var disX = 0;
    var disY = 0;
    volumebutton.onmousedown = function (ev) { //鼠标按下
        var oEvent = ev || event;
        //disX = oEvent.clientX - volumebutton.offsetLeft;
        disY = oEvent.clientY - volumebutton.offsetTop;
        volumebutton.onmousemove = function (ev) {
        	var oEvent = ev || event;    
        	//var l = oEvent.clientX - disX;
            var t = oEvent.clientY - disY;
            /*if (l < 0)
            	l = 0;
            else if (l > document.documentElement.clientWidth - volumebutton.offsetWidth) {
                      l = document.documentElement.clientWidth - volumebutton.offsetWidth;
                    }*/
            if (t > document.documentElement.clientHeight- volumebutton.offsetHeight) {
                t=document.documentElement.clientHeight- volumebutton.offsetHeight;
                    }
            else if(t<-5)	t=-5;
            else if(t>75)	t=75;
                //volumebutton.style.left = l + 'px';      //确定DIV的左边位置
            volumebutton.style.top = t + 'px';      
            //确定DIV的上边位置
            //console.log(t);
            var h1=(8*t-600)/7+5;
            volumebar1.style.height=-h1+'px';
            //console.log(h1);
            video.volume=1-(t+5)/80;
            //console.log(t);
            //console.log(video.volume);
            if((video.volume-0.01)<0)
            {
            	volumeclose.style.display="inline";
				volumeopen.style.display="none";
				video.muted=true;
            }
            else{
            	volumeopen.style.display="inline";
				volumeclose.style.display="none";
				video.muted=false;
            }
        }
        volumebutton.onmouseup = function () {      //当鼠标松开后关闭移动事件和自身事件
            volumebutton.onmousemove = null;
            volumebutton.onmouseup = null;
        }   

    }


	//全屏
	var css1=document.getElementById("css1");

	fullscreen.addEventListener("click",function(){
		document.getElementById("main").webkitRequestFullScreen();
		fullscreen.style.display="none";
		exitfullscreen.style.display="inline";
		css1.href="css/newinter-video1.css";
	});
	//退出全屏
	exitfullscreen.addEventListener("click",function(){
		document.webkitCancelFullScreen();
		fullscreen.style.display="inline";
		exitfullscreen.style.display="none";
		css1.href="css/newinter-video.css";
	});

	//视频监测
	function show(){
		var nowtime=video.currentTime;
		if(Math.floor(nowtime)==390||Math.floor(nowtime)==653||Math.floor(nowtime)==498){
			video.pause();
			appear();
		}
	}

	//鼠标监测
	//var IsMove=setInterval("",500);
	//获取鼠标位置
	/*var mousex,mousey;
	function mouseMove(ev){
		ev=ev||window.event;
		if(ev.pageX || ev.pageY){
			mousex=ev.pageX;
			mousey=ev.pageY;
		}
	}
	document.onmousemove=mouseMove;*/
	var imouse=0,n=0;
	document.body.onmousemove=function(){
		imouse=1;
		n=0;
	}
	var itime=window.setInterval(function(){
		//console.log(imouse);
		n++;
		if(imouse==0&&n>=10){
			document.getElementById("controls").style.display="none";
		}
		else{
			document.getElementById("controls").style.display="inline";
		}
		if(imouse){
			imouse=0;
		}
		//console.log(n);
	},500);


	//交互界面
	var interback=document.getElementById("interback");
	var interone=document.getElementById("interone");
	var intertwo=document.getElementById("intertwo");
	var interthree=document.getElementById("interthree");
	var opacity=document.getElementById("opacity");
	var clickchoice=document.getElementsByClassName("empty");
	//交互界面的隐藏
	function disappearchoice(){
		interone.style.display="none";
		intertwo.style.display="none";
		interthree.style.display="none";
	}
	function disappearall(){
		disappearchoice();
		opacity.style.display="none";
		interback.style.display="none";
	}
	//交互界面的显示
	function appear(){
		opacity.style.display="inline";
		interback.style.display="inline";
	}
	
	clickchoice[0].addEventListener("mouseover",function(){
		appear();
		disappearchoice();
		interone.style.display="inline";
	});
	clickchoice[1].addEventListener("mouseover",function(){
		appear();
		disappearchoice();
		intertwo.style.display="inline";
	});
	clickchoice[3].addEventListener("mouseover",function(){
		appear();
		disappearchoice();
		interthree.style.display="inline";
	});
	clickchoice[4].addEventListener("mouseover",function(){
		appear();
		disappearchoice();
		interthree.style.display="inline";
	});

	//交互事件的绑定
	clickchoice[0].addEventListener("click",function(){
		video.currentTime=654;
		video.play();
		disappearall();
		//console.log(1);
	});
	clickchoice[1].addEventListener("click",function(){
		disappearall();
		video.currentTime=499.0;
		video.play();
	});
	clickchoice[3].addEventListener("click",function(){
		disappearall();
		video.currentTime=391.0;
		video.play();
	});
	clickchoice[4].addEventListener("click",function(){
		disappearall();
		video.currentTime=391.0;
		video.play();
	});
