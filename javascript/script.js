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


///// VARIAVEIS P/ SIMULAR LOGIN
const listaUsers = []
const userLogado = ''



//FUNCTIONS
function verifyRegister(e){
    
    e.preventDefault()

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
        let msg = 'Senha: Min 05 caracteres'
        showErrorMsg(inputSenhaR,msg)
        return
    }
    if(hasEmail()){
        let msg = 'Email já cadastrado'
        showErrorMsg(inputEmailR,msg)
        return
    }
    const user = createUser(inputNameR.value, inputEmailR.value,inputSenhaR.value)
    listaUsers.push(user)
    clearFields()
    showAcceptMsg()

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
    input.style.borderColor = 'red'
    msgRegister.innerHTML = msg
    msgRegister.style.color = 'red'
    input.value = ''
    setTimeout(() => {
        input.style.borderColor = 'black'
        msgRegister.innerHTML = ''
    }, 1500);
}
function showAcceptMsg(user){
    msgRegister.style.color = 'green'
    msgRegister.innerHTML = 'Usuário Cadastrado com Sucesso'
    setTimeout(() => {
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
function hasEmail(){
    let has = listaUsers.find((i)=>{
        return i.email === inputEmailR.value
    })
    return has
}


// Classes
class User {
    constructor(name,email,login){
        this.name = name
        this.email = email
        this.login = login
    }
}
// Funcoes Construtoras
function createUser(name,email,login){
    const u = new User(name,email,login)
    return u
}