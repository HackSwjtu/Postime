var effect = null;
var autoclick = null;
var autoback = null;

function createAutoClick() {
    chrome.contextMenus.create({
        title: "自动点击登录(不稳定)",
        type: "checkbox",
        checked: autoclick,
        contexts: ["browser_action"],
        onclick: function (info, tab) {
            autoclick = !autoclick;
            chrome.storage.sync.set({'autoclick': autoclick});
        }
    });
}

function createAutoBack() {
    chrome.contextMenus.create({
        title: "登录失败自动回退",
        type: "checkbox",
        checked: autoback,
        contexts: ["browser_action"],
        onclick: function (info, tab) {
            autoback = !autoback;
            chrome.storage.sync.set({'autoback': autoback});
        }
    });
}

function createEffect() {
    chrome.contextMenus.create({
        title: "膜法特效全开",
        type: "checkbox",
        checked: effect,
        contexts: ["browser_action"],
        onclick: function (info, tab) {
            effect = !effect;
            chrome.storage.sync.set({'effect': effect});
        }
    });
}


chrome.storage.sync.get({'autoclick': false}, function (result) {
    autoclick = result.autoclick;
    chrome.storage.sync.set({'autoclick': autoclick}, createAutoClick);
});

chrome.storage.sync.get({'autoback': true}, function (result) {
    autoback = result.autoback;
    chrome.storage.sync.set({'autoback': autoback}, createAutoBack);
});

chrome.storage.sync.get({'effect': true}, function (result) {
    effect = result.effect;
    chrome.storage.sync.set({'effect': effect}, createEffect);
});
