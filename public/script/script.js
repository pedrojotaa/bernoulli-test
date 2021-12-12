let inputName = document.getElementById('name')
let inputUser = document.getElementById('user')
let inputEmail = document.getElementById('email')
let inputPassword = document.getElementById('password')

let btn = document.getElementById('cad-btn')
let labelEmail = document.getElementById('label-email')
let validEmail = false

inputEmail.addEventListener('input', (event) => {
    let input = event.currentTarget
    let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
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
        labelEmail.innerHTML = 'E-mail'
        inputEmail.setAttribute('style', 'border-color: green')
        validEmail = true
    }})

btn.addEventListener('click', (event) => {
    event.preventDefault()

    if(validEmail){

        let name = inputName.value
        let user = inputUser.value
        let email = inputEmail.value
        let password = inputPassword.value
    
        let post = {name, user, email, password}
    
        const option = {
            method: 'POST',
            headers: new Headers({'content-type' : 'application/json'}),
            body: JSON.stringify(post)
        }
     
        const url = 'http://localhost:3000/cadastro'
     
        fetch(url, option)
    }
})

    
