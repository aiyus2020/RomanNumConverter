const number = document.getElementById("number");
const convert = document.getElementById("convert-btn");
const result = document.getElementById("output");
const covDiv = document.getElementById("ten");

convert.addEventListener("click", (e) => {
  e.preventDefault();
  result.innerText = ""; // Clear previous result

  if (checkInt()) {
    romanConversion();
  }

  number.value = ""; // Reset input field after conversion
});

const checkInt = () => {
  let numVal = parseInt(number.value);

  if (!numVal) {
    result.innerText = "Please enter a valid number";
    covDiv.classList.add("alert");
    covDiv.style.display = "block";
    return false;
  } else if (numVal < 1) {
    result.innerText = "Please enter a number greater than or equal to 1";
    covDiv.classList.add("alert");
    covDiv.style.display = "block";
    return false;
  }

  return true;
};

const romanConversion = () => {
  let numVal = parseInt(number.value);
  const content = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let romanNumeral = "";

  content.forEach(({ value, symbol }) => {
    while (numVal >= value) {
      romanNumeral += symbol;
      numVal -= value;
    }
  });
  covDiv.classList.remove("alert");
  covDiv.style.display = "block";
  result.innerText = romanNumeral;
};
