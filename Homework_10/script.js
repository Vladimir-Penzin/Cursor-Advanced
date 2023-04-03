const whiteNotesArray = ["c1", "d1", "e1", "f1", "g1", "a1", "b1", "c2", "d2", "e2", "f2"]
const blackNotesArray = ["c1-flag", "d1-flag", "f1-flag", "g1-flag", "a1-flag", "c2-flag", "d2-flag"]

const notesArray = whiteNotesArray.concat(blackNotesArray)

const whiteKeysArray = ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'"]
const blackKeysArray = ["W", "E", "T", "Y", "U", "O", "P"]

const keysArray = whiteKeysArray.concat(blackKeysArray)

const keyboard = document.createElement('div')
keyboard.setAttribute('class', 'keyboard')
document.body.append(keyboard)

const whiteKeys = document.createElement('div')
whiteKeys.setAttribute('class', 'white_keys')
keyboard.append(whiteKeys)

const blackKeys = document.createElement('div')
blackKeys.setAttribute('class', 'black_keys')
keyboard.append(blackKeys)

const pairKeys1 = document.createElement('div')
pairKeys1.setAttribute('class', 'pair_keys')
const pairKeys2 = document.createElement('div')
pairKeys2.setAttribute('class', 'pair_keys')
const tripleKeys = document.createElement('div')
tripleKeys.setAttribute('class', 'triple_keys')

blackKeys.append(pairKeys1)
blackKeys.append(tripleKeys)
blackKeys.append(pairKeys2)

for (i = 0; i < whiteNotesArray.length; i++) {
    const keyWhite = document.createElement('div')
    keyWhite.setAttribute('class', 'key key-white')
    keyWhite.setAttribute('id', whiteNotesArray[i])
    whiteKeys.append(keyWhite)
    keyWhite.innerHTML = `<audio id="note-${whiteNotesArray[i]}" src="./audio/${whiteNotesArray[i]}.mp3"></audio>${whiteKeysArray[i]}`
}

let j = 0
let k = 0
let l = 0
let m = 0

while (k < 2) {
    const keyBlack = document.createElement('div')
    keyBlack.setAttribute('class', 'key key-black')
    keyBlack.setAttribute('id', blackNotesArray[j])
    pairKeys1.append(keyBlack)
    keyBlack.innerHTML = `<audio id="note-${blackNotesArray[j]}" src="./audio/${blackNotesArray[j]}.mp3"></audio>${blackKeysArray[j]}`
    k++
    j++
}
while (l < 3) {
    const keyBlack = document.createElement('div')
    keyBlack.setAttribute('class', 'key key-black')
    keyBlack.setAttribute('id', blackNotesArray[j])
    tripleKeys.append(keyBlack)
    keyBlack.innerHTML = `<audio id="note-${blackNotesArray[j]}" src="./audio/${blackNotesArray[j]}.mp3"></audio>${blackKeysArray[j]}`
    l++
    j++
}
while (m < 2) {
    const keyBlack = document.createElement('div')
    keyBlack.setAttribute('class', 'key key-black')
    keyBlack.setAttribute('id', blackNotesArray[j])
    pairKeys2.append(keyBlack)
    keyBlack.innerHTML = `<audio id="note-${blackNotesArray[j]}" src="./audio/${blackNotesArray[j]}.mp3"></audio>${blackKeysArray[j]}`
    m++
    j++
}

function playNote (note) {
    const audio = document.getElementById(`note-${note}`)
    audio.preload = 'auto'
    audio.play()
}



document.addEventListener('keydown', function (event) {
    for (i = 0; i < notesArray.length; i++) {
        let item = document.getElementById(notesArray[i])
        item.classList.remove('active')
        if (event.key.toUpperCase() === keysArray[i]) {
            playNote(notesArray[i])
            item.classList.add('active')
        }
    }
})

document.addEventListener('click', function (event) {
    for (i = 0; i < notesArray.length; i++) {
        let item = document.getElementById(notesArray[i])
        item.classList.remove('active')
        if (event.target.id === notesArray[i]) {
            playNote(event.target.id)
            item.classList.add('active')
        }
    }
})