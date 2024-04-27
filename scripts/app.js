
/*-------------------------------- Constants --------------------------------*/
const currentSound = null;


const soundBits = ['work_it', 'make_it', 'do_it', 'makes_us', 'harder', 'better', 'faster', 'stronger',
    'more_than', 'hour', 'our', 'never', 'ever', 'after', 'work_is', 'over']

/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/

const allButtons = document.querySelector('.hidden')

const currentAudio = document.querySelector('audio')

const randomButton = document.querySelector('button')

let clickedSound = "";
console.log(allButtons)
let randomIdx = 0;

/*-------------------------------- Functions --------------------------------*/

const play = (event) => {
    if (event.target.id === 'player') {
        currentAudio.src = "#"
    } else {
        // want to add a if loop that check which button is clicked then adds that sound as the src
        //     console.log(event.target.id)
        //     if (event.target.id === 'work_it' ) {
        //     currentAudio.src = './sounds/work_it.wav'
        //     } else {

        //     currentAudio.src = './sounds/after.wav'
        // }
        // if (soundBits[0] === 'work_it') {
        //     currentAudio.src = './sounds/work_it.wav'
        // }
        clickedSound = event.target.id
        currentAudio.src = `./sounds/${clickedSound}.wav`
        currentAudio.play()
        console.log(event.target.id);
    }
}

const randomSound = (event) => {
    const randomIdx = Math.floor(Math.random() * soundBits.length)
    const randomSound = soundBits[randomIdx]
    currentAudio.src = `./sounds/${randomSound}.wav`
    currentAudio.play()
}
// const run = (event) => {
// console.log(event)
//}

// console.log(event.target.id)

// function play(event) {
//     console.log(event.target)

// }

// /*----------------------------- Event Listeners -----------------------------*/

allButtons.addEventListener('click', play)
randomButton.addEventListener('click', randomSound)