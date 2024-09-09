const screenEl = document.getElementById("screen");
const buttonsEl = Array.from(document.getElementsByClassName("button"));

let lastValue = 0;

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "x": (a, b) => a * b,
  "/": (a, b) => a / b,
  "^": (a, b) => a ** b,
}

buttonsEl.forEach((button) => {
  button.addEventListener("click", (event)=>{
    if(screenEl.value === "0") {
      screenEl.value = "";
    }
    switch (event.target.id) {
      case "=":
        screenEl.value = calculate(screenEl.value);
        lastValue = screenEl.value;
        break;
      case "del":
        screenEl.value = screenEl.value.substring(0, screenEl.value.length-1);
        break;
      case "ac":
        screenEl.value = "0";
        break;
      case "ans":
        screenEl.value += lastValue;
        break;
      default:
        screenEl.value += event.target.id;
        break;
    }
  })
})

function calculate(str) {
  const regex = /(-?[0-9.]*)([+^x/-])(-?[0-9.]*)/;
  const result = str.replace(regex, (_match, num1, operator, num2) => operations[operator](parseFloat(num1), parseFloat(num2)));
  return result;
}
