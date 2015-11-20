function execute()
{
console.log("hello");
var a=(document.getElementById("para1"));
//console.log(parseInt(window.getComputedStyle(a,null).getPropertyValue("left")));
document.getElementById("para1").style.position="absolute";
document.getElementById("para1").style.left=0;
document.getElementById("para1").style.top=0;
a.onkeypress=function() {execute2()};
}
function execute2()
{
	console.log("hello2");
	document.getElementById("para2").style.position="absolute";
	document.getElementById("para2").style.left=0;
	document.getElementById('para2').style.top=0;
}
//while((document.getElementById("inpara1").offsetLeft)<0)
//{
	//var a=document.getElementById("inpara1").style.left;
	//window.alert(a);
//var p=document.getElementById("inpara1").style.left;
//(document.getElementById("inpara1").style.left)=0;
//setTimeout(move(),20);
//}

/*function move()
{

console.log(a);
document.getElementById("para1").style.left=a+'10%';
}*/

