//create a function that takes any number of arguments

let operations = (...args) => {
//have your function that test waht the index is 


}

// calculate function

function calculate(num1, operator, num2) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0) {
          return "Error: Division by zero!";
        }
        return num1 / num2;
      default:
        return "Invalid operator!";
    }
  }
  

  //remember to set for export