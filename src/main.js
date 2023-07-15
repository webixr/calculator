// html element
let buttons = document.querySelectorAll("button");
let view = document.querySelector("#view");
let oldNum = document.querySelector("#oldNum");
let sign = document.querySelector("#sign");

// status || value
let firstValue = "",
  operation = "",
  secondValue = "";

buttons.forEach((e, ind) => {
  e.onclick = () => {
    if (e.value === "ac") {
      (firstValue = ""), (operation = ""), (secondValue = "");

      // view
      view.innerHTML = firstValue;
      sign.innerHTML = operation;
      oldNum.innerHTML = secondValue;

      // testing
      console.log(
        firstValue === "" ? "VALUE EMPTY =>" : "ERROR",
        operation === "" ? "VALUE EMPTY =>" : "ERROR",
        secondValue === "" ? "VALUE EMPTY =>" : "ERROR",
        "ac clicked"
      );
    } else if (e.value === "del") {
      if (firstValue !== "") {
        firstValue = firstValue.slice(0, firstValue.length - 1);

        // view => firstValue
        view.innerHTML = firstValue;

        // testing => firstValue
        console.log(firstValue, "del clicked");
      } else if (operation !== "") {
        operation = "";

        // view => operation
        sign.innerHTML = operation;

        // testing => operation
        console.log(operation, "del clicked");
      } else {
        secondValue = secondValue.slice(0, secondValue.length - 1);

        // view => secondValue
        oldNum.innerHTML = secondValue;

        // testing => secondValue
        console.log(secondValue, "del clicked");
      }
    } else if (e.value === "+" || e.value === "-" || e.value === "*" || e.value === "/") {
      if (firstValue !== "") {
        operation = e.value;
        secondValue = firstValue;
        firstValue = "";
        // view
        sign.innerHTML = operation;
        oldNum.innerHTML = secondValue;
        view.innerHTML = firstValue;

        // testing
        console.log(operation, secondValue, firstValue, "operation clicked");
      }
    } else if (e.value === "=") {
      if (operation === "+") {
        firstValue = parseFloat(secondValue) + parseFloat(firstValue)
        operation = ""
        secondValue = ""
        // view
        view.innerHTML = firstValue
        sign.innerHTML = operation
        oldNum.innerHTML = secondValue

        // testing
        console.log(firstValue, "calc clicked")
      } else if (operation === "-") {
        firstValue = parseFloat(secondValue) - parseFloat(firstValue)
        operation = ""
        secondValue = ""
        // view
        view.innerHTML = firstValue
        sign.innerHTML = operation
        oldNum.innerHTML = secondValue

        // testing
        console.log(firstValue, "calc clicked")
      } else if (operation === "*") {
        firstValue = parseFloat(secondValue) * parseFloat(firstValue)
        operation = ""
        secondValue = ""
        // view
        view.innerHTML = firstValue
        sign.innerHTML = operation
        oldNum.innerHTML = secondValue

        // testing
        console.log(firstValue, "calc clicked")
      } else if (operation === "/") {
        firstValue = parseFloat(secondValue) / parseFloat(firstValue)
        operation = ""
        secondValue = ""
        // view
        view.innerHTML = firstValue
        sign.innerHTML = operation
        oldNum.innerHTML = secondValue

        // testing
        console.log(firstValue, "calc clicked")
      }
    } else {
      firstValue += e.value;

      // view
      view.innerHTML = firstValue;

      // testing => firstValue
      console.log(firstValue, "number clicked");
    }
  };
});

/* 

 ======= STATUS =========
 = 1 === add first number =======
 = 2 === add sign =========
 = 3 === add second number =========
 = 4 === click calc =========


 ==== BACKSPACE =======
 ==== if status 1 is empty start in status 2 then 3 

*/
