const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 }
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 }
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 }

function getMyTaxes (...salary) {
    return this.tax * salary
}

console.log(getMyTaxes.call(ukraine, 3000))


function getMiddleTaxes () {
    return this.tax * this.middleSalary
}

console.log(getMiddleTaxes.call(latvia))

function getTotalTaxes () {
    return this.tax * this.middleSalary * this.vacancies
}

console.log(getTotalTaxes.call(litva));

function getMySalary (country) {
    let result = {}
    result.salary = Math.round(Math.random() * (2000 - 1500) + 1500)
    result.tax = country.tax * result.salary
    result.profit = result.salary - result.tax
    console.log(result);
}

setInterval(getMySalary, 10000, ukraine)
