/**
 * Created by wz on 17-2-24.
 */

function networklogin() {
    var focus = function () {
        var pwd = document.getElementById('password');
        pwd.focus();
    };
    var click = function () {
        var button = document.getElementsByTagName('input')[4];
        button.click();
    };
    setTimeout(focus, 1200);
    setTimeout(click, 1500);
}

function main() {
    img2string(4, "network.json", function (ret) {
        document.getElementById('verify').value = ret;
        chrome.storage.sync.get({'autoclick': false}, function (result) {
            if (result.autoclick) {
                networklogin();
            }
        });
        tracker.sendEvent('network','split');
    });
}

main();
