const apple = 15.678
const mango = 123.965
const grape = 90.2345

console.log ("Ціни на товари:")
console.log("Яблуко : " + apple)
console.log("Манго : " + mango)
console.log("Виноград : " + grape)

let maxPrice = Math.max(apple, mango, grape)
console.log("Максимальна ціна : " + maxPrice)

let minPrice = Math.min(apple, mango, grape)
console.log("Мінімальна ціна : " + minPrice)

let totalAbsolutePrice = apple + mango + grape
console.log("Загальна вартість з копійками : " + totalAbsolutePrice)

let totalRoundedPrice = Math.floor(apple) + Math.floor(mango) + Math.floor(grape)
console.log("Загальна вартість без копійок для кожної ціни : " + totalRoundedPrice)

let totalHundredRoundedPrice = Math.ceil(totalAbsolutePrice / 100) * 100
console.log("Загальна вартість з округленням до сотень : " + totalHundredRoundedPrice)

console.log("Загальна вартість всіх товарів (без копійок) - " + Math.floor(totalAbsolutePrice) + " є парне число : " +!Boolean(Math.floor(totalAbsolutePrice) % 2))

let restOfPayment = 500 - totalAbsolutePrice
console.log("Сума решти при оплаті 500 грн : " + restOfPayment)

let averageValue = Math.round((totalAbsolutePrice / 3) * 100) / 100
console.log("Середнє значення ціни з округленням до 2-х знаків : " + averageValue)

let discount = Math.round(Math.random() * 100) / 100
console.log("Запропонована знижка : " + (discount * 100) + "%")

let amountToPay = Math.round((totalAbsolutePrice - (totalAbsolutePrice * discount)) * 100) / 100
console.log("Сума до оплати зі знижкою : " + amountToPay)

let profit = Math.round((amountToPay - (totalAbsolutePrice / 2)) * 100) / 100
console.log("Чистий прибуток : " + profit)

console.log("Загальна інформація: " + "Максимальна ціна : " + maxPrice + "; " + "Мінімальна ціна : " + minPrice + "; " + "Загальна вартість з копійками : " + totalAbsolutePrice + "; " + "Загальна вартість без копійок для кожної ціни : " + totalRoundedPrice + "; " + "Загальна вартість з округленням до сотень : " + totalHundredRoundedPrice + "; " + "Загальна вартість всіх товарів парне число : " +!Boolean(Math.floor(totalAbsolutePrice) % 2) + "; " + "Сума решти при оплаті 500 грн : " + restOfPayment + "; " + "Середнє значення ціни з округленням до 2-х знаків : " + averageValue + "; " + "Запропонована знижка : " + (discount * 100) + "%" + "; " + "Сума до оплати зі знижкою : " + amountToPay + "; " + "Чистий прибуток : " + profit)