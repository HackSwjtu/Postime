/**
 * Created by wz on 17-2-24.
 */

function mat_mul(a, b) {
    var r1 = a.length;
    var c1 = a[0].length;
    var c2 = b[0].length;
    var ret = Array();
    for (var i = 0; i < r1; i++) {
        ret[i] = Array();
        for (var j = 0; j < c2; j++) {
            ret[i][j] = 0.0;
        }
    }
    for (var i = 0; i < r1; i++) {
        for (var j = 0; j < c2; j++) {
            for (var t = 0; t < c1; t++) {
                ret[i][j] += a[i][t] * b[t][j];
            }
        }
    }
    return ret;
}

function mat_add(a, b) {
    var ret = Array();
    for (var i = 0; i < b.length; i++) {
        ret[i] = new Array();
        ret[i][0] = a[i][0] + b[i][0];
    }
    return ret;
}

function argmin(a, b, c) {
    var minn = 1000000;
    var index;
    for (var i = b; i < c; i++) {
        if (a[i] < minn) {
            minn = a[i];
            index = i;
        }
    }
    return index - b;
}

function argmax(a, b, c) {
    var maxx = -1.0;
    var index;
    for (var i = b; i < c; i++) {
        if (Number(a[i]) > maxx) {
            maxx = Number(a[i]);
            index = i;
        }
    }
    return index - b;
}

function argsum(a, b, c) {
    var ret = 0;
    for (var i = b; i < c; i++) {
        ret += a[i];
    }
    return ret;
}