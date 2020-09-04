// // Write a function to perform bubble sort.

// // The basic idea for bubble sort is that you want to iterate through
// // the entire array, looking at 2 elements, and swapping them if the left
// // one is greater than the right one. Basically, we're having each element
// // "bubble up" until the array is sorted.


// // [2, 5, 9, 10, 16, 18, 22]

// function bubbleSort(arr) {
//     // let sorted = false;
//     // while(!sorted){
//     //     sorted = true;
//     //     for(let i = 1; i < arr.length; i++) {
//     //         if(arr[i-1] > arr[i]){
//     //             let temp = arr[i-1];
//     //             arr[i-1] = arr[i];
//     //             arr[i] = temp;
//     //             sorted = false;
//     //         }
//     //     }
//     // }
//     let sorted;
//     do {
//         sorted = true;
//         for(let i = 1; i < arr.length; i++) {
//             if(arr[i-1] > arr[i]){
//                 let temp = arr[i-1];
//                 arr[i-1] = arr[i];
//                 arr[i] = temp;
//                 sorted = false;
//             }
//         }
//     }
//     while(!sorted)
//     return arr;
// }


// // Write a function to perform selection sort:
// // arr[] = [ 64, 25, 12, 22, 11 ]

// // Find the minimum element in arr[0...4]
// // and place it at beginning
// // 11 25 12 22 64

// // Find the minimum element in arr[1...4]
// // and place it at beginning of arr[1...4]
// // 11 12 25 22 64

// // Find the minimum element in arr[2...4]
// // and place it at beginning of arr[2...4]
// // 11 12 22 25 64

// // Find the minimum element in arr[3...4]
// // and place it at beginning of arr[3...4]
// // 11 12 22 25 64 

// function selectionSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         let min = i;
//         for(let j = i+1; j < arr.length; j++) {
//             if(arr[j] < arr[min]){
//                 min = j;
//             }
//         }
//         let temp = arr[min];
//         arr[min] = arr[i];
//         arr[i] = temp;
//     }
//     return arr;
// }


// // Write a function that performs an insertion sort.
// // The way insertion sort works is you loop through each index i 
// // and at each i, we should have arr[0] through arr[i-1] be sorted.
// // Then at i, we "insert" that element wherever it belongs in [0, ..., i-1].

// function insertionSort(arr) {
//     // First we want to loop through the entire array
//     for(let i = 1; i < arr.length; i++) {
//         // Starting at i, we want to swap the element to the left until it's in place.
//         let index = i;
//         // Until the element is in place or at the beginning of the array:
//         while(index > 0 && arr[index] < arr[index-1]) {
//             // Swap the element with the one to its left
//             let temp = arr[index];
//             arr[index] = arr[index-1];
//             arr[index-1] = temp;
//             // And decrement index so we can do it again!
//             index--;
//         }
//     }
//     return arr;
// }

// // Write a function that will merge 2 sorted arrays
// function mergeArrays(arr1, arr2) {
//     let mergedArr = [];
//     let index1 = 0;
//     let index2 = 0;
//     let current = 0;

//     while (current < (arr1.length + arr2.length)) {
//         let unmerged1 = arr1[index1];
//         let unmerged2 = arr2[index2];

//         if (index1 <= arr1.length && (index2 >= arr2.length || unmerged1 < unmerged2 )) {
//             mergedArr[current] = unmerged1;
//             index1++;
//         }

//         else {
//             mergedArr[current] = unmerged2;
//             index2++;
//         }

//         current++;
//     }
//     return mergedArr;
// }
    
// const arr1 = [3, 5, 6, 10, 11, 20];
// const arr2 = [1, 2, 7, 8, 15, 19];

// console.log(mergeArrays(arr1, arr2));


// // Write a function that will perform merge sort.
// function mergeSort(arr) {

//     if ( arr.length <= 1) {
//         return arr;
//     }

//     let middle = Math.floor(arr.length / 2);

//     let left = arr
// }





