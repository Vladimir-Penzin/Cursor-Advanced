import { wrongName } from './js/data.js'
import { nameAdjust } from './js/script03.js'
import { students04, marks04 } from './js/data.js'
import { letMarkStudents } from './js/script04.js'
import { arrayLength } from './js/data.js'
import { arrayMin } from './js/data.js'
import { arrayMax } from './js/data.js'
import { getRandomArray } from './js/script05.js'
import { students06 } from './js/data.js'
import { getSubjects } from './js/script06.js'
import { ukraine } from './js/data.js'
import { getTotalTaxes } from './js/script07.js'
import { student08name } from './js/data.js'
import { student08university } from './js/data.js'
import { student08course } from './js/data.js'
import { Student } from './js/script08.js'
import img from './src/img.png'
import css from './src/style.css'

let student01 = new Student (student08name, student08university, student08course)

import { getButtons } from './src/view.js'
import { showFunctionData } from './src/view.js'

const nameAdjustResult = nameAdjust(wrongName)
const letMarkStudentsResult = letMarkStudents(students04, marks04)
const getRandomArrayResult = getRandomArray(arrayLength, arrayMin, arrayMax)
const getSubjectsResult = getSubjects(students06)
const getTotalTaxesResult = getTotalTaxes.call(ukraine)
const getInfoResult = student01.getInfo()

const array = [{
    functionName: "nameAdjust",
    arguments: wrongName,
    functionWork: nameAdjustResult
},
{
    functionName: "letMarkStudents",
    arguments: [students04, marks04],
    functionWork: letMarkStudentsResult
},
{
    functionName: "getRandomArray",
    arguments: [arrayLength, arrayMin, arrayMax],
    functionWork: getRandomArrayResult
},
{
    functionName: "getSubjects",
    arguments: JSON.stringify(students06),
    functionWork: getSubjectsResult
},
{
    functionName: "getTotalTaxes",
    arguments: JSON.stringify(ukraine),
    functionWork: getTotalTaxesResult
},
{
    functionName: "getInfo",
    arguments: [student08name, student08university, student08course],
    functionWork: getInfoResult
}]

document.body.className = "bc"

const photo = `
    <div>
        <img src="${img}" alt="webpack">
    </div>
`
document.body.innerHTML += photo

getButtons(array)
const showRes = document.createElement('div')
document.body.append(showRes)

document.addEventListener("click", (e) => {
    for (let i = 0; i < array.length; i++) {
        if (Number(e.target.id.replaceAll("bnt", "")) === i) {
            showRes.innerHTML = showFunctionData(array[i])
        }
    }
})



