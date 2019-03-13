// Cryptography
function myFunction() {
    var charNUM;
    var shift;
    var input_Message = document.getElementById('Input_str').value;
    var newMessage = "";
    var index = 0;
    // Project 1 - Caeser Cipher - 
    while (index <= input_Message.length) {
        charNUM = input_Message.charCodeAt(index);
        if (charNUM == 32) {
            charNUM = 29;
        }
        shift = charNUM + 3;
        // Check if UpperCase
        if (shift > 90 && shift < 94) {
            shift = shift - 90;
            shift = shift + 64;
        }
        // Check if Lowercase
        else if (shift > 122) {
            shift = shift - 122;
            shift = shift + 96;
        }
        newMessage += String.fromCharCode(shift);
        index++;
    }
    document.getElementById("cipher").innerHTML = "Encrypted: " + newMessage;
}
