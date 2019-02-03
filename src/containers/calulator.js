import React from 'react'



class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayValue: '0',
            previousValue: null,
            operation: null,
            waitingForNewValue: false
        }
    }
addNumbers = (a , b) => {
return a + b;
}
subtractNumbers = (a, b) => {
return a - b;
}
multiplyNumbers = (a, b) => {
return a * b;
}
divideNumbers = (a, b) => {
return a / b; 
}
percentage = (num) => {
return num / 100;
}
clear = (num) => {
return '';
}
posAndNeg = (num) => {
return num;
}
}

// .button {
//     background-color: #E0E0E6;
//     font-size: 40px;
//     text-align: center;
//     color: #666666;
//     border-left: 1px solid #666666;
//     border-bottom: 1px solid #666666;
//     user-select: none;
//     cursor: pointer;
//     outline: none;
//     -webkit-tap-highlight-color: rgba(0,0,0,0);
//     display: block;
//   }

//   button:active {
//     box-shadow: inset 0px 0px 80px 0px rgba(0,0,0,0.25);
//   }

//   .orange {
//     background-color: #EE9B3E;
//     color: #fff;
//   }