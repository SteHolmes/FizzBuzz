const fizzBuzz = () => {
  
  for(let i = 1; i <= 100; i++) {
    let outputString = "";
    const isMultipleOfThree = i % 3 === 0;
    const isMultipleOfFive = i % 5 === 0;

    if (isMultipleOfThree) { 
      outputString += "Fizz";
    }
    if (isMultipleOfFive) {
      outputString += "Buzz";
    }
    if (outputString === "") {
      outputString = i;
    }   

    console.log(outputString);
  }
}

fizzBuzz();
