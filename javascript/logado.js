const personBt = document.querySelector('.peAction').addEventListener('click',personagemAction)
const home = document.querySelector('.home').addEventListener('click',homeAction)
const homepage = document.querySelector('.homepage')
const personArea = document.querySelector('.personArea')
const epAction = document.querySelector('.epAction').addEventListener('click',episodiosAction)
const epArea = document.querySelector('.epArea')
const epGeral = document.querySelector('.epGeral')
const seasonsMenu = document.querySelector('.seasonsMenu')
const seasonsList = seasonsMenu.querySelectorAll('a')
for ( let i of seasonsList){
    i.addEventListener('click',navegaSeasons)
}
const inputEp = document.querySelector('.searchEpName')
inputEp.addEventListener('input',searchEpInput)


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
    let reqp2 = await fetch('https://rickandmortyapi.com/api/episode?page=2')
    let json2 = await reqp2.json()
    let reqp3 = await fetch('https://rickandmortyapi.com/api/episode?page=3')
    let json3 = await reqp3.json()
    let listaGeral = json.results.concat(json2.results, json3.results)
    for ( ep of listaGeral){
        const divMaior = document.createElement('div')
        divMaior.classList.add('epBox')
        divMaior.innerHTML = `<h2>${ep.episode} </h2>  <h3> Nome:</h3> <p>${ep.name}</p> <h3>Lançamento: </h3> <p>${ep.air_date} </p>`
        epArea.appendChild(divMaior)    
    }
}

function navegaSeasons(e){
    inputEp.value = ''
    const target = e.target
    for (let i of seasonsList){
        i.classList.remove('ativado')
    }
    target.classList.add('ativado')
    let classes = target.classList.value
    let reduzido = classes.split(' ')
    let seasonSelected = reduzido[0]
    filtraSeasons(seasonSelected) 
}



function filtraSeasons(season){
    const epListPosted = document.querySelectorAll('.epBox')
    for ( let i of epListPosted){
        i.style.display = 'flex'
        if ( !i.querySelector('h2').innerText.startsWith(season)){
            i.style.display = 'none'
        }              
    }
    if (season == 'all'){
        for(let i of epListPosted){
            i.style.display = 'flex'
        }
    }   
}

function searchEpInput(e){
    console.log(inputEp.value)
}
