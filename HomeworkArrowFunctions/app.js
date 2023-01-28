//Create 2 variables with arrow functions.

// First arrow function will accept two parameters, one for element and one for color. The function should change the given element text color with the color given from the second color parameter. If no parameter is passed for color, the default value is black.
// Second arrow function will accept two parameters, one for element and one for textSize. The function should change the given element text size to the number given from the second textSize parameter. If no parameter is passed for textSize, the default value is 24.
// Create an HTML document with two inputs, a button and an h1 header with some text. The first input should be for text size and the second for color. When the button is clicked the h1 header should change according to the input values ( change size as the first input value and color as the second input value ). Use the functions that we declared earlier and use arrow function for the event listener of the button.

// Ex:
// **Input1: ** Person enters 28 **Input2: ** Person enters red **Result: ** The h1 text should change to size 28 and color red
 


  let colorChangerArrowFunc = (element, color = 'Black') => {
    element.style.color = color;
  }
  
  
  let TextSizeChangerArrowFunc = (element, textSize = 24) => {
    element.style.fontSize = `${textSize}px`;
  }


  let changeBtn = document.getElementById('changeBtn');
  let textSizeVal = document.getElementById('textSize');
  let colorVal = document.getElementById('color');
  let header = document.getElementById('header');

changeBtn.addEventListener('click', () => {
  let textSize = textSizeVal.value;
  let color = colorVal.value;

  TextSizeChangerArrowFunc(header, textSize);
  colorChangerArrowFunc(header, color);
});



