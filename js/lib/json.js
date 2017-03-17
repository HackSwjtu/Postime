function getData(name, callback) {
    id = chrome.runtime.id;
    url = chrome.runtime.getURL("data/" + name);
    var json_req = new XMLHttpRequest();
    json_req.overrideMimeType("applicatoin/json");
    json_req.open("get", url, true);
    json_req.onreadystatechange = function () {
        if (json_req.readyState == 4) {
            data = JSON.parse(json_req.responseText);
            callback(data);
        }
    };
    json_req.send();
}