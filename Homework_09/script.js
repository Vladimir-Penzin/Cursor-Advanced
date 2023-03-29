let genSquare = document.getElementById("square")
genSquare.style.cssText = `
position: absolute;
left: 50%;
transform: translateX(-50%);`

function generateBlocks (){
    for (i = 1; i <= 5; i++) {
        let squareVar = document.getElementById("square")
        let row = document.createElement('div')
        row.style.cssText = `display: flex;`
        squareVar.append(row)
        
        for (j = 1; j <= 5; j++) {
            let redColor = Math.floor(Math.random() * 255) + 1
            let greenColor = Math.floor(Math.random() * 255) + 1
            let blueColor = Math.floor(Math.random() * 255) + 1
            let block = document.createElement('div')
            block.setAttribute("id", 'number' + i + j)
            block.style.width = '50px'
            block.style.height = '50px'
            block.style.display = 'block'
            block.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`
            row.append(block)
        }

    }
}

function generateBlocksInterval (){
    for (i = 1; i <= 5; i++) {
        for (j = 1; j <= 5; j++) {
            let redColor = Math.floor(Math.random() * 255) + 1
            let greenColor = Math.floor(Math.random() * 255) + 1
            let blueColor = Math.floor(Math.random() * 255) + 1
            let updateBlock = document.getElementById('number' + i + j)
            updateBlock.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`
        }
    }
}

generateBlocks()
setInterval(generateBlocksInterval, 1000)
generateBlocksInterval()