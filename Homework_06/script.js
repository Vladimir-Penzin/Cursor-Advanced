const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
    }
];

const firstCard = students[0] // assign constanta as first element of "students" array. Can be changed to another index



const getSubjects = (objNo) => {
    const array = Object.keys(objNo.subjects)
    const result = array.map((item) => {
        return item.slice(0, 1).toUpperCase() + item.toLowerCase().slice(1).replaceAll("_", " ")
    })
    return result
}
console.log("Function 1: " + getSubjects(firstCard))


const getAverageMark = (objNo) => {
    let result = 0
    const array = objNo.subjects
    const subj = Object.keys(objNo.subjects)
    const arrayMarksSubject = subj.map((item) => {
        return array[item]
    })
    let marksArray = []
    for (i = 0; i < arrayMarksSubject.length; i++) {
        marksArray = marksArray.concat(arrayMarksSubject[i])
    }
    for (i = 0; i < marksArray.length; i++){
        result += marksArray[i]
    }  
    return Math.round((result / marksArray.length) * 100) / 100
}

console.log("Function 2: " + getAverageMark(firstCard))


const getStudentInfo = (objNo) => {
    let result = {}
    result.course = objNo.course
    result.name = objNo.name
    result.averageMark = getAverageMark(objNo)
    return result
}

console.log("Function 3: ")
console.log(getStudentInfo(firstCard))


const getStudentsNames = (array) => {
    const result = array.map((item) =>{
        return item.name
    })
    return result.sort()
}
console.log("Function 4: " + getStudentsNames(students))


const getBestStudent = (arrayStud) => {
    let studentName
    let bestMark = 0
    for (j = 0; j < arrayStud.length; j++) {
        if (bestMark < getAverageMark(arrayStud[j])) {
            studentName = arrayStud[j].name
        }
    }
    return studentName
}
console.log("Function 5: " + getBestStudent(students))


const calculateWordLetters = (word) => {
    result = {}
    array = word.split("")
    const newArray = array.filter((item, index) => {
        return array.indexOf(item) === index
    })
    const repeats = newArray.map((item) => {
        j = 0
        for (i = 0; i < array.length; i++) {
            if (item === array[i]) {
                j++
            }
        }
        return j
    })
    for (i = 0; i < repeats.length; i++) {
        result[newArray[i]] = repeats[i]
    }
    return result
}
const wordToCalculate = "test"
console.log("Function 6 (word for processing is '" + wordToCalculate + "' : ")
console.log(calculateWordLetters(wordToCalculate))

