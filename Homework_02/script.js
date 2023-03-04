let firstNum
let secondNum
let amount = 0
let i = 0
let j = 0
let k = 0

N = prompt('Введіть перше число N')

while (i < 1) {
    if (Boolean(Number(N)) == true) {
        firstNum = +N
        console.log ("Ваше перше число: " + firstNum)
       i++
       if (firstNum < 0) {
        if (firstNum % Math.round(firstNum) != 0) {
            firstNum = Math.round(firstNum) * (-1)
            alert ('Ваше перше число змінене на додатне та округлене')
        } else {
            firstNum = firstNum * (-1)
            alert ('Ваше перше число змінене на додатне')
        }
        console.log ("Оновлене перше число: " + firstNum)
       }
    } else {
       N = prompt('Введені дані не є числом. \n Введіть перше число N')
    }
}

M = prompt('Введіть друге число M')

first: while (j < 1) {
    if (Boolean(Number(M)) == true) {
        secondNum = +M
        second: while (k < 1) {
            if ((secondNum < 0 && Math.round(secondNum) * (-1) === firstNum) || (secondNum > 0 && Math.round(secondNum)  === firstNum)) {
                M = prompt('Введене число співпаде з першим числом N. \n Введіть друге число M')
                if (Boolean(Number(M)) !== true) {
                    M = prompt('Введені дані не є числом. \n Введіть друге число M')
                    continue first
                }  else {
                    secondNum = +M
                    continue second
                }
            } else {
                j++
                k++
            }
        }
    } else {
       M = prompt('Введені дані не є числом. \n Введіть друге число M')
    }
}

console.log ("Ваше друге число: " + secondNum)

if (secondNum < 0) {
    if (secondNum % Math.round(secondNum) != 0) {
        secondNum = Math.round(secondNum) * (-1)
        alert ('Ваше друге число змінене на додатне та округлене')
    } else {
        secondNum = secondNum * (-1)
        alert ('Ваше друге число змінене на додатне')
    }
console.log ("Оновлене друге число: " + secondNum)
}

alert ('Буде вираховуватися сума чисел у проміжку між ' + firstNum + ' та ' + secondNum + ' включно')
let message = confirm("Включати парні числа у додаванні?")
for (l = firstNum; l <= secondNum; l++) {
    if (message == false) {
        if ((l + 2) % 2 === 0) {
            amount = amount + 0
        } else {
            amount = amount + l
        }
    } else {
        amount = amount + l
    }
    
}

if (message == true) {
    alert ('Сума всіх чисел дорівнює: ' + amount)
    console.log('Сума всіх чисел дорівнює: ' + amount)
} else {
    alert ('Сума всіх непарних чисел дорівнює: ' + amount)
    console.log('Сума всіх непарних чисел дорівнює: ' + amount)
}