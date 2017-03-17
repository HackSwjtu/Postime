/**
 * Created by wz on 17-2-25.
 */
var width = document.body.clientWidth;
var height = document.body.clientHeight;
var w = 200, h = 200;
var x = (Math.random() * 1920).toFixed() % (width - 2*w), y = (Math.random() * 1080).toFixed() % (height - 2*h);
var v = 0, dirx = 1, diry = 1, limitv = 100, as = (Math.random() * 10).toFixed() % 5 + 5;
function Move() {
    if (Math.abs(v) >= limitv) {
        console.log(v, as);
        as = -as;
    }
    v += as;
    if (v >= -2 && v <= 2) {
        dirx = -dirx;
        diry = -diry;
    }
    x += dirx * Math.abs(v)/2;
    y += diry * Math.abs(v)/2;
    width = document.body.clientWidth;
    height = document.body.clientHeight;
    if (x > width - w || x < 0)
        dirx = -dirx;
    if (y > height - h || y < 0)
        diry = -diry;
    var a = document.getElementById("photo");
    a.setAttribute("style", "position:absolute;left:" + x + "px;top:" + y + "px;");
    console.log(a);
    setTimeout(Move, 30);
}

function PhotoMove() {
    var body = document.body;
    var imgname = chrome.runtime.getURL("images/exciting.png");
    body.innerHTML = body.innerHTML + '<img id="photo" width="200" height="200" src=' + imgname + '>';
    Move();
}

