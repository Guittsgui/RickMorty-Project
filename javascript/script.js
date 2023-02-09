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
const msgLogin = document.querySelector('.msgLogin')
const inputEmailL= document.querySelector('.inputEmailL')
const inputSenhaL = document.querySelector('.inputSenhaL')
const btLogin = document.querySelector('.btLoginAction').addEventListener('click',verifyLogin)

///// VARIAVEIS P/ SIMULAR LOGIN
const listaUsers = []
let userLogado 



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
    if(hasEmail(inputEmailR.value)){
        let msg = 'Email já cadastrado'
        showErrorMsg(inputEmailR,msg)
        return
    }
    const user = createUser(inputNameR.value, inputEmailR.value,inputSenhaR.value)
    listaUsers.push(user)
    clearFields()
    showAcceptMsg()
}

function verifyLogin(){
    userLogado = listaUsers.find((i) => {
        return i.email == inputEmailL.value && i.password == inputSenhaL.value
    })
    let msg
    if (hasEmail(inputEmailL.value)){
        msg = 'Senha Inválida'
    }else{
        msg = 'Usuário Não Encontrado'
    }
    if(!userLogado){
        clearFields()
        msgLogin.innerText = msg
        setTimeout(() => {
            msgLogin.innerText = ''
        }, 1500);
        return
    }
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
    inputEmailL.value = ''
    inputSenhaL.value = ''
}

function hasEmail(email){
    let has = listaUsers.find((i)=>{
        return i.email === email
    })
    return has
}
// Classes
class User {
    constructor(name,email,password){
        this.name = name
        this.email = email
        this.password = password
    }
}
// Funcoes Construtoras
function createUser(name,email,password){
    const u = new User(name,email,password)
    return u
}