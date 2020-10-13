const convertToRoman = function (num) {
  const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumeral = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

  let romanized = "";

  for (var index = 0; index < decimalValue.length; index++) {
    console.log("index= " + index);
    while(decimalValue[index] <= num) {
      console.log("decimalValue[index]: " + decimalValue[index]);
      romanized += romanNumeral[index];
      console.log("romanized: " + romanized);
      num -= decimalValue[index];
      console.log("num= " + num);
    }
  }

  return romanized;
};

// test here
console.log(convertToRoman(17));