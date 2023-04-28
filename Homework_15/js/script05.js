/*const myArray = [-10, 25, 17, 5.9, -4, 28, -8, 20.1, -8.2, 12, 4.6, 11.8, -7, -9, 17]
console.log("Визначений довільний масив: " + myArray.join('; '))*/


export function getRandomArray(length, min, max) {
    let randomResult
    const array = []
    for (let i = 0; i < length; i++) {
        let j = 0
        randomAgain: while (j < 1) {
            randomResult = Math.round(Math.random() * max)
            if (randomResult >= min) {
                j++
            } else {
                continue randomAgain
            }
        }
        array[i] = randomResult
    }
    return array
}
/*const lengthA = 16
const minA = 1
const maxA = 100


const resultRandomArray = getRandomArray(lengthA, minA, maxA)
console.log("Рандомний масив цілих чисел, довжиною " + lengthA + " від " + minA + " до " + maxA + " : " + resultRandomArray.join('; ') + "\n\n")


function getModa(array) {
    let arrayLenght = 1
    let arrayResult
    
    let integersArray = [] //get array of integers
    for (i = 0; i < array.length; i++) {
        if ((array[i] % Math.floor(array[i]) === 0)) {
            integersArray.push(array[i])
        }
    }

    for (i = 0; i < integersArray.length; i++) {
        const checkArray = integersArray.filter((item) => {   //create array of iterative elements
            return item === integersArray[i]
        })
        if (checkArray.length > arrayLenght) {  //find first longest array of iterative elements and get first element of such array as final result
            arrayLenght = checkArray.length
            arrayResult = checkArray[0]
        }
    }
    return arrayResult
}
if (getModa(myArray) != undefined){
    console.log("Мода з довільного масиву чисел: " + getModa(myArray))
} else console.log("Мода з довільного масиву не визначена, числа не повторюються!")
if (getModa(resultRandomArray) != undefined){
console.log("Мода з рандомного масиву цілих чисел: " + getModa(resultRandomArray) + "\n\n")
} else console.log("Мода з рамдомного масиву не визначена, числа не повторюються!\n\n")


function getAverage (array) {
    //get array of integers
    let integersArray = []
    for (i = 0; i < array.length; i++) {
        if ((array[i] % Math.floor(array[i]) === 0)) {
            integersArray.push(array[i])
        }
    }
    let arrayAmount = 0
    for (number of integersArray) {
        arrayAmount += number
    }
    return arrayAmount / integersArray.length
}
console.log("Середнє арифметичне з довільного масиву чисел (нецілі числа ігноруються): " + getAverage(myArray))
console.log("Середнє арифметичне з рандомного масиву цілих чисел (нецілі числа ігноруються): " + getAverage(resultRandomArray) + "\n\n")


function getMedian (array) {
    //get array of integers
    let integersArray = []
    for (i = 0; i < array.length; i++) {
        if ((array[i] % Math.floor(array[i]) === 0)) {
            integersArray.push(array[i])
        }
    }
    //sorted from low to high
    const sortedArray = integersArray.sort((x, y) => x - y)
    //find median
    let median = 0
    if ((sortedArray.length + 2) % 2 === 0){  //for array with double number of elements
        median = (integersArray[(sortedArray.length / 2 - 1)] + integersArray[(sortedArray.length / 2)]) / 2
    } else { //for array with unpaired number of elements
        median = sortedArray[Math.floor(sortedArray.length / 2)]
    }
    return median
}
console.log("Медіана з довільного масиву чисел: " + getMedian(myArray))
console.log("Медіана з рандомного масиву цілих чисел: " + getMedian(resultRandomArray) + "\n\n")


const filterEvenNumbers = (array) => {
    const checkArray = array.filter((item) => {
        return (item + 2) % 2 === 0
    })
    return checkArray
}
console.log("Фільтр парних чисел з довільного масиву чисел: " + filterEvenNumbers(myArray).join('; '))
console.log("Фільтр парних чисел з рандомного масиву цілих чисел: " + filterEvenNumbers(resultRandomArray).join('; ') + "\n\n")


function countPositiveNumbers (array) {
    const checkArray = array.filter((item) => {
        return item > 0
    })
    return checkArray.length
}
console.log("Лічільник чисел, які більші 0 з довільного масиву чисел: " + countPositiveNumbers(myArray) + "\n\n")


function getDividedByFive (array) {
    const checkArray = array.filter((item) => {
        return item % 5 === 0
    })
    return checkArray
}
console.log("Фільтр чисел з довільного масиву чисел, які діляться ціло на 5: " + getDividedByFive(myArray).join('; '))
console.log("Фільтр чисел з рандомного масиву чисел, які діляться ціло на 5: " + getDividedByFive(resultRandomArray).join('; ') + "\n\n")



const badWords = ["fuck", "shit"]  //adjustible bad words' list. Can be included inside the function

function replaceBadWords(str){
    const strArray = str.split(" ")
    const result = strArray.map((word) => {
        for (i = 0; i < badWords.length; i++){
            if (word.toLowerCase().includes(badWords[i])){
                word = word.toLowerCase().replaceAll(badWords[i], "*".repeat(badWords[i].length))
            }
        }
        return word
    })
    return result.join(" ")
}
const phrase = 'Are you fucking kidding?'
console.log("Початкова фраза: " + phrase)
console.log('Фраза з цензурою: ' + replaceBadWords(phrase) + "\n\n")


function divideByThree(word) {
    let wordArray = word.toLowerCase().replaceAll(" ", "").split('')
    let parts = []
    for (i = 1; i <= wordArray.length; i++) {
        if (parts[Math.ceil(i / 3) - 1] === undefined) {  // parts[Math.ceil(i / 3) - 1] - make index for each 3-letters string
            parts[Math.ceil(i / 3) - 1] = wordArray[i - 1]
        } else {
            parts[Math.ceil(i / 3) - 1] += wordArray[i - 1]
        }
    }
    return parts
}
const dividedWord = "Education"
console.log("Слово: " + dividedWord + ", яке розділено у масив по складам з 3-х букв: " + divideByThree(dividedWord).join('; ') + "\n\n")


function generateCombinations (word) {
    if (word.length < 2) {
        return word;
    } else if (word.length > 10) {
        console.log("Your word is too long")
    } else {
        let result = [];
        for (let i = 0; i < word.length; i++) {
            let letter = word[i];     // select one letter from word
            let partOfWord = word.substr(0, i) + word.substr(i + 1, word.length - 1); // make shorted word without selected letter
            let partOfWordArray = generateCombinations(partOfWord); // repeat function action for shorted word and include it to array
            for (j = 0; j < partOfWordArray.length; j++) {
                result.push(letter + partOfWordArray[j]);  // combine selected letter with shorted words from array and include it to general result
            }
        }
        return result;
    }
}
const checkedWord = "html"
console.log("Зі слова '" + checkedWord + "' можливі комбінації з букв: " + generateCombinations("html").join('; '))*/