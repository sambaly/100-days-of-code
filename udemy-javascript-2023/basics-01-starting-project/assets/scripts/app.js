const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return +userInput.value;
}

function createAndWriteOutput(operator, resultBefore, calcNumber) {
    const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult,
    };
    logEntries.push(logEntry);
    console.log("logEntries ==> ", logEntries);
}

function calculate(operation) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;

    let mathOperator;

    if (
        operation !== "ADD" &&
        operation !== "SUBTRACT" &&
        operation !== "MULTIPLY" &&
        operation !== "DIVIDE" ||
        !enteredNumber
    ) {
        return;
    }

    if (operation === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = "+";
    } else if (operation === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = "-";
    } else if (operation === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = "*";
    } else {
        currentResult /= enteredNumber;
        mathOperator = "/";
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", calculate.bind(this, 'ADD'));
subtractBtn.addEventListener("click", calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener("click", calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener("click", calculate.bind(this, 'DIVIDE'));
