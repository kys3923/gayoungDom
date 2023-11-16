let form = document.getElementById('form')
let name = document.getElementById('name')
let age = document.getElementById('age')
let address = document.getElementById('address')
let phone = document.getElementById('phone')
let sex = document.getElementById('sex')
let etc = document.getElementById('etc')

const formFunction = (name, age, address, phone, sex, etc) => {

  let formJSON = {
    name: name,
    age: age,
    address: address,
    phone: phone,
    sex: sex,
    etc: etc
  }
  console.log('function is running', formJSON)
  // return formJSON
}

const validateFunction = (name, age, sex) => {
  let numberedAge = Number(age)

  // 이름이 비워지면 안됨
  if(name === '') {
    console.log('asdffdsafdsa')
    return 'nameError'
  }

  // 나이가 일정숫자 이상 15세
  if(numberedAge <= 14 || age === '') {
    console.log('ad')
    return 'ageError'
  }

  // 성별이 정해져야함
  if(sex === '') {
    return 'sexError'
  }

  return 'pass'
}

document.addEventListener('DOMContentLoaded', () => {
  
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let validate = validateFunction(name.value, age.value, sex.value)

    if(validate === 'pass') {
      formFunction(name.value, age.value, address.value, phone.value, sex.value, etc.value)
    }

    if (validate === 'nameError') {
      window.alert('please give us your name')
    }

    if (validate === 'ageError') {
      window.alert('age is 15 and up only')
    }

    if (validate === 'sexError') {
      window.alert('please select your gender')
    }

  })
})

//숙제 
// 계정을 만들때 쓰이는 등록 페이지를 만드시오
// 1. email
// 2. password
// 3. password confirm
// 4. 하고 싶은 정보를 아무거나 2개더 

// validate all information
// css 적용시키기