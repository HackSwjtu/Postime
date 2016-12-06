
function go(){
    var ps = $("input[name='problem_id']");
    console.log(ps.length);
    // The old code is $ ps != null
    // Have you learned JavaScript ?
    if (ps !== null && ps.length > 0) {
        var f = true;
        var ids = "", ans = "";
        for (var i = 0; i < ps.length; ++ i) {
            var id = $(ps[i]).val();
            var answer = getInputVal(id);
            
            console.log(id);

        }
    }
}
