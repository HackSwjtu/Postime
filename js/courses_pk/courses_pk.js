//************修改 dom 界面***************
if (true)
{
var box = $("td[colspan='2']")[1];
box.innerHTML += "&nbsp;&nbsp;";
$('<input/>', {
    'type': 'button',
    'value': '一键好评',
    'onclick': 'badit(0)',
}).appendTo(box);
box.innerHTML += "&nbsp;&nbsp;";
$('<input/>', {
    'type': 'button',
    'value': '一键差评',
    'onclick': 'badit(4)',
}).appendTo(box);
}


//*************前置按钮*******************
if (true)
{
var frontbox=document.createElement("div");;
$('<input/>', {
    'type': 'button',
    'value': '一键好评',
    'onclick': 'badit(0)',
}).appendTo(frontbox);
frontbox.innerHTML += "&nbsp;&nbsp;";
$('<input/>', {
    'type': 'button',
    'value': '一键差评',
    'onclick': 'badit(4)',
}).appendTo(frontbox);
$('#answerForm').before(frontbox);
}


//***********显示所有问题*****************
if (true)
{
for (var i=1;i<=17;i++)
{
	document.getElementById("post-problem"+i).style.display="block";
	document.getElementById("answerDiv"+i).style.display="block";
	if(i>0)
	{
		var last_div = document.getElementById("answerDiv"+(i-1));
		var ins = last_div.getElementsByTagName('input');
		for(var j=0;j<ins.length;j++)
		{
			ins[j].onclick=function(){};
		}
		}
	}
}
