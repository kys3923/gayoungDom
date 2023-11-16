let clearButton = document.getElementById('clear')
let secondHand = document.getElementById('second')
let minuteHand = document.getElementById('minute')
let hourHand = document.getElementById('hour')

// document.addEventListener('DOMContentLoaded', () => {

//   const setAngle = (type, num) => {
//     // 구분을 지어야함 
//     // 원하는게 뭐인지 알아야함
//     let tempAngle 

//     if(type === 'sec') {
//       tempAngle = num * 6
//       return tempAngle
//     }
//     if(type === 'min') {
//       tempAngle = num * 6
//       return tempAngle
//     }
//     if(type === 'hour') {
//       tempAngle = num * 30
//       return tempAngle
//     }
//   }

//   let interval = setInterval(() => {
//     let now = new Date()
//     let nowSecond = now.getSeconds()
//     let nowMinute = now.getMinutes()
//     let nowHour = now.getHours()

//     secondHand.style.transform = `rotate(${setAngle('sec', nowSecond)}deg)`
//     minuteHand.style.transform = `rotate(${setAngle('min', nowMinute)}deg)`
//     hourHand.style.transform = `rotate(${setAngle('hour', nowHour)}deg)`


//     console.log('loaded')
//   }, 1000)
  
//   clearButton.addEventListener('click', () => {
//     clearInterval(interval)
//   })

//   // 분침, 시침, 초침 각도가 나와야함
//   // 이것을 1초마다 돌려버림됨
// })



document.addEventListener('DOMContentLoaded', () => {
  // 1. 1초마다 콘솔을 출력함

  const changeCSS = (시간, 시계바늘종류) => {
    // 시계바늘종류따라
    // 시간을 받아서 각도를 계산하고
    // 그 계산값을 리턴을 해주면 됨
  }

  let interval = setInterval(() => {
    console.log('yay')
  }, 500)

  clearButton.addEventListener('click', () => {

    clearButton.style.backgroundColor = 'blue'
    clearButton.style.color = 'white'
    clearButton.style.border = 'none'
    clearButton.style.transform = `rotate(${changeCSS()}deg)`

    clearInterval(interval)
  })


  // 1. interval 세팅
  // 2. CSS value change
  // 3. get time
  // 4. calculate angles 
})