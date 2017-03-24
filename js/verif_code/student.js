/**
 * Created by wz on 17-2-23.
 */
function login() {
    var focus = function () {
        pwd = document.getElementById('password');
        pwd.focus();
    };
    var click = function () {
        document.getElementById('btn1').click();
    };
    setTimeout(focus, 1000);
    setTimeout(click, 1200);
}

function changeImg(callback) {
    document.getElementById("imgRandom").src = "http://jiaowu.swjtu.edu.cn/servlet/GetRandomNumberToJPEG?test=" + new Date().getTime();
    setTimeout(callback, 1500);
}


function main() {
    var callimage2string = function () {
        img2string(4, "student.json", function (ret) {
            if (ret) {
                document.getElementById('ranstring').value = ret;
                tracker.sendEvent('student_split', 'success');
            }
            else {
                document.getElementById('ranstring').value = '分割失败，请刷新网页';
                tracker.sendEvent('student_split', 'failed');
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
