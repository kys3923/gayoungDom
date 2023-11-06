const userInput = document.getElementById('textInput')
const userFar = document.getElementById('far')
const userCel = document.getElementById('cel')
const userButton = document.getElementById('button')
const resultDisplay = document.getElementById('result')

// userflow 
// a) 유저가 인풋을 한다
// b) 유저가 옵션을 고른다
// c) 유져가 버튼을 누른다

// JS flow
// 1) 버튼을 인식 한다
// 2) validate: 인풋이 있는지, 인풋이 계산가능한 숫자인지, 옵션이 골라져 있는지 // 나중에
// 3) 옵션을 확인해야함 
// 4) 옵션에 따라서 계산로직이 선택되어야 함
// 5) 결과값 도출

const optionSelect = (cel, far) => {
  if(cel) {
    return 'cel'
  }

  if(far) {
    return 'far'
  }
}

const calculator = (option, input) => {

  let result
  let enteredNum = input

  if(option === 'cel') {
    result = ((enteredNum * 9/5) + 32)
  }

  if(option === 'far') {
    result = ((enteredNum - 32) * 5/9)
  }

  return result
}

const display = (option, result) => {

  let shortenedNum = result.toFixed(3)
  if(option === 'cel') {
    return `${shortenedNum} F` 
  }

  if(option === 'far') {
    return `${shortenedNum} C`
  }
}

const optionValidate = (cel, far) => {
  if(!cel && !far) {
    return false
  }

  return true
}

document.addEventListener('DOMContentLoaded', () => {

  userButton.addEventListener('click', (e) => {
    e.preventDefault()

    //validate
    let validateCheck = optionValidate(userCel.checked, userFar.checked)

    if(!validateCheck) {
      return resultDisplay.innerHTML= 'Please select option'
    }
    
    let option = optionSelect(userCel.checked, userFar.checked)

    let calculatedNum = calculator(option, userInput.value)

    resultDisplay.innerHTML= display(option, calculatedNum)

  })
})