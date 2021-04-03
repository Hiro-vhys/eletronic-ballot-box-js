let yourVoteFor = document.querySelector('.d-1-1 span')
let office = document.querySelector('.d-1-2 span')
let description = document.querySelector('.d-1-4')
let warning = document.querySelector('.d-2')
let side = document.querySelector('.d-1-right')
let numbers = document.querySelector('.d-1-3')

let currentPhases = 0
let number = ''

function startPhases(){
    let phase = phases[currentPhases]

    let numberHtml = ''

    for(let i=0;i<phase.numbers;i++){
        if(i===0){
            numberHtml += '<div class="number flashes"></div>'
        }else{
            numberHtml += '<div class="number"></div>'
        }
    }

    yourVoteFor.style.display = 'none'
    office.innerHTML = phase.title
    description.innerHTML = ''
    warning.style.display = 'none'
    side.innerHTML = ''
    numbers.innerHTML = numberHtml
}

function updateInterface(){
    let phase = phases[currentPhases]
    let candidate = phase.candidates.filter((item) => {
        if(item.number === number){
            return true
        }else{
            return false
        }
    })
    if(candidate.length > 0){
        candidate = candidate[0]
        yourVoteFor.style.display = 'block'
        warning.style.display = 'block'
        description.innerHTML = `Nome: ${candidate.name}<br/>Partido: ${candidate.party}<br/>`
        let photosHtml = ''
        for(let i in candidate.photos){
            photosHtml += `<div class="d-1-img"><img src="imgs/${candidate.photos[i].url}" alt="">${candidate.photos[i].legend}</div>`
        }
        side.innerHTML = photosHtml
    }
}
function clicked(num){
    let element = document.querySelector('.number.flashes')
    if(element !== null){
        element.innerHTML = num
        number = `${number}${num}`

        element.classList.remove('flashes')
        if(element.nextElementSibling !== null){
            element.nextElementSibling.classList.add('flashes')
        }else{
            updateInterface()
        }
    }
}
function white(){
    alert("Clicou em BRANCO")
}
function correct(){
    alert("Clicou em CORRIGE")
}
function confirm(){
    alert("Clicou em CONFIRMA")
}

startPhases()