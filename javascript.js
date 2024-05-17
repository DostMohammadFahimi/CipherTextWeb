// let result="";
function caesarCipher(text, key) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        let baseCharCode = charCode >= 65 && charCode <= 90 ? 65 : (charCode >= 97 && charCode <= 122 ? 97 : null);
        if (baseCharCode !== null) { // Uppercase or lowercase letter
            result += String.fromCharCode(((charCode - baseCharCode + key) % 26) + baseCharCode);
        } else { // Non-alphabetic characters remain unchanged
            result += text.charAt(i);
        }
    }
    return result;
}


// Function to perform Caesar cipher decryption
function caesarDecipher(text, key) {
    let result = "";
    let shiftedCharCode;
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        let baseCharCode = charCode >= 65 && charCode <= 90 ? 65 : (charCode >= 97 && charCode <= 122 ? 97 : null);
        if (baseCharCode !== null) { // Uppercase or lowercase letter
            // Apply the Caesar cipher reverse shift
            if(charCode - baseCharCode - key < 0){
                const p=charCode - baseCharCode - key;
                const c=p-Math.floor(p/26)*26;
                shiftedCharCode = (c % 26) + baseCharCode;
            }else{
                shiftedCharCode = ((charCode - baseCharCode - key ) % 26) + baseCharCode;
            } 
            result += String.fromCharCode(shiftedCharCode);
        } else { // Non-alphabetic characters remain unchanged
            result += text.charAt(i);
        }
    }
    return result;
}


// Function to handle encryption
function encryptText() {
    const inputField = document.getElementById("inputText");
    const inputText = inputField.value;
    const keyField = document.getElementById("keyInput");
    const key = parseInt(keyField.value); // Parse key input as an integer
    const outputField = document.getElementById("output");
    const encryptedText = caesarCipher(inputText, key); // Encrypt using the provided key
    outputField.textContent = "Encrypted Text: " + encryptedText;
}


// Function to handle decryption
function decryptText() {
    const inputField = document.getElementById("inputText");
    const inputText = inputField.value;
    const keyField = document.getElementById("keyInput");
    const key = parseInt(keyField.value); // Parse key input as an integer
    const outputField = document.getElementById("output");
    const decryptedText = caesarDecipher(inputText, key); // Decrypt using the provided key
    outputField.textContent = "Decrypted Text: " + decryptedText;
}


// Function to reset input and output fields
function resetInput() {
    document.getElementById("inputText").value = "";
    document.getElementById("keyInput").value = ""; // Reset key input field
    document.getElementById("output").textContent = "";
}
