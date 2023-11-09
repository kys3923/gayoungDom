let clearButton = document.getElementById('clear')
let secondHand = document.getElementById('second')

document.addEventListener('DOMContentLoaded', () => {
  let angle = "6deg"
  let secondAngle = 6
  let interval = setInterval(() => {
    secondAngle += 6
    secondHand.style.transform = `rotate(${secondAngle}deg)`
    console.log('loaded')
  }, 1000)
  
  clearButton.addEventListener('click', () => {
    clearInterval(interval)
  })

  let now = new Date()
  let nowSecond = now.getSeconds()
  let nowMinute = now.getMinutes()
  let nowHour = now.getHours()
  console.log(nowSecond, nowMinute, nowHour)
})