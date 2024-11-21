
const numbersBtn = document.querySelectorAll('.grid buttom .number')


numbersBtn.forEach(element => {
    numbersBtn.addEventListener('click', function() {
      console.log('Element clicked!');
    });
  });



//when operator downclicks triggers operations()



let operator;


// let operations = (val) => {
// //have your function that test waht the index is 
// let num1 = null;

// let num2 = null;

// if(num1 === null){
// num1 = val
// }else{
//     num2 = val
// }

// if(num1 !== 0 && num2 !== 0){
//     calculate(num1, operator, num2)
// }

// }

// // calculate function

// function calculate(num1, operator, num2) {
//     switch (operator) {
//       case "+":
//         return num1 + num2;
//       case "-":
//         return num1 - num2;
//       case "*":
//         return num1 * num2;
//       case "/":
//         if (num2 === 0) {
//           return "Error: Division by zero!";
//         }
//         return num1 / num2;
//       default:
//         return "Invalid operator!";
//     }
//   }
  

//   //remember to set for export
// module.exports{}