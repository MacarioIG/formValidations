const inputs = document.querySelectorAll('input')
const spans = document.querySelectorAll('span')
const button = document.getElementById('send-button')
const form = document.getElementById('form')


//inputs 

const nameInput = document.getElementById('name-input')
const sernameInput = document.getElementById('sername-input')
const emailInput = document.getElementById('email-input')
const dateInput = document.getElementById('date-input')
const textInput = document.getElementById('text-input')

//spans 

const nameSpan = document.getElementById('name-span')
const sernameSpan = document.getElementById('sername-span')
const emailSpan = document.getElementById('email-span')
const dateSpan = document.getElementById('date-span')
const textSpan = document.getElementById('text-span')


//caputuro el evento submit del botton





document.addEventListener('DOMContentLoaded', () => {

    form.addEventListener('submit', formValidation)

})



const formValidation = (event) => {

    event.preventDefault();

    console.log(typeof nameInput.value)


    switch (nameInput.value){
        
        case "": 

            nameSpan.style.display = 'block'
            break
        

    }

  /*   form.submit() */
    
}

