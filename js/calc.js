const digits = document.querySelectorAll(".digit");
const actions = document.querySelectorAll(".action");
const equals = document.querySelector(".equals");
const value = document.getElementById("values");
const clear = document.querySelector(".clear");

let clicks = 0;
let digit1 = "";
let digit2 = "";
let operandClick = 0;
let operand = "";

let exp = "";
let exp2 = "";

/* for loop to add a click event 
  listeners on each digit
*/
for (let i = 0; i < digits.length; i++) {
  digits[i].addEventListener("click", (e) => {
    if (operandClick === 0) {
      digit1 += digits[i].textContent;
      exp = digit1;
      value.innerHTML = exp;
      clicks++;
    } else if (operandClick === 1) {
      digit2 += digits[i].textContent;
      exp2 = digit2;
      value.innerHTML = exp + exp2;
    }
  });
}

/* for loop to add a click event 
  listeners on each operand
*/
for (let x = 0; x < actions.length; x++) {
  actions[x].addEventListener("click", (e) => {
    if (clicks) {
      let key = e.target;
      let action = key.dataset.action;
      operand = action;
      operandClick = 1;
      exp += actions[x].textContent;
      value.innerHTML = exp;
      console.log(operandClick);
    }
  });
}

/* switch statement that checks the 
  operator case
*/
const calculateNumbers = (num1, operator, num2) => {
  let total = 0;
  switch (operator) {
    case "add":
      total = num1 + num2;
      value.innerHTML = total;
      break;
    case "subtract":
      console.log(num1 - num2);
      total = num1 - num2;
      value.innerHTML = total;
      break;
    case "multiply":
      console.log(num1 * num2);
      total = num1 * num2;
      value.innerHTML = total;
      break;
    case "divide":
      console.log(num1 / num2);
      total = num1 / num2;
      value.innerHTML = total;
      break;
    default:
      break;
  }
};

/* event listener on the equals operand 
  which runs the calculateNumbers funtion
*/
equals.addEventListener("click", () => {
  calculateNumbers(parseInt(digit1), operand, parseInt(digit2));
});

// reset event lister on the clear operand
clear.addEventListener("click", () => {
  clicks = 0;
  digit1 = "";
  digit2 = "";
  operandClick = 0;
  operand = "";
  exp = "";
  exp2 = "";
  value.textContent = "";
});
