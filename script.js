// Get elements from DOM

const numInput = document.getElementById('number');

const convertBtn = document.getElementById('convert-btn');

const output = document.getElementById('output');



// Define Characters

const characters = [

  {

    char: "I",

    value: 1,

    suffix: true,

  },

  {

    char: "V",

    value: 5,

    suffix: false,

  },

  {

    char: "X",

    value: 10,

    suffix: true,

  },

  {

    char: "L",

    value: 50,

    suffix: false,

  },

  {

    char: "C",

    value: 100,

    suffix: true,

  },

  {

    char: "D",

    value: 500,

    suffix: false,

  },

  {

    char: "M",

    value: 1000,

    suffix: true,

  }

]



// Define test variable

let result = "";





// Define functions





const fourOrNine = (num) => {

  const idx = characters.findIndex((obj) => !(num > obj.value));

  const suffixObj = characters.slice(0, idx).reverse().find((obj) => obj.suffix);

  const combinedChars = {

    char: suffixObj.char + characters[idx].char,

    value: characters[idx].value - suffixObj.value

  }

  return combinedChars

}



const convertToRoman = (num) => {

  const firstDigit = num.charAt(0);

  num = parseInt(num);





  if (num === 0) {

    return ""

  }



  else if (firstDigit === "4" || firstDigit === "9") {

    const combinedChars = fourOrNine(num);

    const diff = num - combinedChars.value;

    return  (combinedChars.char + result) + convertToRoman(diff.toString()) ;

  }



  else {

    let idx = characters.findIndex((obj) => !(num >= obj.value));

    idx = idx > 0 ? idx : 7;

    const diff = num - characters[idx - 1].value;



    return characters[idx - 1].char + result + convertToRoman(diff.toString())

  }

}



convertBtn.addEventListener('click', () => {

  if (window.getComputedStyle(output, null).display == "none") {

    output.style.display = "block";

  }



  if (numInput.value == "" || isNaN(numInput.value)) {

    output.innerText = "Please enter a valid number";

  }



  else if (numInput.value < 1){

    output.innerText = "Please enter a number greater than or equal to 1";

  }



  else if (numInput.value >= 4000) {

    output.innerText = "Please enter a number less than or equal to 3999";

  }

  else {

    output.innerText = convertToRoman(numInput.value);

    numInput.value = ""; 

  }

})
