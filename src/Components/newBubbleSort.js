import React, { Component } from 'react'

export default class newBubbleSort extends Component {
    
    canvas = html`
    <svg width=800 height=${canvasHeight} style='background: #f7f7f9'>
    ${sorting.map((item, i) => `<rect fill=rgb(0,0,${item}) x=${i * 15 + 30} y=${canvasHeight - item} width=10 height=${item} />`)}

    </svg>`
    
    
    function *bubbleSort(array) {
        let swaps;
        do {
          swaps = false;
          for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
              let temp = array[i + 1];
              array[i + 1] = array[i];
              array[i] = temp;
              swaps = true;
              yield Promises.delay(20, array);
            }
          }
        } while (swaps);
        
        yield array;
      };
    
    
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
