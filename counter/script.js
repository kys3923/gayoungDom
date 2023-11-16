// 1. display counter number
// 2. add eventlistner for buttons (-, clear, +)
// 3. when - is clicked, subtract of 1
// 4. when + is clicked, add of 1
// 5. when clear is clicked, reset to 0

let displayCounter = document.getElementById('counterNumber')
let minusButton = document.getElementById('minus')
let clearButton = document.getElementById('clear')
let plusButton = document.getElementById('plus')

let displayClockCounter = document.getElementById('clockCounter')
let startButton = document.getElementById('start')
let stopButton = document.getElementById('stop')
let oneButton = document.getElementById('oneButton')


document.addEventListener('DOMContentLoaded', () => {
  
  // 1.
  let counter = 0
  displayCounter.innerHTML = counter
  
  const display = (condition) => {
    let tempNum = counter
    if(condition === 'minus') {
      tempNum -= 1
      displayCounter.innerHTML = tempNum
    }
    if(condition === 'clear') {
      tempNum = 0
      displayCounter.innerHTML = tempNum
    }
    if(condition === 'plus') {
      tempNum += 1
      displayCounter.innerHTML = tempNum
    }
    return counter = tempNum
  }

  // 2.
  minusButton.addEventListener('click', (e) => {
    console.log('clicked minus button')
    display('minus')
  }) 
  clearButton.addEventListener('click', (e) => {
    console.log('clicked clear button')
    display('clear')
    
  }) 
  plusButton.addEventListener('click', (e) => {
    console.log('clicked plus button')
    display('plus')

  }) 

  let clockCounter = 0
  let interval
  displayClockCounter.innerHTML = clockCounter
  let isTicking = false
  
  startButton.addEventListener('click', (e) => {
    interval = setInterval(() => {
      clockCounter += 1
      displayClockCounter.innerHTML = clockCounter
      
    }, 1000)
  })
  
  stopButton.addEventListener('click', (e) => {
    clearInterval(interval)
  })
  
  oneButton.addEventListener('click', (e) => {
    e.preventDefault()
    if(isTicking) {
      clearInterval(interval)
      return isTicking = false
    }
    if(!isTicking) {
      interval = setInterval(() => {
        clockCounter += 1
        displayClockCounter.innerHTML = clockCounter
      }, 1000)
      return isTicking = true
    }
  })

  console.log(displayCounter, 'yay')
})