function badit(ind) {
    var radios = $(":radio");
    var ps = $("input[name='problem_id']");
    var firstVal = radios[ind].value;
    var dg_ans = "", dg_ids = "";
    for (var i = 1; i <= 8; ++ i) {
        index = Number(ind) + (i - 1) * 5;
        if (i == 8) {
            dg_ans += "," + "这个导师很屌呦。哎呦，不错哦。"
            continue;
        } else {
            num = (Number(firstVal) + (i - 1) * 5);
            dg_ans += "," + num;
        }
    }

    for (i = 0; i < ps.length; ++ i) {
        code = ps[i].value;
        dg_ids += "," + code;
    }

    $.post("AssessAction?SetAction=answer",
        {
            id: dg_ids,
            answer: dg_ans,
            assess_id: $("input[name='assess_id']").val(),
            templateFlag: "1"
        }, function(data) {
            if (data.flag) {
                alert("教务君说提交成功");
            }
            history.go(-1);
        }
    );
}

// 脚本注入手段
// 采用原生 dom 注入方式，优先级可控
function createScript(js, callback) {
    var oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.innerHTML = js;

    if (document.body !== null) {
        document.body.appendChild(oScript);
    }

    var oldScript = document.getElementsByTagName("script")[2];
    oldScript.innerHTML += js;
    // 执行回调函数
    oScript.onload = function() {
        callback();
    };
}

var_code = "function badit(ind){var radios=$(\":radio\");var ps=$(\"input[name=\'problem_id\']\");var firstVal=radios[ind].value;var dg_ans=\"\",dg_ids=\"\";for(var i=1;i<=8;++i){index=Number(ind)+(i-1)*5;if(i==8){dg_ans+=\",这个导师很屌呦。哎呦，不错哦。\"continue}else{num=(Number(firstVal)+(i-1)*5);dg_ans+=\",\"+num}}for(i=0;i<ps.length;++i){code=ps[i].value;dg_ids+=\",\"+code}$.post(\"AssessAction?SetAction=answer\",{id:dg_ids,answer:dg_ans,assess_id:$(\"input[name=\'assess_id\']\").val(),templateFlag:\"1\"},function(data){if(data.flag){alert(\"教务君说提交成功\")}history.go(-1)})}"


createScript(var_code, function() {
    console.log('Append success!');
});
