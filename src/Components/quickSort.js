
// import { ReactComponent } from "*.svg";

// export function getQuickSortAnimations(array) {
//   const animations = [];
//   if (array.length <= 1) return array;
//   const auxiliaryArray = array.slice();
//   quickSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
//   return animations;
//   }

//   function quickSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
//     if (startIdx === endIdx) return;
//     const middleIdx = Math.floor((startIdx + endIdx) / 2);
//     quickSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
//     quickSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
//     doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
//     }

//   function doMerge(
//       mainArray,
//       startIdx,
//       middleIdx,
//       endIdx,
//       auxiliaryArray,
//       animations,
//       ) {
//       let k = startIdx;
//       let i = startIdx;
//       let j = middleIdx + 1;
//       while (i <= middleIdx && j <= endIdx) {


// let values = [];
// let w = 5;
// let states = [];

// function setup(){
//   createCanvas(windowWidth, windowHeight);
//   values = newArray (floor(width/ w));
//   for(let i = 0; i < values.length;I++){
//     values [i] = random(height);
//     states[i] = -1;
//   }
//   quickSort(values, 0, values.length -1);
// }   


// async function quickSort(mainArray, startIdx, endIdx) {
// 	if (start>= end) { 
//     return; 
//   } 
//   let index = await partition(mainArray, startIdx, endIdx);
//   states[index] = -1;

//   await Promise.all([
//     quickSort (mainArray, start, index-1),
//     quickSort(mainArray, index + 1, endIdx)
//   ]);
// }


// async function partition(mainArray, startIdx, endIdx){

//   for (let i = startIdx; i < endIdx;i++) {
//     states[i] = 1;
//   }

//   let pivotValue = mainArray[endIdx];
//   let pivotIndex = startIdx;
//   states[pivotIndex] = 0;
//   for(let i = startIdx; i < endIdx; i++) {
//     if (mainArray[i] < pivotValue){
//       await swap(mainArr, i, pivotIndex);
//       states[pivotIndex] = -1;
//       pivotIndex++;
//       states[pivotIndex] = 0;
//     }
//   } 
//   await swap(mainArray, pivotIndex, endIdx);

//   for (let i = startIdx; i < endIdx;i++) {
//     if (i != pivotIndex){
//     states[i] = 1;
//     }
//   }
//   return pivotIndex;
// }

// function draw() {
//   background(51);

//   for (let i=0;i<values.length; i++) {
//     noStroke();
//     if (states[i] == 0) {
//       fill ('#E0777D');
//     } 
//       else if (states[i] == 1) {
//         fill ('#D6FFB7');
//       } 
//       else {
//       fill(255);
//       }
//     rect(i * w, height - values[i], w, values[i]);
//   }
// }

//   async function Swap(mainArray, a, b) {
//     await sleep(50);
//     let temp = arr[a];
//     arr[a]= arr[b];
//     arr[b] = temp;
//   }

//   function sleep(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }


// 		var left = [];
// 		var right = [];
// 		var newArray = [];
// 		var pivot = mainArray.pop();
// 		var length = mainArray.length;

// 		for (var i = 0; i < length; i++) {
// 			if (mainArray[i] <= pivot) {
// 				left.push(mainArray[i]);
// 			} else {
// 				right.push(mainArray[i]);
// 			}
// 		}

// 		return newArray.concat(quickSort(left), pivot, quickSort(right));


// var myArray = [3, 0, 2, 5, -1, 4, 1 ];

// console.log("Original array: " + myArray);
// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);


//an example from from James Gosling that was created to become animated.:
// class QSortAlgorithm extends SortAlgorithm {
//   void sort(int a[], int lo0, int hi0) throws Exception {
// int lo = lo0;
// int hi = hi0;
// pause(lo, hi);
// if (lo >= hi) {
//     return;
// }
// int mid = a[(lo + hi) / 2];
// while (lo < hi) {
//     while (lo<hi && a[lo] < mid) {
//   lo++;
//     }
//     while (lo<hi && a[hi] > mid) {
//   hi--;
//     }
//     if (lo < hi) {
//   int T = a[lo];
//   a[lo] = a[hi];
//   a[hi] = T;
//   pause();
//     }
// }
// if (hi < lo) {
//     int T = hi;
//     hi = lo;
//     lo = T;
// }
// sort(a, lo0, lo);
// sort(a, lo == lo0 ? lo+1 : lo, hi0);
//   }

//   void sort(int a[]) throws Exception {
// sort(a, 0, a.length-1);
// pause(-1,-1);
//   }
// }