function* createIdGenerator() {
    let idValue = 1
    for (idValue; idValue < Infinity; idValue++) {
        yield idValue
    }
}

const idGenerator = createIdGenerator()

document.querySelector(".next").addEventListener("click", e => {
    document.querySelector(".id_result").innerHTML = idGenerator.next().value
})

const textResult = document.querySelector(".text_result")

document.querySelector(".font_result").innerHTML = `Current font size is: 14 px`
function* newFontGenerator(defaultFZ) {
    let fS = defaultFZ
    
    for (i = 1; i < Infinity; i++) {
        const keyValue = yield
        if (keyValue === "up") {
            fS +=2
            textResult.style.fontSize = fS + `px`
            document.querySelector(".font_result").innerHTML = `Current font size is: ${fS} px`
            console.log(fS)
        }
        if (keyValue === "down") {
            if (fS > 2) {
                fS -=2
                textResult.style.fontSize = fS + `px`
                document.querySelector(".font_result").innerHTML = `Current font size is: ${fS} px`
                console.log(fS)
            } else {
                textResult.style.fontSize = `4px`
                alert('Font size too small, cannot reduce!')
                
            }
            
        }
        
    }
    
}

const fontGenerator = newFontGenerator(14)

document.querySelector('.buttons').addEventListener("click", e => {
    fontGenerator.next(e.target.id).value
})