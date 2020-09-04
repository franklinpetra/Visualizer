// export function getBubbleSortAnimations(array){
//     const animations = [];
//     if (array.length <= 1) return array;
//     const auxiliaryArray = array.slice();
//     bubbleSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
//     return animations;
    
// }
//     function bubbleSortHelper(
//     mainArray,
//     startIdx,
//     endIdx,
//     auxiliaryArray,
//     animations,
//     ) {
//     if (startIdx === endIdx) return;
//     const middleIdx = Math.floor((startIdx + endIdx) / 2);
//     bubbleSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
//     bubbleSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
//     doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
//     }

//     function doMerge(
//         mainArray,
//         startIdx,
//         middleIdx,
//         endIdx,
//         auxiliaryArray,
//         animations,
//         ) {
//         let k = startIdx;
//         let i = startIdx;
//         let j = middleIdx + 1;
//         while (i <= middleIdx && j <= endIdx) {

//         // These are the values being Compared; we push them once
//         // to change their color.
//         animations.push([i, j]);
//         // These are the values that we're comparing; we push them a second
//         // time to revert their color.
//         animations.push([i, j]);
//         if (auxiliaryArray[i] <= auxiliaryArray[j]) {
//             // We overwrite the value at index k in the original array with the
//             // value at index i in the auxiliary array.
//             animations.push([k, auxiliaryArray[i]]);
//             mainArray[k++] = auxiliaryArray[i++];
//         }   
//             else {
//             // We overwrite the value at index k in the original array with the
//             // value at index j in the auxiliary array.
//             animations.push([k, auxiliaryArray[j]]);
//             mainArray[k++] = auxiliaryArray[j++];
//         }
//         }

//     while (i <= middleIdx) {
//     // These are the values that we're comparing; we push them once
//     // to change their color.
//     animations.push([i, i]);
//     // These are the values that we're comparing; we push them a second
//     // time to revert their color.
//     animations.push([i, i]);
//     // We overwrite the value at index k in the original array with the
//     // value at index i in the auxiliary array.
//     animations.push([k, auxiliaryArray[i]]);
//     mainArray[k++] = auxiliaryArray[i++];
//     }
//     while (j <= endIdx) {
//     // These are the values that being compared; we push them once
//     // to change their color.
//     animations.push([j, j]);
//     // These are the values that being compared; we push them a second
//     // time to revert their color.
//     animations.push([j, j]);
//     // We overwrite the value at index k in the original array with the
//     // value at index j in the auxiliary array.
//     animations.push([k, auxiliaryArray[j]]);
//     mainArray[k++] = auxiliaryArray[j++];
//     }

// }


// // bubbleSort(array) {
// //     const animations = [];
// //     let end = arr.length -1;
    
// //     if ( array.length <= 1) return array;
// //     const auxiliaryArray = swapped = false;
// //         for(let i=0, j=1; i < end; i++, j++){
// //             if (arr[i] > arr[j]){
// //             swapped = true;
// //             [arr[i], arr[j]] = [arr[j], arr[i]];
// //             }
// //         }
// //         end --;
// //     }
// //     do {
// //         bubbleSort(unsortedArr);
// //     } 
// //     while (swapped); 


// // from James Gosling who created it to be animated visually and uses a sortAlgorithm as the parent:
// // class BubbleSortAlgorithm extends SortAlgorithm {
// //     void sort(int a[]) throws Exception {
// // 	for (int i = a.length; --i>=0; )
// // 	    for (int j = 0; j<i; j++) {
// // 		if (stopRequested) {
// // 		    return;
// // 		}
// // 		if (a[j] > a[j+1]) {
// // 		    int T = a[j];
// // 		    a[j] = a[j+1];
// // 		    a[j+1] = T;
// // 		}
// // 		pause(i,j);
// // 	    }
// // 	pause(-1,-1);
// //     }
// // }