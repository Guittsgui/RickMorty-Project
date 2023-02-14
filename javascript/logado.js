const personBt = document.querySelector('.peAction').addEventListener('click',personagemAction)
const home = document.querySelector('.home').addEventListener('click',homeAction)
const homepage = document.querySelector('.homepage')
const personArea = document.querySelector('.personArea')
const epAction = document.querySelector('.epAction').addEventListener('click',episodiosAction)
const epArea = document.querySelector('.epArea')
const epGeral = document.querySelector('.epGeral')


function personagemAction(){
    homepage.style.display = 'none'
    personArea.style.display = 'block'
    epGeral.style.display = 'none'
    window.scrollTo(0, 0)
}
function episodiosAction(){
    homepage.style.display = 'none'
    personArea.style.display = 'none'
    epGeral.style.display = 'flex'
    window.scrollTo(0, 0)
    getEpisodes()
}
function homeAction(){
    homepage.style.display = 'block'
    personArea.style.display = 'none'
    epGeral.style.display = 'none'
    window.scrollTo(0, 0)
}




async function getEpisodes(){
    let req = await fetch('https://rickandmortyapi.com/api/episode')
    let json = await req.json()
    let listaEp = json.results
    for ( ep of listaEp){
        const divMaior = document.createElement('div')
        divMaior.classList.add('epBox')
        divMaior.innerHTML = `<h2>${ep.episode} </h2>  <h3> Nome:</h3> <p>${ep.name}</p> <h3>Lançamento: </h3> <p>${ep.air_date} </p>`
        epArea.appendChild(divMaior)    
    }
}