let inputEl = document.getElementById("input");
let numbers = 0;
let noOfSymbols = 0;
let nextLine = 0;
let goodToGo = false;
let operator = 0;
let firstNoDone = 0;
let numberOfDel = 0;
let allowedTODel = 0;
let noOfChanges = 0;
let submitDone = 0;
let again = 0;
let againNum = 0;
let need = false;
let bruh = 0;
let backs = 0;
nextLine = 1;

function number1() {
  if (submitDone === 0) {
    if (numbers <= 10) {
      inputEl.textContent += 1;
      numbers++;
      firstNoDone = 1;
    }
    if (nextLine === 1) {
      firstNoDone = 0;
      numberOfDel = 0;
      inputEl.textContent = 1;
      nextLine = 0;
      goodToGo = true;
      allowedTODel = 0;
    }
  }
  if (againNum === 1) {
    if (numbers <= 10) {
      if (nextLine === 1) {
        inputEl.textContent = "";
        nextLine = 0;
        again = 0;
        numbers++;
      }
      if (nextLine === 0) {
        inputEl.textContent += 1;
        nextLine = 0;
        submitDone = 2;
        allowedTODel = 0;
        bruh = 1;
        again = 0;
        numbers++;
      }
    }

  }
}

function number2() {
  if (submitDone === 0) {
    if (numbers <= 10) {
      inputEl.textContent += 2;
      numbers++;
      firstNoDone = 1;
    }
    if (nextLine === 1) {
      inputEl.textContent = 2;
      nextLine = 0;
      goodToGo = true;
      allowedTODel = 0;
      firstNoDone = 0;
    }
  }
  if (againNum === 1) {
    if (numbers <= 10) {
      if (nextLine === 1) {
        inputEl.textContent = "";
        nextLine = 0;
        numbers++;
      }
      if (nextLine === 0) {
        inputEl.textContent += 2;
        nextLine = 0;
        submitDone = 2;
        allowedTODel = 0;
        bruh = 1;
        again = 0;
        numbers++;
      }
    }

  }
}

function number3() {
  if (submitDone === 0) {
    if (numbers <= 10) {
      inputEl.textContent += 3;
      numbers++;
      firstNoDone = 1;
    }
    if (nextLine === 1) {
      inputEl.textContent = 3;
      nextLine = 0;
      goodToGo = true;
      allowedTODel = 0;
      firstNoDone = 0;
    }
  }
  if (againNum === 1) {
    if (numbers <= 10) {
      if (nextLine === 1) {
        inputEl.textContent = "";
        nextLine = 0;
        again = 0;
        numbers++;
      }
      if (nextLine === 0) {
        inputEl.textContent += 3;
        nextLine = 0;
        submitDone = 2;
        allowedTODel = 0;
        bruh = 1;
        again = 0;
        numbers++;
      }
    }

  }
}

function addition() {
  if (firstNoDone === 1) {
    allowedTODel = 1;
    variable1 = Number(inputEl.textContent);
    inputEl.textContent = "+";
    noOfSymbols++;
    numbers = 0;
    nextLine = 1;
    goodToGo = false;
    operator = 1;
    if (noOfChanges === 0) {
      x = variable1;
      noOfChanges = 1;
    }
    if (noOfChanges >= 1) {
      variable1 = x;
    }
  }
  if (again === 1) {
    variable1 = finalAns;
    inputEl.textContent = "+";
    noOfSymbols = 0;
    numbers = 0;
    nextLine = 1;
    goodToGo = false;
    operator = 1;
    againNum = 1;
    console.log(variable1);
    againNum = 1;
    need = true;

    if (noOfChanges === 0) {
      x = variable1;
      noOfChanges = 1;
    }
    if (noOfChanges >= 1) {
      variable1 = x;
    }
  }
}

function subtract() {
  allowedTODel = 1;
  if (firstNoDone === 1) {
    variable1 = Number(inputEl.textContent);
    inputEl.textContent = "-";
    noOfSymbols++;
    numbers = 0;
    nextLine = 1;
    goodToGo = false;
    operator = 2;

    if (noOfChanges === 0) {
      x = variable1;

      noOfChanges = 1;
    }
    if (noOfChanges >= 1) {
      variable1 = x;
    }
  }
  if (again === 1) {
    variable1 = finalAns;
    inputEl.textContent = "-";
    noOfSymbols = 0;
    numbers = 0;
    nextLine = 1;
    goodToGo = false;
    operator = 2;
    againNum = 1;
    console.log(variable1);
    againNum = 1;
    need = true;

    if (noOfChanges === 0) {
      x = variable1;
      noOfChanges = 1;
    }
    if (noOfChanges >= 1) {
      variable1 = x;
    }
  }
}

function multiply() {
  allowedTODel = 1;
  if (firstNoDone === 1) {
    variable1 = Number(inputEl.textContent);
    inputEl.textContent = "*";
    noOfSymbols++;
    numbers = 0;
    nextLine = 1;
    goodToGo = false;
    operator = 3;

    if (noOfChanges === 0) {
      x = variable1;

      noOfChanges = 1;
    }
    if (noOfChanges >= 1) {
      variable1 = x;
    }
  }
  if (again === 1) {
    variable1 = finalAns;
    inputEl.textContent = "*";
    noOfSymbols = 0;
    numbers = 0;
    nextLine = 1;
    goodToGo = false;
    operator = 3;
    againNum = 1;
    console.log(variable1);
    againNum = 1;
    need = true;

    if (noOfChanges === 0) {
      x = variable1;
      noOfChanges = 1;
    }
    if (noOfChanges >= 1) {
      variable1 = x;
    }
  }
}

function divide() {
  allowedTODel = 1;
  if (firstNoDone === 1) {
    variable1 = Number(inputEl.textContent);
    inputEl.textContent = "/";
    noOfSymbols++;
    numbers = 0;
    nextLine = 1;
    goodToGo = false;
    operator = 4;
    if (noOfChanges === 0) {
      x = variable1;
      noOfChanges = 1;
    }
    if (noOfChanges >= 1) {
      variable1 = x;
    }
  }
  if (again === 1) {
    variable1 = finalAns;
    inputEl.textContent = "/";
    noOfSymbols = 0;
    numbers = 0;
    nextLine = 1;
    goodToGo = false;
    operator = 4;
    againNum = 1;
    console.log(variable1);
    againNum = 1;
    need = true;

    if (noOfChanges === 0) {
      x = variable1;
      noOfChanges = 1;
    }
    if (noOfChanges >= 1) {
      variable1 = x;
    }
  }
}

function del() {
  if (submitDone === 0) {
    if (allowedTODel === 0) {
      inputEl.textContent = inputEl.textContent.slice(0, -1);
      numbers--
    }
  }
  if (submitDone === 2) {
    if (allowedTODel === 0) {
      inputEl.textContent = inputEl.textContent.slice(0, -1);
      numbers--
    }
  }
}

function number4() {
  if (submitDone === 0) {
    if (numbers <= 10) {
      inputEl.textContent += 4;
      numbers++;
      firstNoDone = 1;
    }
    if (nextLine === 1) {
      inputEl.textContent = 4;
      nextLine = 0;
      goodToGo = true;
      allowedTODel = 0;
      firstNoDone = 0;
    }
  }
  if (againNum === 1) {
    if (numbers <= 10) {
      if (nextLine === 1) {
        inputEl.textContent = "";
        nextLine = 0;
        again = 0;
        numbers++;
      }
      if (nextLine === 0) {
        inputEl.textContent += 4;
        nextLine = 0;
        submitDone = 2;
        allowedTODel = 0;
        bruh = 1;
        again = 0;
        numbers++;
      }
    }

  }
}

function number5() {
  if (submitDone === 0) {
    if (numbers <= 10) {
      inputEl.textContent += 5;
      numbers++;
      firstNoDone = 1;
    }
    if (nextLine === 1) {
      inputEl.textContent = 5;
      nextLine = 0;
      goodToGo = true;
      allowedTODel = 0;
      firstNoDone = 0;
    }
  }
  if (againNum === 1) {
    if (numbers <= 10) {
      if (nextLine === 1) {
        inputEl.textContent = "";
        nextLine = 0;
        again = 0;
      }
      if (nextLine === 0) {
        inputEl.textContent += 5;
        nextLine = 0;
        submitDone = 2;
        allowedTODel = 0;
        bruh = 1;
        again = 0;
      }
    }

  }
}

function number6() {
  if (submitDone === 0) {
    if (numbers <= 10) {
      inputEl.textContent += 6;
      numbers++;
      firstNoDone = 1;
    }
    if (nextLine === 1) {
      inputEl.textContent = 6;
      nextLine = 0;
      goodToGo = true;
      allowedTODel = 0;
      firstNoDone = 0;
    }
  }
  if (againNum === 1) {
    if (nextLine === 1) {
      inputEl.textContent = "";
      nextLine = 0;
      again = 0;
    }
    if (nextLine === 0) {
      inputEl.textContent += 6;
      nextLine = 0;
      submitDone = 2;
      allowedTODel = 0;
      bruh = 1;
      again = 0;
    }
  }
}

function number7() {
  if (submitDone === 0) {
    if (numbers <= 10) {
      inputEl.textContent += 7;
      numbers++;
      firstNoDone = 1;
    }
    if (nextLine === 1) {
      inputEl.textContent = 7;
      nextLine = 0;
      goodToGo = true;
      allowedTODel = 0;
      firstNoDone = 0;
    }
  }
  if (againNum === 1) {
    if (numbers <= 10) {
      if (nextLine === 1) {
        inputEl.textContent = "";
        nextLine = 0;
        again = 0;
      }
      if (nextLine === 0) {
        inputEl.textContent += 7;
        nextLine = 0;
        submitDone = 2;
        allowedTODel = 0;
        bruh = 1;
        again = 0;
      }
    }

  }
}

function number8() {
  if (submitDone === 0) {
    if (numbers <= 10) {
      inputEl.textContent += 8;
      numbers++;
      firstNoDone = 1;
    }
    if (nextLine === 1) {
      inputEl.textContent = 8;
      nextLine = 0;
      goodToGo = true;
      allowedTODel = 0;
      firstNoDone = 0;
    }
  }
  if (againNum === 1) {
    if (numbers <= 10) {
      if (nextLine === 1) {
        inputEl.textContent = "";
        nextLine = 0;
        again = 0;
      }
      if (nextLine === 0) {
        inputEl.textContent += 8;
        nextLine = 0;
        submitDone = 2;
        allowedTODel = 0;
        bruh = 1;
        again = 0;
      }
    }

  }
}

function number9() {
  if (submitDone === 0) {
    if (numbers <= 10) {
      inputEl.textContent += 9;
      numbers++;
      firstNoDone = 1;
    }
    if (nextLine === 1) {
      inputEl.textContent = 9;
      nextLine = 0;
      goodToGo = true;
      allowedTODel = 0;
      firstNoDone = 0;
    }
  }
  if (againNum === 1) {
    if (numbers <= 10) {
      if (nextLine === 1) {
        inputEl.textContent = "";
        nextLine = 0;
        again = 0;
      }
      if (nextLine === 0) {
        inputEl.textContent += 9;
        nextLine = 0;
        submitDone = 2;
        allowedTODel = 0;
        bruh = 1;
        again = 0;
      }
    }

  }
}

function number0() {
  if (submitDone === 0) {
    if (numbers <= 10) {
      inputEl.textContent += 0;
      numbers++;
      firstNoDone = 1;
    }
    if (nextLine === 1) {
      inputEl.textContent = 0;
      nextLine = 0;
      goodToGo = true;
      allowedTODel = 0;
      firstNoDone = 0;
    }
  }
  if (againNum === 1) {
    if (numbers <= 10) {
      if (nextLine === 1) {
        inputEl.textContent = "";
        nextLine = 0;
        again = 0;
      }
      if (nextLine === 0) {
        inputEl.textContent += 0;
        nextLine = 0;
        submitDone = 2;
        allowedTODel = 0;
        bruh = 1;
        again = 0;
      }
    }

  }
}

function submit() {
  if (submitDone === 0) {
    if (goodToGo) {
      submitDone = 1;
      if (operator === 1) {
        variable2 = Number(inputEl.textContent);
        finalAns = variable1 + variable2;
        inputEl.textContent = finalAns;
        again = 1;
        noOfChanges = 0;
      }
      if (operator === 2) {
        variable2 = Number(inputEl.textContent);
        finalAns = variable1 - variable2;
        inputEl.textContent = Number(finalAns);
        again = 1;
      }
      if (operator === 3) {
        variable2 = Number(inputEl.textContent);
        finalAns = variable1 * variable2;
        inputEl.textContent = Number(finalAns);
        again = 1;
      }
      if (operator === 4) {
        variable2 = Number(inputEl.textContent);
        finalAns = variable1 / variable2;
        inputEl.textContent = Number(finalAns);
        again = 1;
      }
    }
  }
  if (submitDone === 2) {
    if (inputEl.textContent.length > 0) {
      if (operator === 1) {
        variable2 = Number(inputEl.textContent);
        finalAns = variable1 + variable2;
        inputEl.textContent = Number(finalAns);
        submitDone = 1;
        again = 1;
        noOfChanges = 0;
        againNum = 0;
        again = 1;
      }
      if (operator === 2) {
        variable2 = Number(inputEl.textContent);
        finalAns = variable1 - variable2;
        inputEl.textContent = Number(finalAns);
        submitDone = 1;
        again = 1;
        noOfChanges = 0;
        againNum = 0;
        again = 1;
      }
      if (operator === 3) {
        variable2 = Number(inputEl.textContent);
        finalAns = variable1 * variable2;
        inputEl.textContent = Number(finalAns);
        submitDone = 1;
        again = 1;
        noOfChanges = 0;
        againNum = 0;
        again = 1;
      }
      if (operator === 4) {
        variable2 = Number(inputEl.textContent);
        finalAns = variable1 / variable2;
        inputEl.textContent = Number(finalAns);
        submitDone = 1;
        again = 1;
        noOfChanges = 0;
        againNum = 0;
        again = 1;
      }
    }
  }
}

function refreshPage() {
  window.location.reload();
}
