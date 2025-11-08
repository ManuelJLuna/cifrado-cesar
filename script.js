// Cambiar el numero del texto dependiendo del nivel de cifrado
let changedLetter = document.getElementById("changedLetter");

let level = document.getElementById("level");

function changeLevel() {
    let changedLetterValue = changedLetter.value;
    level.innerHTML = changedLetterValue
}

// Cambiar la letra
function changeLetters() {
    let changedLetterValue = parseInt(changedLetter.value);
    let input = document.getElementById("input")
    let result = document.getElementById("result")
    let inputValue = input.value
    let newText = ""

    for (let i = 0; i < inputValue.length; i++) {
        let letter = inputValue[i];
        if (letter >= "a" && letter <= "z") { // Si escribimos z cambia directamente a
            if (letter.charCodeAt() + changedLetterValue > 122){
                newText += String.fromCharCode(letter.charCodeAt() + changedLetterValue - 26)
            }else{
                newText += String.fromCharCode(letter.charCodeAt() + changedLetterValue);
            }
        } else if (letter >= "A" && letter <= "Z") { // Si escribimos Z cambia directamente a A
            if (letter.charCodeAt() + changedLetterValue > 90){
                newText += String.fromCharCode(letter.charCodeAt() + changedLetterValue - 26)
            }else{
                newText += String.fromCharCode(letter.charCodeAt() + changedLetterValue);
            }
        } else {
            newText += letter; // No cambia espacios, números, símbolos, etc.
        }
    }

    return result.value = newText;
    
}