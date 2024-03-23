var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var prices1 = [1200, 1500, 1100];
var prices2 = [1400, 1300, 1800];
var combinedprices = __spreadArray(__spreadArray([], prices1, true), prices2, true).sort(function (a, b) { return a - b; });
console.log(combinedprices);
