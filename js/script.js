function rot13(str) { // LBH QVQ VG!

  let str_arr = str.split("")
  let ciphered_char_code_arr = [];
  let regex = /[A-Za-z]/;

  let rotate = 13;

  for (let i = 0; i < str_arr.length; i++) {
    let letter = str_arr[i]
    let letter_code = letter.charCodeAt(0);
    let new_letter_code = letter_code;
    if (regex.test(letter)) {
      new_letter_code = (letter_code - 65 + rotate) % 26 + 65;
    }

    ciphered_char_code_arr.push(new_letter_code);
  }

  let ciphered_str_arr = [];
  ciphered_char_code_arr.forEach(function (char_code) {
    let new_letter = String.fromCharCode(char_code);
    ciphered_str_arr.push(new_letter);
  })

  let new_str = ciphered_str_arr.join("")
  return new_str;
}

document.getElementById("submit-button").addEventListener("click", function () {
  let input_text = document.getElementById("text-input").value;
  let ciphered_message = rot13(input_text);
  document.getElementById("ciphered-display").innerHTML = ciphered_message;
})

document.getElementById("text-input").addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("submit-button").click();
  }
})