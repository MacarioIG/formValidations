const inputs = document.querySelectorAll('input, textarea')
const spans = document.querySelectorAll('span')
const button = document.getElementById('send-button')
const form = document.getElementById('form')


//inputs 

const nameInput = document.getElementById('name-input')
const surnameInput = document.getElementById('surname-input')
const emailInput = document.getElementById('email-input')
const dateInput = document.getElementById('date-input')
const textInput = document.getElementById('text-input')

//spans 

const nameSpan = document.getElementById('name-span')
const surnameSpan = document.getElementById('surname-span')
const emailSpan = document.getElementById('email-span')
const dateSpan = document.getElementById('date-span')
const textSpan = document.getElementById('textarea-span')

//Expresiones regulares 

console.log(inputs)

const expressions = {

    nameAndSername: /^([a-zA-ZÀ-ÿ]{3,16})$/,
    email: /^[a-zA-ZÀ-ÿ.-_]+@[a-zA-Z.-_]+\.[a-zA-Z-0-9-.]+$/,
    textArea: /^[a-zA-Z.-_\s",\u00f1\u00d1\u00E0-\u00FC]{10,100}$/

}

const fieldValidation = {

    nameAndSername: false,
    email: false,
    textArea: false

}

fieldValidation = (expression, inputValue, input, span) => {

    if (expression.test(inputValue.value)) {
        input.classList.remove('invalidInfo')
        input.classList.add('validInfo')
        span.style.display = 'none'


    } else {

        input.classList.remove('validInfo')
        input.classList.add('invalidInfo')
        span.style.display = 'block'

    }

}

const formValidation = (e) => {

    switch (e.target.name) {

        case "name":
            fieldValidation(expressions.nameAndSername, e.target, nameInput, nameSpan)
            break
        case "surname":
            fieldValidation(expressions.nameAndSername, e.target, surnameInput, surnameSpan)
            break
        case "email":
            fieldValidation(expressions.email, e.target, emailInput, emailSpan)
            break
        case "date":
            if (dateInput.value == "") {

                dateSpan.style.display = 'block'
            }

            break
        case "textArea":
            fieldValidation(expressions.textArea, e.target, textInput, textSpan)
            break



    }

}

inputs.forEach((input) => {

    input.addEventListener('keyup', formValidation)
    input.addEventListener('blur', formValidation)

})

form.addEventListener('submit', (e) => {

    e.preventDefault()

})





//caputuro el evento submit del botton

/* console.log(inputs)




document.addEventListener('DOMContentLoaded', () => {

    form.addEventListener('submit', formValidation)

})



const formValidation = (event) => {

    event.preventDefault();

    console.log(typeof nameInput.value)


    switch (nameInput.value) {

        case "":

            nameSpan.style.display = 'block'
            break


    }

    /*   form.submit() 

} */



