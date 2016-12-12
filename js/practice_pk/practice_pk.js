// 修改 dom 界面
var box = $("td[colspan='2']")[1];
$('<input/>', {
    'type': 'button',
    'value': '一键好评',
    'onclick': 'badit(0)',
}).appendTo(box);

$('<input/>', {
    'type': 'button',
    'value': '一键差评',
    'onclick': 'badit(4)',
}).appendTo(box);
