export function getMaxDigit (number) {
    let numberLength
    let maxDigit = 0
    let varNum
    let varNumDivided
    let i = 1
    if (number < 10) {
        maxDigit = number
        return maxDigit
    } else {
        numberLength = String(number).length
        varNum = number
        for (i; i <= numberLength; i++) {
            varNumDivided = ((varNum / 10) % Math.floor(varNum / 10)) * 10
            if (varNumDivided > maxDigit) {
                maxDigit = Math.floor(varNumDivided)
            }
            varNum = Math.floor(varNum / 10)            
        }
        return maxDigit
    }
}


function getDegreeOf (num, rate = 1) {
    let degreeOf = 1
    let i
    if (rate == 0) {
        return degreeOf
    } else if (rate > 0) {
        for (i = 1; i <= rate ; i++) {
            degreeOf = degreeOf * num
        }
        return degreeOf
    } else {
        rate = rate * (-1)
        for (i = 1; i <= rate ; i++) {
            degreeOf = degreeOf * num
        }
        degreeOf = 1 / degreeOf
        return degreeOf
    }
}

export function nameAdjust (name) {
    let nameResult
    nameResult = name.toLowerCase()
    nameResult = nameResult.slice(0, 1).toUpperCase() + nameResult.slice(1)
    return nameResult
}

const getSalary = (salary, tax = 19.5) => Math.round(salary * (1 - tax / 100)) + "грн"

function getRandomNumber (N, M) {
    let randomResult
    j = 0
    randomAgain: while (j < 1) {
        randomResult = Math.floor(Math.random() * M)
        if (randomResult > N) {
            j++
            return randomResult
        } else {
            continue randomAgain
        }
    }
}

function countLetter (letter, word) {
    let wordLength
    let letterQty
    let wordDivider
    wordLength = word.length
    wordDivider = word.toLowerCase()
    letterQty = 0
    for (i = 1; i <= wordLength; i++) {
        if (letter.toLowerCase() === wordDivider.slice(0, 1)) {
            letterQty++
        }
        wordDivider = wordDivider.slice(1)
    }
    return letterQty
}

function convertCurrency (amount) {
    let convertResult
    amount = amount.toLowerCase()
    if (amount.indexOf("$") === -1 && amount.indexOf("uah") === -1) {
        return console.log("Валюта не визначена")
    } else if (amount.indexOf("$") >= 0) {
        convertResult = Number(amount.replaceAll("$", "")) * 37 + " грн"
        return convertResult
    } else if (amount.toLowerCase().indexOf("uah") >= 0) {
        convertResult = Math.round((Number(amount.replaceAll("uah", "")) / 37) * 100) / 100 + " $"
        return convertResult
    }
}

function getRandomPassword (qty = 8) {
    let getRandomPass = ""
    for (i = 1; i <= qty; i++) {
        getRandomPass = getRandomPass + String(Math.floor(Math.random() * 10))
    }
    return getRandomPass
}

const deleteLetters = (letter, word) => word.replaceAll(letter, "")

function isPalyndrom (word) {
    wordVariable = word.replaceAll(" ", "")
    wordVariable = wordVariable.toLowerCase()
    wordLength = word.length
    wordLengthVarialbe = wordLength
    let palyndromResult
    for (i = 1; i <= wordLength / 2 - 1; i++) {
        if (wordVariable.slice(0, 1) === wordVariable.slice(-1)) {
            palyndromResult = true
        } else palyndromResult = false
        wordVariable = wordVariable.slice(1,- 1)
        wordLengthVarialbe = wordLengthVarialbe - 2
    }
    return palyndromResult
}

function deleteDuplicateLetter (word) {
    wordVariable = word.toLowerCase()
    let letterCheck
    let oneLetter = ""
    while (2 <= wordVariable.length) {
        letterCheck = wordVariable.slice(0, 1)
        if (wordVariable.indexOf(letterCheck, wordVariable.indexOf(letterCheck) + 1) !== -1) {
            wordVariable = wordVariable.replaceAll(letterCheck, "")
        } else {
            oneLetter = oneLetter + wordVariable.slice(0, 1)
            wordVariable = wordVariable.slice(1)
        }
    }
    return oneLetter
}
/*
const number = 7591
console.log("Функція №1. Отримує найбільшу цифру з числа " + number + ". Результат: " + getMaxDigit(number))
const num = 3
const degree = 4
console.log("Функція №2. Отримує результат зведення в ступінь " + degree + " числа " + num + ". Результат: " + getDegreeOf(num, degree))
const myname = "volOdYmYr"
console.log("Функція №3. Форматує ім'я '" + myname + "', роблячи першу букву великою. Результат: " + nameAdjust(myname))
const cash = 4000
const tax = 25
console.log ("Функція №4. Вираховує суму, що залишається після оплати податку " + tax + "% від заробітньої плати у " + cash + "грн . Результат: " + getSalary(cash, tax))
const firstNum = 7
const secondNum = 120
console.log("Функція №5. Повертає випадкове число у діапазоні між " + firstNum + " та " + secondNum + ". Результат: " + getRandomNumber(firstNum, secondNum))
const letterOne = "a"
const wordOne = "ababagalamaga"
console.log("Функція №6. Рахує, скільки разів повторюється буква '" + letterOne + "' у слові '" + wordOne + "'. Результат: " + countLetter(letterOne, wordOne))
const currency = "UAH10000"
console.log("Функція №7. Конвертує долар/гривню за актуальним курсом. Сума: " + currency.toUpperCase() + " буде сконвертована у " + convertCurrency(currency))
const passLength = 6
console.log("Функція №9. Генерує випадковий числовий пароль довжиною " + passLength + " символів. Результат: " + getRandomPassword(passLength))
const letterTwo = "i"
const wordTwo = "availability"
console.log("Функція №10. Видаляє усі букви '" + letterTwo + "' зі слова/речення '" + wordTwo + "'. Результат: " + deleteLetters(letterTwo, wordTwo))
const palydr = 'мадам'
console.log("Функція №11. Перевіряє, чи є слово/речення '" + palydr + "' паліндромом. Результат: " + isPalyndrom(palydr))
const sentence = "мені подобаються курси з програмування"
console.log("Функція №12. Видаляє за слова/речення '" + sentence + "' букви, які повторюються більше 1-го разу. Результат: " + deleteDuplicateLetter(sentence))*/