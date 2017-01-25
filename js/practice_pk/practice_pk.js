//************修改 dom 界面***************
var box = $("td[colspan='2']")[1];
box.innerHTML += "&nbsp;&nbsp;";
$('<input/>', {
    'type': 'button',
    'value': '一键差评',
    'onclick': 'badit(0)',
}).appendTo(box);
box.innerHTML += "&nbsp;&nbsp;";
$('<input/>', {
    'type': 'button',
    'value': '一键好评',
    'onclick': 'badit(1)',
}).appendTo(box);
