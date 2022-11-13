const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const SELECTION = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'
    },

    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'
    },

    {
        name: 'scissors',
        emoji: '✌',
        beats: 'paper'
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e =>{
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTION.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})


function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection,computerSelection)
    const computerWinner = isWinner(computerSelection,selection)
    
    addSelectionResult(computerSelection,computerWinner)
    addSelectionResult(selection,yourWinner)
}

function addSelectionResult(slection,winner) {
    const div = document.createElement('div')
    div.innerTex = slection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)   
}

function isWinner(selection,opponenetSelection) {
    return selection.beats === opponenetSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor( Math.random()*SELECTION.length    )
    return SELECTION[randomIndex]
}