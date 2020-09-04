import React from 'react';
import {getMergeSortAnimations} from '../Components/algorithms.js';
import {getQuickSortAnimations} from '../Components/quickSort.js';
import {getBubbleSortAnimations} from '../Components/bubbleSort.js';
import './Visualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// const speedHandler = (e) =>{
//     setSpeed(e.target.value);
// }

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 70;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'orange';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(4, 530));
        }
        this.setState({array});
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
        }       else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    quickSort() {
        const animations = getQuickSortAnimations(this.state.array);
        for(let i = 0; i <animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) { 
                
                


            }
        }
    }
    

    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        for(let i = 0; i <animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) { 
            }
        }
    }
    render() {
        const {array} = this.state;

        return (
            <div>
                <div className="array-container">

                {
                        array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{
                            backgroundColor: PRIMARY_COLOR,
                            height: `${value}px`,
                            }}>
                        </div> 
                        ))
                    }<br></br>
                    
                    <button class="button-b" onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button class="button-c" onClick={() => this.mergeSort()}>Quick Sort Hoare</button>
                    <button class="button-g" onClick={() => this.mergeSort()}>Quick Sort Lomuto</button>
                    <button class="button-d" onClick={() => this.heapSort()}>Heap Sort</button>
                    <button class="button-e" onClick={() => this.bubbleSort()}>Bubble Sort</button><br></br>
                    <button class="button-f" onClick={() => this.mergeSort()}>Insertion Sort</button>
                    <button class="button-k" onClick={() => this.mergeSort()}>Stair Climber</button>
                    <button class="button-a" onClick={() => this.resetArray()}>Palidrome Tricks</button>
                    <button class="button-h" onClick={() => this.resetArray()}>Random River</button><br></br>
                    <button class="button-i" style={{backgroundColor:"green"}} onClick={() => this.resetArray()}>Create New Array</button>                    
                </div>
                {/* <form>
                <div class="form-group">
                    <label for="formControlRange">Example Range input</label>
                    <input type="range" class="form-control-range" id="formControlRange">
                </div>
                </form> */}
            </div>
        );
    }
}

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    // function randomColor() {
    // return (Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
    // }
    
    function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
        return false;
        }
    }
    return true;
    }
