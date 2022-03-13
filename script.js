let display = document.querySelector(".display");
let current = document.querySelector(".current");

document.addEventListener("input", e => {
    console.dir(e)
    console.dir(display)
})

let numbers = document.querySelectorAll(".num");

numbers.forEach(number => {
    number.addEventListener("click", e => {
        display.value += number.textContent
    })
})

let operators = document.querySelectorAll(".op");

let operands = []

operators.forEach(op => {
    op.addEventListener("click", e => {
        operands.push(display.valueAsNumber);
        operands.push(op.attributes["data-operator"].value);
        current.textContent = display.value + " " + op.textContent;
        display.value = ""
    })
})

let equal = document.querySelector(".equal");

equal.addEventListener("click", e => {
    operands.push(display.valueAsNumber);
    console.log(operands);
    display.value = eval(operands.join(""));
    current.textContent = ""
    operands = [];
})

let clear = document.querySelector(".clear")

clear.addEventListener("click", e => {
    display.value = ""
    current.textContent = ""
})

let decimal = document.querySelector(".decimal");

decimal.addEventListener("click", e => {
    
})