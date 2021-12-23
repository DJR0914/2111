var q2=document.querySelector(".q2");
var q3=document.querySelector(".q3");
var q1=document.querySelector(".q1");
var q4=document.querySelector(".q4");
q2.onclick=function(){
	q1.style.display="none";
	q4.style.display="block"
	q2.style.color="orange"
	q3.style.color="black"
}
q3.onclick=function(){
	q4.style.display="none";
	q1.style.display="block"
	q2.style.color="black"
	q3.style.color="orange"
}
// 正则表达式
function crr(){
	var q5=document.querySelector(".q5");
	
	var q5v=q5.value;
	if(q5v==""){
		alert("用户名不能为空")
		return false
	}
	var  reg1=/^[a-zA-Z]\w{5,14}$/;//用户名6~15位数字字母下划线,首字母为英文字母
	if(!reg1.test(q5v)){
				alert("请输入6~15位数字字母下划线,首字母为英文字母的用户名")
				q5.value=''
				return false;
			}
}
function drr(){
	var q6=document.querySelector(".q6");
	
	var q6v=q6.value;
	if(q6v==""){
		alert("密码不能为空")
		return false
	}
	var  reg2=/^[a-zA-Z0-9]{6,10}$/;//用户名6~15位数字字母下划线,首字母为英文字母
	if(!reg2.test(q6v)){
				alert("*密码必须是6~10位的字母或者数字")
				q6.value=''
				return false;
			}
}