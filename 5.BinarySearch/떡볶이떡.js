{
    var a = 4;
    var b = 6;
    var arr = [19, 15, 10, 17];
    var riceCake = function (a, b, arr) {
        console.log("workd");
        var start = 0;
        var end = Math.max.apply(null, arr);
        var result = 1;
        var total = 0;
        var mid = start + end;
        while (start <= end) {
            arr.forEach(function (el) {
                if (el > mid) {
                    total += el - mid;
                }
            });
            if (total < b) {
                end = mid - 1;
            }
            else {
                result = mid;
                start = mid + 1;
            }
        }
        return result;
    };
    var theResult = riceCake(a, b, arr);
    console.log(theResult);
}
