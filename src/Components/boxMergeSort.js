{/* <h1 class="animate__animated animate__bounce">An animated element</h1> */}
//to use animations from animate you use the above syntax//
//UPDATE THIS TO BE THE CODE WE DID IN CLASS WITH CODY//
function mergeArrays(arr1, arr2) {
    let mergedArr = [];
    let index1 = 0;
    let index2 = 0;
    let current = 0;

    while (current < (arr1.length + arr2.length)) {
        //if current = arr1.length + arr2.length then make bottom boxes blink twice//
        let unmerged1 = arr1[index1];
        //light up or color change the index box being compared//
        let unmerged2 = arr2[index2];
        //light up or color change the index box being compared//

        if (index1 <= arr1.length && (index2 >= arr2.length || unmerged1 < unmerged2 )) {
            mergedArr[current] = unmerged1;
            index1++;
        }

        else {
            //annimate and color change the box being bounced/rolled into position at the botttom of the page//
            mergedArr[current] = unmerged2;
            index2++;
        }

        current++;
    }
    return mergedArr;
}
    
const arr1 = [3, 5, 6, 10, 11, 20];
const arr2 = [1, 2, 7, 8, 15, 19];

console.log(mergeArrays(arr1, arr2));