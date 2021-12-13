let inputEmail = document.getElementById('email')
let labelEmail = document.getElementById('label-email')
let inputPassword = document.getElementById('password')
let labelPassword = document.getElementById('label-password')

let btn = document.getElementById('log-btn')

let validEmail = false
let validPassword = false

inputEmail.addEventListener('input', (event) => {
    let input = event.currentTarget
    let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
    let emailTest = regex.test(input.value)
    
    if(inputEmail.value.length == 0){
        labelEmail.innerHTML = 'E-mail'
        inputEmail.setAttribute('style', 'border-color: none')
        validEmail = false
    }else if(!emailTest){
        labelEmail.innerHTML = 'E-mail incorreto user@email.com'
        inputEmail.setAttribute('style', 'border-color: red')
        validEmail = false
    }else{
        labelEmail.innerHTML = 'E-mail Válido'
        inputEmail.setAttribute('style', 'border-color: green')
        validEmail = true
    }})

inputPassword.addEventListener('input', (event) => {
    let input = event.target
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    let passwordTest = regex.test(input.value)

    if(inputPassword.value.length == 0){
        labelPassword.innerHTML = 'Senha'
        inputPassword.setAttribute('style', 'border-color: none')
        validPassword = false
    }else if(!passwordTest){
        labelPassword.innerHTML = 'Minimo 8 caracteres, uma letra e um numero'
        inputPassword.setAttribute('style', 'border-color: red')
        validPassword = false
    }else{
        labelPassword.innerHTML = 'Senha Válida'
        inputPassword.setAttribute('style', 'border-color: green')
        validPassword = true
    }})

btn.addEventListener('click', (event) => {
    event.preventDefault()

    if(validEmail && validPassword){

        let email = inputEmail.value
        let password = inputPassword.value
    
        let post = {email, password}
    
        const option = {
            method: 'POST',
            headers: new Headers({'content-type' : 'application/json'}),
            body: JSON.stringify(post)
        }
     
        const url = 'http://localhost:3000/cadastro'
     
        fetch(url, option)

        location.href = './templates/dashboard.html'

        
    }
})

    
