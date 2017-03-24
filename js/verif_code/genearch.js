/**
 * Created by wz on 17-2-24.
 */

function main() {
    var callimage2string = function () {
        img2string(4, "genearch.json", function (ret) {
            if (ret) {
                document.getElementById('ranstring').value = ret;
                tracker.sendEvent('genearch', 'split_success', 'success');
            }
            else {
                document.getElementById('ranstring').value = '分割失败，请刷新网页';
                tracker.sendEvent('genearch', 'split_failed', 'failed');
            }
            chrome.storage.sync.get({'autoclick': false}, function (result) {
                if (result.autoclick) {
                    login();
                }
            });
        })
    };
    callimage2string();
};

if (window.location.href.indexOf("202.115.67.4") != -1) { //需要先获取验证码的学生登录页面
    injectScript("js/verif_code/inject/autoGetphoto.js");   //自动获取验证码
    document.getElementById("imgRandom").onload = function () {
        main();
    }
}
else
    main();