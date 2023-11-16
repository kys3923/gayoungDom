// console.log('yay')

let counterNum = document.getElementById('counterNumber')
let subtract = document.getElementById('minus')
let clear = document.getElementById('clear')
let add = document.getElementById('plus')

document.addEventListener('DOMContentLoaded', () => {

  let Num = 0
  counterNum.innerHTML = Num

  const clickNum = (type) => {
    if(type === 'sub') {
      Num -= 1 //1
      counterNum.innerHTML = Num
    }
    if(type === 'zero') {
      Num = 0 //1
      counterNum.innerHTML = Num
    }
    if(type === 'add') {
      Num += 1 //1
      counterNum.innerHTML = Num
    }
  }
  
  subtract.addEventListener('click', (e) => {
    // console.log('sub clicked')
    clickNum('sub')
  })
  clear.addEventListener('click', (e) => {
    // console.log('clear clicked')
    clickNum('zero')
  })
  add.addEventListener('click', (e) => {
    // console.log('add clicked')
    clickNum('add')
  })
})