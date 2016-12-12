// 修改 dom 界面
var box = $("td[colspan='2']")[1];
$('<input/>', {
    'type': 'button',
    'value': '实习只有差评',
    'onclick': 'badit(0)',
}).appendTo(box);

$('<input/>', {
    'type': 'button',
    'value': '实习只有差评',
    'onclick': 'badit(1)',
}).appendTo(box);

$('<input/>', {
    'type': 'button',
    'value': '实习只有差评',
    'onclick': 'badit(2)',
}).appendTo(box);

$('<input/>', {
    'type': 'button',
    'value': '实习只有差评',
    'onclick': 'badit(3)',
}).appendTo(box);
