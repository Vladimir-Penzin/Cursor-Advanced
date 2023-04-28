export const wrongName = "voLOdymYr"
export const students04 = ["Андрій", "Сергій", "Оксана", "Тамара", "Галина", "Тарас"]
export const marks04 = [4, 5, 5, 3, 4, 5]
export const arrayLength = 10
export const arrayMin = 1
export const arrayMax = 20
const studentsList = [{
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
export const students06 = studentsList[0]
export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 }
export const student08name = "Остап Родоманський Бендер"
export const student08university = "Вищої Школи Психотерапії м.Одеса"
export const student08course = "1"


/*module.exports = {
    entry: './index.js',
    mode: 'production',
    module: {
        rules: [{
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true, // webpack@1.x
                        disable: true, // webpack@2.x and newer
                    },
                },
            ],
        }]
    }
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
    }

}*/
