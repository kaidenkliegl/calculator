//my buttons------------------------------------------------
const gridBtns = document.querySelectorAll(".btns");
const numbersBtn = document.querySelectorAll(".number");
const displayBar = document.getElementById("textForm");
const clearBtn = document.getElementById("data-all-clear");
const deleteBtn = document.querySelector(".delete");
const operatorBtn = document.querySelectorAll(".data-operation");
const equalBtn = document.getElementById("data-equals");
const powerButton = document.querySelector(".powerButton");
//-------------------------Variables-----------------------------------------
let resetToNothing = displayBar.innerHTML;
let usedValue1 = null;
let value = undefined;
let operator;
let value2 = undefined;

//number Input----------------------------------------------

numbersBtn.forEach((element) => {
  element.addEventListener("click", function () {
    if (!usedValue1) {
      if (value === undefined || 0) {
        value = element.innerText.toString();
        displayBar.innerHTML = value;
      } else {
        value += element.innerText.toString();
        displayBar.innerHTML = value;
      }
    } else {
      if (value2 === undefined || 0) {
        value2 = element.innerText.toString();
        displayBar.innerHTML = value2;
      } else {
        value2 += element.innerText.toString();
        displayBar.innerHTML = value2;
      }
    }
  });
});
//-------------------------------------------------------------

//reset on the clear Btn----------------------------------------

clearBtn.addEventListener("click", () => {
  displayBar.innerHTML = resetToNothing;
  value = resetToNothing;
  value2 = resetToNothing;
});
//-----------------------------------------------------------------

//delete button-----------------------------------------------------------------

deleteBtn.addEventListener("click", () => {
  newStr = displayBar.innerHTML.slice(0, displayBar.innerHTML.length - 1);
  console.log(newStr);
  value = newStr;
  displayBar.innerHTML = value;
});

// -----------------------------------------------------------------

//grab an operator-----------------------------------------------------------------

operatorBtn.forEach((element) => {
  element.addEventListener("click", function () {
    let symbol = element.innerHTML;
    operator = symbol;
    usedValue1 = 1;
  });
});

//activate the operation buttons and reset---------------------------------

equalBtn.addEventListener("click", () => {
  operator = operator.toString();
  let answer;
  switch (operator) {
    case "+":
      value = Number(value) + Number(value2);
      reset();
      break;
    case "-":
      value = Number(value) - Number(value2);
      reset();
      break;
    case "*":
      value = Number(value) * Number(value2);
      reset();
      break;
    case "÷":
      value = Number(value) / Number(value2);
      reset();
      break;
  }
});

function reset() {
  displayBar.innerHTML = value;
  // value = resetToNothing
  value2 = resetToNothing;
  usedValue1 = null;
}

// power button to turn the screen on---------------------------------------------
powerButton.addEventListener("click", function () {
  if (displayBar.style.background === "white") {
    displayBar.style.background = "rgb(219, 216, 216)";
    displayBar.style.boxShadow = "none";
  } else {
    displayBar.style.background = "white";
    displayBar.style.boxShadow = "0px 0px 10px 10px rgb(212, 225, 225)";
  }
  for (const element of gridBtns) {
    console.log(element.style.opacity);
    if (element.style.opacity == 0) {
      element.style.opacity = 1;
    } else {
      element.style.opacity = 0;
    }
  }
});
