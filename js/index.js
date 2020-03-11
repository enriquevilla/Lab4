let logInfo = "";
let operation = [];
let index = 0;
document.getElementsByClassName("resetButton")[0].addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementsByClassName("inputNumber")[0].value = "";
    document.getElementById("resultValue").value = "";
    document.getElementsByClassName("inputNumber")[0].focus();
});
document.getElementsByClassName("equalButton")[0].addEventListener("click", (event) => {
    event.preventDefault();
    if (document.getElementsByClassName("inputNumber")[0].value != "") {
        operation[index] = Number(document.getElementsByClassName("inputNumber")[0].value);
        document.getElementsByClassName("inputNumber")[0].value = "";
        operation = operation.join(" ");
        logInfo = operation;
        logInfo += " = ";
        logInfo += eval(operation);
        document.getElementById("resultValue").value = eval(operation);
        document.getElementById("logInformation").value += `${logInfo}\n`
        index = 0;
        operation = [];
        document.getElementsByClassName("inputNumber")[0].focus();
    }
});
document.getElementById("addButton").addEventListener("click", (event) => {
    event.preventDefault();
    if (document.getElementsByClassName("inputNumber")[0].value != "") {
        operation[index++] = Number(document.getElementsByClassName("inputNumber")[0].value);
        operation[index++] = "+";
        document.getElementsByClassName("inputNumber")[0].value = "";
        document.getElementsByClassName("inputNumber")[0].focus();

    }
});
document.getElementById("substractButton").addEventListener("click", (event) => {
    event.preventDefault();
    if (document.getElementsByClassName("inputNumber")[0].value != "") {
        operation[index++] = Number(document.getElementsByClassName("inputNumber")[0].value);
        operation[index++] = "+";
        document.getElementsByClassName("inputNumber")[0].value = "";
        document.getElementsByClassName("inputNumber")[0].focus();
    }
});
document.getElementById("multiplicationButton").addEventListener("click", (event) => {
    event.preventDefault();
    if (document.getElementsByClassName("inputNumber")[0].value != "") {
        operation[index++] = Number(document.getElementsByClassName("inputNumber")[0].value);
        operation[index++] = "*";
        document.getElementsByClassName("inputNumber")[0].value = "";
        document.getElementsByClassName("inputNumber")[0].focus();
    }
});
document.getElementById("divisionButton").addEventListener("click", (event) => {
    event.preventDefault();
    if (document.getElementsByClassName("inputNumber")[0].value != "") {
        operation[index++] = Number(document.getElementsByClassName("inputNumber")[0].value);
        operation[index++] = "/";
        document.getElementsByClassName("inputNumber")[0].value = "";
        document.getElementsByClassName("inputNumber")[0].focus();
    }
});
