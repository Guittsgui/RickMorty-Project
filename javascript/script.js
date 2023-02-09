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









//FUNCTIONS


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
        }else{
            containerLogin.style.display = 'none'
            containerRegister.style.display = 'flex'
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