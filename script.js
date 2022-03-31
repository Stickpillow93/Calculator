let inputEl = document.getElementById("input");
let allowed = false;

function number1() {
  inputEl.value += "1";
  allowed = true;
}

function number2() {
  inputEl.value += "2";
  allowed = true;
}

function number3() {
  inputEl.value += "3";
  allowed = true;
}

function number4() {
  inputEl.value += "4";
  allowed = true;
}

function number5() {
  inputEl.value += "5";
  allowed = true;
}

function number6() {
  inputEl.value += "6";
  allowed = true;
}

function number7() {
  inputEl.value += "7";
  allowed = true;
}

function number8() {
  inputEl.value += "8";
  allowed = true;
}

function number9() {
  inputEl.value += "9";
  allowed = true;
}

function number0() {
  inputEl.value += "0";
  allowed = true;
}

function addition() {
  inputEl.value += "+";
  allowed = true;
}

function subtract() {
  inputEl.value += "-";
  allowed = true;
}

function multiply() {
  inputEl.value += "*";
  allowed = true;
}

function divide() {
  inputEl.value += "/";
  allowed = true;
}

function del() {
  inputEl.value = inputEl.value.slice(0, -1);
}

function submit() {
  if (allowed == true) {
    try {
      inputEl.value = eval(inputEl.value);
    } catch (err) {
      alert("doing something wrong.");
    }
  } else {
    alert("what is up with the empty text");
  }
}

function refreshPage() {
  inputEl.value = "";
  allowed = false;
}
