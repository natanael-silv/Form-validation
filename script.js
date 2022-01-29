const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('passwordtwo')

form.addEventListener( 'submit', (e) => {
    e.preventDefault()

    checkInputs()

    
})

function checkInputs() {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()

    if(usernameValue ==="") {
        errorValidation(username, "campo obrigatório")
        
    } else {
     successValidation(username)
    }

    const validaEmail = validarEmail(emailValue)

    if (validaEmail === false){
        errorValidation(email, "preecha o campo corretamente")
    } else {
        successValidation(email)
    }
       
    if (passwordValue === ""){
        errorValidation(password, "campo obrigaório")
    } else {
        successValidation(password)
    }
    
    if (passwordtwoValue === ""){
      errorValidation(passwordtwo, "campo obrigatório")
    } else if (passwordtwoValue !== passwordValue){
        errorValidation(passwordtwo, "As senhas precisam ser iguais")
    } else{
        successValidation(passwordtwo)
    }
    


}

function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    
    small.innerText = message
    formControl.classList.remove('success')
    formControl.classList.add('error')
}

function successValidation(input) {
    const formControl = input.parentElement;
     
    formControl.classList.remove('error')
    formControl.classList.add('success')

}

  
function validarEmail(valueofemail) {
    var re = /\S+@\S+\.\S+/;
    return re.test(valueofemail);
  }
    