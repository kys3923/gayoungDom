
// eventLister

document.addEventListener('DOMContentLoaded', (e) => {
  console.log('yay1')
  
  let button1 = document.getElementById("submit")
  let name = document.getElementById('name')

  button1.addEventListener('click', (e) => {
    e.preventDefault(); //refresh를 방지함
    console.log(name.cehcked, 'button clicked')
  })

})

// id => document.getElementByID('asdfasdf')
// class => document.getElentByClassName('asdfasdf')
// query => document.querySelector('aadsf')
// query => document.querySelectorAll('p')