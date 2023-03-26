class Student {

    constructor (fullName, university, course) {
        this.university = university
        this.course = course
        this.fullName = fullName
        this.marksArray = [5, 4, 4, 5]
        this.studying = true
    }
    
    getInfo () {
        if (this.studying === true) {
            console.log(`Студент ${this.course} курсу ${this.university}, ${this.fullName}`)
        } else {
            console.log(`Студента ${this.fullName} виключено з навчального закладу`)
        }
        
    }

    getAverageMark (){
        if (this.studying === true) {
            let amount = 0
            for (let i = 0; i < this.marksArray.length; i++) {
                amount += this.marksArray[i]
            }
            return amount / this.marksArray.length
        } else {
            console.log(`Студента ${this.fullName} виключено з навчального закладу`)
        }
    }

    dismiss () {
        this.studying = false
        console.log('Студента виключено')
    }

    recover () {
        this.studying = true
        console.log('Студента поновлено')
    }

    get marks () {
        if (this.studying === true) {
            console.log(this.marksArray)
            return this.marksArray  
        } else {
            console.log(null)
        }
        
    }

    set marks (value) {
        if (this.studying === true) {
            return this.marksArray = this.marksArray.concat(value) 
        } else {
            console.log(null)
        }
    }


}

class BudgetStudent extends Student {
    constructor (fullName, university, course, scholarship = 1400){
        super(fullName, university, course)
        this.scholarship = scholarship
    }
    youGetScholarship(cash){
        console.log(`Ви отримали ${cash} грн. стипендії`)
    }
    getScholarship (){
        if (this.getAverageMark() >= 4 && this.studying === true) {
            setInterval(this.youGetScholarship, 30000, this.scholarship)
        } else if (this.getAverageMark() < 4 && this.studying === true) {
            console.log("Ваш середній бал занизький для отримання стипендії")
        } else if (this.studying === false) {
            console.log(`Студента ${this.fullName} виключено з навчального закладу`)
        }
    }
}



let student1 = new Student ("Остап Родоманський Бендер", "Вищої Школи Психотерапії м.Одеса", "1")

student1.getInfo()
console.log("\nВиводимо оцінки, додаємо оцінку 5: ")

student1.marks
student1.marks = 5
student1.marks

console.log("\nСередня оцінка: " + student1.getAverageMark())

console.log('\nВиключаємо студента: ')
student1.dismiss()

console.log('\nНамагаємося вивести оцінки, додати оцінку, перевірити інфо та середню оцінку: ')
student1.marks
student1.marks = 5
student1.getAverageMark()
student1.getInfo()

console.log('\nПоновлюємо студента: ')
student1.recover()

console.log('\nПеревіряємо наявність та можливість додавання оцінок поновленого студента: ')
student1.marks = 3
student1.marks

console.log('\nДодаємо ще 1-го студента: ')
let student2 = new BudgetStudent ("Володимир", "НТУУ м.Київ", 3)
student2.getInfo()
student2.getScholarship()


