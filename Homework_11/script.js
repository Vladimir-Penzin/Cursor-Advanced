async function getRandomChinese(length) {
    let sign
    let result = ""
    let i = length
    
    while (i > 0) {
        let promise = new Promise ((resolve) => {
            setTimeout(resolve, length * 50)
        })
        sign = Date.now().toString().slice(-5)
        result += String.fromCharCode(sign)
        i--
        await promise
    }
    console.log(result)
}


getRandomChinese(6)