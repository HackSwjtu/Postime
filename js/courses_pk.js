function badit() {
    var ind = 4;
    var radios = $(':radio');
    var ps = $("input[name='problem_id']");
    var firstVal = radios[ind].value;
    var dg_ans = '', dg_ids = '';
    for (var i = 1; i <= 18; ++ i) {
        index = Number(ind) + (i - 1) * 5;
        console.log(radios[index]);
        if (i == 17) {
            dg_ans += ',老师真垃圾';
            continue;
        } else if (i == 18) {
            dg_ans += ',课程好无聊，什么都得改改';
            continue;
        } else {
            num = (Number(firstVal) + (i - 1) * 5);
            dg_ans += ',' + num;
        }
    }

    for (i = 0; i < ps.length; ++ i) {
        code = ps[i].value;
        dg_ids += ',' + code;
    }

    alert(dg_ids);
    alert(dg_ans);
    console.log(dg_ids);
    console.log(dg_ans);

    // $.post("AssessAction?SetAction=answer",
    //     {
    //         id: dg_ids,
    //         answer: dg_ans,
    //         assess_id: $("input[name='assess_id']").val(),
    //         templateFlag: "0"
    //     },
    //     function() {
    //         if (data.flag) {
    //             alert("教务君说提交成功了！");
    //         } else {
    //             alert(data.error);
    //         }
    // });
}

var inp = document.getElementsByTagName("input");
var xxx;

for (var i = 0; i < inp.length; ++ i){
    if (inp[i].value === "提交"){
        xxx = inp[i];
        break;
    }
}

xxx.innerHTML = "一键差评";
xxx.onclick = "badit()";
