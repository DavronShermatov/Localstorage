'use strict'

const email = document.querySelector('.email'),
      fristName = document.querySelector('.name'),
      formSubmit = document.querySelector('form'),
      doc = document.querySelector('.doc')
      

// //set item b

// localStorage.setItem('name', 'Davron')


// //get item
// const name = localStorage.getItem('name')


// //remove & clear
// remove.addEventListener('click', ()=>{
//   localStorage.removeItem('name')
// })

// doc.textContent = `${name}`

formSubmit.addEventListener('submit', (e)=>{
  e.preventDefault()

  const user = {
    email : email.value,
    name : fristName.value
  }
  e.target.reset()
  localStorage.setItem('user', JSON.stringify(user))
})

const user = JSON.parse(localStorage.getItem('user'))

doc.textContent = `${user.name}`