//ELEMENTOS DOM + ACTIONS DECLARED
const navMenu = document.querySelector('.menu')
navMenu.addEventListener('click', flipMenu)
const navButtons = navMenu.querySelectorAll('a')
const containerRegister = document.querySelector('.rightSideRegister')
const containerLogin = document.querySelector('.rightSideLogin')
const eyeImg = document.querySelector('.eyeImg').addEventListener('click',flipPassword)
const inputNameR = document.querySelector('.inputNameR')
const inputEmailR = document.querySelector('.inputEmailR')
const inputSenhaR = document.querySelector('.inputSenhaR')
const btRegister = document.querySelector('.btRegisterAction').addEventListener('click', verifyRegister)
const msgRegister = document.querySelector('.msgRegister')




//FUNCTIONS
function verifyRegister(){
    
    if( inputNameR.value.length < 3){
        let msg = 'Name: Min 03 caracteres'
        showErrorMsg(inputNameR,msg)
        return
    }
    if (!isEmailValid()){
        let msg = 'Insira um Email válido'
        showErrorMsg(inputEmailR,msg)
        return
    }
    if (inputSenhaR.value.length < 5){
        let msg = 'Senha: Min 03 caracteres'
        showErrorMsg(inputSenhaR,msg)
    }

    //validaSenha
    //validaLista


}

function flipMenu(e){
    const clicked = e.target
    if ( clicked.classList.contains('nav')){
        for ( i of navButtons){
            i.classList.remove('actived')
        }
        clicked.classList.add('actived')
        if(clicked.classList.contains('Login')){
            containerLogin.style.display = 'flex'
            containerRegister.style.display = 'none'
            clearFields()
        }else{
            containerLogin.style.display = 'none'
            containerRegister.style.display = 'flex'
            clearFields()
        }
    }
}
function flipPassword(){
    console.log('ta aqui')
    console.log(inputSenhaR.type)
    if ( inputSenhaR.type == 'password'){
        inputSenhaR.type = 'text'        
    }else{
        inputSenhaR.type = 'password'  
    }
}
function showErrorMsg(input,msg){
    console.log('ol')
    input.style.borderColor = 'red'
    msgRegister.innerHTML = msg
    msgRegister.style.color = 'red'
    setTimeout(() => {
        input.style.borderColor = 'black'
        msgRegister.innerHTML = ''
    }, 1500);
}

function isEmailValid(){
    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    if (emailRegex.test(inputEmailR.value)){
        return true
    }else{
        return false
    }
}

function clearFields(){
    inputNameR.value = ''
    inputEmailR.value = ''
    inputSenhaR.value = ''
}