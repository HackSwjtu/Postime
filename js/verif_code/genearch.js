/**
 * Created by wz on 17-2-24.
 */
function main() {
    var callimage2string = function () {
        img2string(4, "genearch.json",function (ret) {
            if (ret){
                document.getElementById('ranstring').value = ret;
                tracker.sendEvent('genearch','split_success','success');
            }
            else{
                document.getElementById('ranstring').value = '分割失败，请刷新网页';
                tracker.sendEvent('genearch','split_failed','failed');
            }
            chrome.storage.sync.get({'autoclick': false}, function (result) {
                if (result.autoclick) {
                    login();
                }
            });
        })
    };
    chrome.storage.local.get({'retry': false}, function (result) {
        if (result.retry) {
            chrome.storage.local.remove('retry');
            changeImg(callimage2string);
        }
        else
            callimage2string();
    });
}

main();

function genearchclicked() {
    var body = document.body;
    var next = function (result) {
        if (body.innerHTML.indexOf('随机验证码输入错误') != -1) {
            body.innerHTML = body.innerHTML + "<br><h1>-1s</h1>";
            chrome.storage.sync.get({'autoback': true}, function (result) {
                if (result.autoback) {
                    window.history.go(-1);
                    chrome.storage.local.set({"retry": true}, function (result) {
                    });

                }
            });
            chrome.storage.sync.get({"minus": 1}, function (result) {
                chrome.storage.sync.set({"minus": result.minus + 1}, function () {
                });
            });
        }
        else if (body.innerHTML.indexOf('登录成功') != -1) {
            var remod = /欢迎您，(.*?)同学/;
            remod.exec(body.innerHTML);
            var name = RegExp.$1;
            body.innerHTML=body.innerHTML.replace(/欢迎您，(.*?)同学，正在连接系统，请稍候\.\.\.\.\./,
                '欢迎您，膜法师' + name + "。您的膜法已使长者的生命<font color='#FF0000'>+" + result.plus + "s，-" +
                result.minus + "s</font>  请再接再厉 ><<br><h1>+1s</h1>");
            console.log(body.innerHTML);
            chrome.storage.sync.set({'plus': result.plus + 1}, function () {
            })
        }
    };
    chrome.storage.sync.get({'plus': 1, "minus": 0}, function (result) {
        next(result);
    });
}