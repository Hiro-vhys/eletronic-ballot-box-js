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
        numberHtml += '<div class="number"></div>'
    }

    yourVoteFor.style.display = 'none'
    office.innerHTML = phase.title
    description.innerHTML = ''
    warning.style.display = 'none'
    side.innerHTML = ''
    numbers.innerHTML = numberHtml
}

function updateInterface(){

}
function clicked(num){
    let element = document.querySelector('.number.flashes')
    if(element !== null){
        element.innerHTML = num
        element = '$()'
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