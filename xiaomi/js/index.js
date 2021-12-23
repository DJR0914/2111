//第一个轮播图
var g3 = document.querySelector(".g3");
var x1 = g3.querySelector(".x1");
var xli = x1.querySelectorAll(".x1>li");
var leng = xli.length - 1;
var jiantou = g3.querySelectorAll(".jiantou");
var diansun = g3.querySelectorAll(".diandian span")

var i = 0;
jiantou[1].onclick = function () {
	i++
	if (i > leng) {
		i = 0;
	}
	x1.style.left = -i * 1226 + "px"
	for (var x = 0; x < diansun.length; x++) {
		diansun[x].className = "";
		diansun[i].className = "on"
	}
}
jiantou[0].onclick = function () {
	i--
	if (i < 0) {
		i = leng
	}
	x1.style.left = -i * 1226 + "px"
	for (var x = 0; x < diansun.length; x++) {
		diansun[x].className = "";
		diansun[i].className = "on"
	}
}
setInterval(function () {
	jiantou[1].onclick()
}, 3000)
for (var y = 0; y < diansun.length; y++) {
	diansun[y].onclick = function () {
		var index = this.getAttribute("index")
		for (var x = 0; x < diansun.length; x++) {
			diansun[x].className = "";
			this.className = "on"
		}
		i = index;
		x1.style.left = -(index * 1226) + 'px';
	}
}
// 第二个轮播图
var x3 = document.querySelector(".x3");
var x4 = x3.querySelector(".x4");
var x4li = x4.querySelectorAll(".x4>li");
var lengg = x4li.length - 1;
var y2 = document.querySelector(".y2");
var y1 = document.querySelector(".y1");
var ii = 0;
y1.onclick = function () {
	ii++
	if (ii > 2) {
		ii = 0;
	}
	x4.style.left = -ii * 978 + "px"
}
y2.onclick = function () {
	ii--
	if (ii < 0) {
		ii = 2;
	}
	x4.style.left = -ii * 978 + "px"
}
setInterval(function () {
	y1.onclick();
}, 2500);
// 倒计时效果
var xx1 = document.getElementById("shi")
var xx2 = document.getElementById("fen")
var xx3 = document.getElementById("miao")
// console.log(xx1)
function showDate() {
	var now = new Date();
	var future = new Date("2021-11-11 23:59:59");
	var cha = (future - now) / 1000;
	var d = parseInt(cha / (60 * 60 * 24)); //天
	var h = parseInt(cha / 3600 % 24); //小时
	var min = parseInt(cha / 60 % 60); //分钟
	var sec = parseInt(cha % 60); //秒
	xx1.innerText = h;
	xx2.innerText = min;
	xx3.innerText = sec;
}
showDate()
setInterval(function () {
	showDate();
}, 1000);

//通用特效
//搜索框提示语
var e4 = document.querySelector(".e4");
var hy = 0
setInterval(function () {
	hy++
	if (hy == 1) {
		e4.placeholder = "Redmi红米"
	}
	if (hy == 2) {
		e4.placeholder = "RedmiBook Air 13 "
	}
	if (hy == 3) {
		e4.placeholder = "米家天然乳胶护颈枕"
	}
	if (hy == 4) {
		e4.placeholder = "米家三门冰箱215L"
	}
	if (hy == 5) {
		e4.placeholder = "小米笔记本Air 12.5"
		hy = 0
	}
}, 2000);
// 二级菜单
var v1 = document.getElementById("v1");
var v2 = document.getElementById("v2");
var v3 = document.getElementById("v3");
var m1 = document.querySelector(".m1");
var m2 = document.querySelector(".m2");
var m3 = document.querySelector(".m3");
v1.onmouseover = function () {
	m1.style.display = "block"
}
v1.onmouseout = function () {
	m1.style.display = "none"
}
v2.onmouseover = function () {
	m2.style.display = "block"
}
v2.onmouseout = function () {
	m2.style.display = "none"
}
v3.onmouseover = function () {
	m3.style.display = "block"
}
v3.onmouseout = function () {
	m3.style.display = "none"
}
// 二级菜单2
var s1 = document.querySelector(".s1");
var s2 = s1.querySelector(".s2");
var s3 = s1.querySelector(".s3");
var s4 = s1.querySelector(".s4");
var s5 = document.querySelector(".s5");
var s6 = document.querySelector(".s6");
var s7 = document.querySelector(".s7");
s5.onmouseover = function () {
	s2.style.display = "block"
	s5.style.backgroundColor = "orange"
}
s5.onmouseout = function () {
	s2.style.display = "none"
	s5.style.backgroundColor = "rgba(0,0,0,0.5)";
}
s6.onmouseover = function () {
	s3.style.display = "block"
	s6.style.backgroundColor = "orange"
}
s6.onmouseout = function () {
	s3.style.display = "none"
	s6.style.backgroundColor = "rgba(0,0,0,0.5)";
}
s7.onmouseover = function () {
	s4.style.display = "block"
	s7.style.backgroundColor = "orange"
}
s7.onmouseout = function () {
	s4.style.display = "none"
	s7.style.backgroundColor = "rgba(0,0,0,0.5)";
}
//小火箭
var rk = document.getElementById("rocket");

document.body.onscroll = function () {
	// console.log(1)
	if (document.documentElement.scrollTop >= 1000) {
		rk.style.display = 'block'
	} else {
		rk.style.display = "none"
	}
}

//小火箭实现思路
// 1. 点击后再慢慢，给小火箭绑定点击事件
// 2。通过定时器不断让网页的在当前滚动条的位置上卷去的高度慢慢变0


rk.onclick = function () {

	// var e=event||window.event;
	// 获取此时此刻滚动条的位置在哪里
	// 短路运算  找真，哪个支持就用哪个
	// HTML，body 
	// 让所有的浏览器都能兼容,可以使用
	var top = document.documentElement.scrollTop || document.body.scrollTop; //225
	console.log(top);
	// 通过定时器让它慢慢往回滚
	var timer = setInterval(function () {
		top -= 100;
		// 如果滚动条到顶了，则停止计时器
		if (top <= 0) {
			clearInterval(timer);
		}
		// 每次滚动条的值的变化
		console.log(top)
		// 更新滚动条的位置
		// 该scrollTop是可以读写，赋值就是改变滚动条的位置
		document.documentElement.scrollTop = top;

	}, 20);

}
