export function getButtons(list) {
    let btns = ""
    for (let i = 0; i < list.length; i++) {
        btns += `
        <button id="bnt${i}" class="btn">Function ${i + 1}</button>
        `
    }
    document.body.innerHTML += btns
}



export function showFunctionData (arr) {
    let output = `
    <div class="result">
        <h3>Function name is: "${arr.functionName}"</h3>
        <h3>Used arguments are: "${String(arr.arguments)}"</h3>
        <p id="func_res">Result of function is: "${String(arr.functionWork)}"</p>
    </div>
    `
    return output
}




