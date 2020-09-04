//In this one, I want to divide the array into two separate arrays and then four and so forth to make it clear that is what is happening...
//Then I want to step them back together animating with each addition.


function merge(a, lo, m, hi) {
    var tmp = [];
    var len = m - lo;
    var i, j, k;
    // save left subarray
    for (i = 0; i < len; i++) {
        // animate this move
        tmp[i] = a[lo + i];
    }
    // merge subarrays
    i = 0;
    j = m;
    k = lo;
    while (i < len && j < hi) {
        if (tmp[i] <= a[j]) {
            // animate this move
            a[k++] = tmp[i++];
        } else {
            // animate this move
            a[k++] = a[j++];
        }
    }
    // copy the remaining elements
    while (i < len) {
        // animate this move
        a[k++] = tmp[i++];
    }
}

function mergesort(a, lo, hi) {
    if (hi - lo > 1) {
        var m = lo + ((hi - lo) >> 1);
        mergesort(a, lo, m);
        mergesort(a, m, hi);
        merge(a, lo, m, hi);
    }
}