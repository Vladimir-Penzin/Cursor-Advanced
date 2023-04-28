/*const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"]
const marks = [4, 5, 5, 3, 4, 5]

console.log('Вихідні дані: \nСтуденти: ' + students.join(', ') + '\nТеми: ' + themes.join(', ') + '\nЗапропоновані оцінки: ' + marks.join(', ') + '\n\n\n')*/

const letGroup = (list) => {
    function checkSex (array) {
        let studSex = []
        for (let i = 0; i < array.length; i++) {
            if (array[i] === "Олександр" || array[i] === "Ігор" ||  array[i] === "Олексій") {
                studSex[i] = "Хлопець"
            }
            if (array[i] === "Олена" || array[i] === "Іра" ||  array[i] === "Світлана") {
                studSex[i] = "Дівчина"
            }
        }
        return studSex
    }
    const studentsSex = checkSex(list)

    let studentsGroup = []
    let element = []
    for (let i = 0; i < list.length / 2; i++) {
        for (let j = 0; j < 2; j++){
            if ((j + 2) % 2 === 0){
                element[j] = list[studentsSex.indexOf("Хлопець", i + studentsSex.indexOf("Хлопець"))]
            } else {
                element[j] = list[studentsSex.indexOf("Дівчина", i + studentsSex.indexOf("Дівчина"))]
            }
        }
        studentsGroup[i] = element.concat()
    }
    return studentsGroup
}
//const groups = letGroup(students)
/*console.log('Розділені групи хлопець - дівчина (відображення вкладеного масиву): \n')
console.log(...groups)
console.log('Розділені групи хлопець - дівчина (відображення елементів масиву): \n' + groups.join('; ') + '\n\n\n')*/


const letGroupThemes = (group, theme) => {
    let groupThemes =  []
    let groupItem = []
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            if ((j + 2) % 2 === 0){
                groupItem[j] = group[i].join(' та ')
            } else {
                groupItem[j] = theme[i]
            }
        }
        groupThemes[i] = groupItem.concat()
    }
    return groupThemes
}
//const themeGroup = letGroupThemes(groups, themes)
/*console.log('Теми завдань для груп (відображення вкладеного масиву): \n')
console.log(...themeGroup)
console.log('Теми завдань для гру (відображення елементів масиву): \n' + themeGroup.join('; ') + '\n\n\n')*/


export const letMarkStudents = (list, numbers) => {
    let listMarks = []
    let elem = []
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < letMarkStudents.length; j++) {
            if ((j + 2) % 2 === 0){
                elem[j] = list[i]
            } else {
                elem[j] = numbers[i]
            }
        }
        listMarks[i] = elem.concat()
    }
    return listMarks
}
//const graduate = letMarkStudents(students, marks)
/*console.log('Оцінки студентам (відображення вкладеного масиву): \n')
console.log(...graduate)
console.log('Оцінки студентам (відображення елементів масиву): \n' + graduate.join('; ') + '\n\n\n')*/


const letGroupMark = (list, mark = 5) => {
    let graduatedGroup = []
    for (let i = 0; i < list.length; i++) {
        graduatedGroup[i] = list[i] + ' : ' + Math.ceil(Math.random() * mark)
    }

    return graduatedGroup
}
//const groupGraduate = letGroupMark(themeGroup)
/*console.log('Оцінки групам по темам (відображення вкладеного масиву): \n')
console.log(groupGraduate)
console.log('Оцінки групам по темам (відображення елементів масиву): \n' + groupGraduate.join('; '))*/