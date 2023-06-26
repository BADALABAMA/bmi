  
      

  function validateWeight(weight) {
    return !isNaN(weight);
  }
  
  function validateHeight(height) {
    return !isNaN(height);
  }
  
  function calcWeightAndHeight(weight, height) {
    return weight / (height * height);
  }
  
  let weight = prompt("Enter your weight:");
  
  while (!validateWeight(weight)) {
    console.log('This is not a number');
    weight = prompt("Enter your weight again:");
  }
  
  let height = prompt("Enter your height in float:");
  
  while (!validateHeight(height)) {
    console.log('This is not a number');
    height = prompt("Enter your height in float again:");
  }
  
  console.log(parseInt(calcWeightAndHeight(weight, height)));
  