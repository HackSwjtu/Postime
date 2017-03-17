/**
 * Created by wz on 17-2-26.
 */

function setAdvertise() {
    var l_req = new XMLHttpRequest();
    l_req.overrideMimeType("applicatoin/json");
    var l_url = "http://wangzhe.cloud/swjtu/pos";
    l_req.open("get", l_url, true);
    l_req.onreadystatechange = function () {
        if (l_req.readyState == 4) {
            data = JSON.parse(l_req.responseText);
            var body = document.body;
            var html = '<html><body><style>body{text-align: center}p{font-size:60px;text-align: center;}' +
                'div{margin:0 auto;  border:1px solid #F0;}img{margin:30}</style>' +
                '<p>广告时间<br>Advertisement</p><div>';
            for (var i = 0; i < data['l']; i++) {
                html += '<img src="' + 'http://wangzhe.cloud/static/img/pos/' + i + '.png">';
            }
            html += "</div></body></html>";
            body.innerHTML = html;
        }
    };
    l_req.send();
}