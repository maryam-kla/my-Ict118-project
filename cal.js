let currentOperand = "0"
let previousOperand = ""
let operation = undefined
let shouldResetScreen = false

const currentOperandElement = document.getElementById("current-operand")
const previousOperandElement = document.getElementById("previous-operand")

function updateDisplay() {
  currentOperandElement.textContent = currentOperand

  if (operation != null) {
    previousOperandElement.textContent = `${previousOperand} ${operation}`
  } else {
    previousOperandElement.textContent = previousOperand
  }
}

function appendNumber(number) {
  if (shouldResetScreen) {
    currentOperand = ""
    shouldResetScreen = false
  }

  // Prevent multiple decimal points
  if (number === "." && currentOperand.includes(".")) return

  // Replace initial 0 unless it's a decimal point
  if (currentOperand === "0" && number !== ".") {
    currentOperand = number
  } else {
    currentOperand += number
  }

  updateDisplay()
}

function appendOperator(operator) {
  if (currentOperand === "") return

  if (previousOperand !== "") {
    compute()
  }

  operation = operator
  previousOperand = currentOperand
  currentOperand = ""
  updateDisplay()
}

function compute() {
  let computation
  const prev = Number.parseFloat(previousOperand)
  const current = Number.parseFloat(currentOperand)

  if (isNaN(prev) || isNaN(current)) return

  switch (operation) {
    case "+":
      computation = prev + current
      break
    case "-":
      computation = prev - current
      break
    case "×":
      computation = prev * current
      break
    case "÷":
      if (current === 0) {
        alert("Cannot divide by zero!")
        clearDisplay()
        return
      }
      computation = prev / current
      break
    default:
      return
  }

  currentOperand = computation.toString()
  operation = undefined
  previousOperand = ""
  shouldResetScreen = true
  updateDisplay()
}

function clearDisplay() {
  currentOperand = "0"
  previousOperand = ""
  operation = undefined
  updateDisplay()
}

function deleteNumber() {
  if (currentOperand.length === 1 || (currentOperand.length === 2 && currentOperand.startsWith("-"))) {
    currentOperand = "0"
  } else {
    currentOperand = currentOperand.slice(0, -1)
  }
  updateDisplay()
}

// Initialize display
updateDisplay()
