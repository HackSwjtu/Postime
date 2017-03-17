/**
 * Created by wz on 17-3-4.
 */
function main() {
    var back = function () {
        window.history.go(-1);
        chrome.storage.local.set({"retry": true}, function (result) {
        });
    };
    var body = document.body;
    var next = function (result) {
        if (body.innerHTML.indexOf('随机验证码输入错误') != -1) {
            body.innerHTML = body.innerHTML + "<br><h1>-1s</h1><script id='effect'></script>";
            chrome.storage.sync.get({'autoback': true}, function (result) {
                if (result.autoback) {
                    setTimeout(back, 1000);
                }
            });
            chrome.storage.sync.get({"effect": false}, function (result) {
                if (result.effect) {
                    var i = (Math.random() * 10).toFixed() % 7;
                    if (i == 6) {
                        setAdvertise();
                        return;
                    }
                    var name = "/images/" + i + ".png";
                    name = chrome.runtime.getURL(name);
                    name = 'url("' + name + '")';
                    document.body.style.backgroundImage = name;
                    document.body.style.backgroundRepeat = "no-repeat";
                    document.body.style.backgroundPosition = "center";
                    document.body.style.backgroundSize = "cover";
                }
            });
            chrome.storage.sync.get({"minus": 1}, function (result) {
                chrome.storage.sync.set({"minus": result.minus + 1}, function () {
                });
            });
            tracker.sendEvent('studentclicked', 'failed');
        }
        else if (body.innerHTML.indexOf('登录成功') != -1) {
            var remod = /欢迎您，(.*?)同学/;
            remod.exec(body.innerHTML);
            var name = RegExp.$1;
            body.innerHTML = body.innerHTML.replace(/欢迎您，(.*?)同学，正在连接系统，请稍候\.\.\.\.\./,
                '欢迎您，膜法师' + name + "。您的膜法已使长者的生命<font color='#FF0000'>+" + result.plus + "s，-" +
                result.minus + 's</font>  请再接再厉 ><<br><h1>+1s</h1><script id="effect"></script>');
            chrome.storage.sync.get({'effect': false}, function (result) {
                if (result.effect)
                    PhotoMove();
            });
            chrome.storage.sync.set({'plus': result.plus + 1}, function () {
            });
            tracker.sendEvent('studentclicked', 'success');
        }
    };
    chrome.storage.sync.get({'plus': 1, "minus": 0}, function (result) {
        next(result);
    });
}

main();