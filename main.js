//
// function go(){
//     var ps = $("input[name='problem_id']");
//     console.log(ps.length);
//     // The old code is $ ps != null
//     // Have you learned JavaScript ?
//     if (ps !== null && ps.length > 0) {
//         var f = true;
//         var ids = "", ans = "";
//         for (var i = 0; i < ps.length; ++ i) {
//             var id = $(ps[i]).val();
//             var answer = getInputVal(id);
//             if (answer === "" || answer === null || answer.length < 1) {
//                 alert("教务君说需要填写完整的信息，否则无法提交");
//                 $("[name='problem" + id + "']").focus();
//                 f = false;
//                 break;
//             } else {
//                 ids += ("," + id);
//                 ans += ("," + answer);
//             }
//         }
//         if (f === true) {
//             $.post("AssessAction?SetAction=answer",
//                 {
//                     id: ids,
//                     answer: ans,
//                     assess_id: $("input[name='assess_id']").val(),
//                     templateFlag: "0"
//                 },
//                 function() {
//                     if (data.flag) {
//                         alert("教务君说提交成功了！");
//                         window.location.href = "http://jiaowu.swjtu.edu.cn:80/servlet/AssessAction?SetAction=studentList";
//                     } else {
//                         alert(data.error);
//                     }
//             });
//             alert("test");
//         } else {
//             alert("教务君说无需提交，静待些时日再来吧");
//         }
//     }
// }

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

for (var i = 0; i < ps.length; ++ i) {
    code = ps[i].value;
    dg_ids += ',' + code;
}


$.post("AssessAction?SetAction=answer",
    {
        id: dg_ids,
        answer: dg_ans,
        assess_id: $("input[name='assess_id']").val(),
        templateFlag: "0"
    },
    function() {
        if (data.flag) {
            alert("教务君说提交成功了！");
        } else {
            alert(data.error);
        }
});
