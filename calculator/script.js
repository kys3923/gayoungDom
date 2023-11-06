let inputtedNum1 = ''
let inputtedNum2 = ''
let selectedOperator
let isOperatorClicked = false
const currentDisplay = document.getElementById('displayCurrent')
const buttonStart = document.getElementById('start')
const resultDisplay = document.getElementById('result')

const numberInput = (number, boolean) => {
  if(!boolean) {
    inputtedNum1 = inputtedNum1 + number
    currentDisplay.innerHTML=inputtedNum1
    console.log('num1', isOperatorClicked)
  }
  
  if(boolean) {
    inputtedNum2 = inputtedNum2 + number
    currentDisplay.innerHTML=inputtedNum2
    console.log('num2', isOperatorClicked)
  }
}

const changeState = (string) => {
  selectedOperator = string
  isOperatorClicked = true
  currentDisplay.innerHTML = ''
}

const calculate = (num1, num2, operator) => {

  if(operator === 'plus') {
    let result = Number(num1) + Number(num2)
    currentDisplay.innerHTML = result
  }
  
  if(operator === 'minus') {
    let result = Number(num1) - Number(num2)
    currentDisplay.innerHTML = result
  }
}


document.addEventListener('DOMContentLoaded', () => {
  
  const buttonOne = document.getElementById('one').addEventListener('click', (e) => {
    e.preventDefault()
    numberInput('1', isOperatorClicked)
  })
  const buttonTwo = document.getElementById('two').addEventListener('click', (e) => {
    e.preventDefault()
    numberInput('2', isOperatorClicked)
  })
  const buttonThree = document.getElementById('three').addEventListener('click', (e) => {
    e.preventDefault()
    numberInput('3', isOperatorClicked)
  })
  const buttonFour = document.getElementById('four').addEventListener('click', (e) => {
    e.preventDefault()
    numberInput('4', isOperatorClicked)
  })
  const buttonFive = document.getElementById('five').addEventListener('click', (e) => {
    e.preventDefault()
    numberInput('5', isOperatorClicked)
  })
  const buttonSix = document.getElementById('six').addEventListener('click', (e) => {
    e.preventDefault()
    numberInput('6', isOperatorClicked)
  })
  const buttonSeven = document.getElementById('seven').addEventListener('click', (e) => {
    e.preventDefault()
    numberInput('7', isOperatorClicked)
  })
  const buttonEight = document.getElementById('eight').addEventListener('click', (e) => {
    e.preventDefault()
    numberInput('8', isOperatorClicked)
  })
  const buttonNine = document.getElementById('nine').addEventListener('click', (e) => {
    e.preventDefault()
    numberInput('9', isOperatorClicked)
  })
  const buttonZero = document.getElementById('zero').addEventListener('click', (e) => {
    e.preventDefault()
    numberInput('0', isOperatorClicked)
  })
  
  const buttonPlus = document.getElementById('plus').addEventListener('click', (e) => {
    e.preventDefault()
    changeState('plus')
  })
  const buttonMinus = document.getElementById('minus').addEventListener('click', (e) => {
    e.preventDefault()
    changeState('minus')
  })
  buttonStart.addEventListener('click', (e) => {
    e.preventDefault()

    calculate(inputtedNum1, inputtedNum2, selectedOperator)
  })
})

// 첫번째 숫자, operator, 두번째 숫자 , 계산

// 1. validation: 0 initial input validation, operator -> num1 이 없을때
// 2. validation: * /
// 3. validation: clear
// 4. style