var inputBox = document.getElementById("input-calculator");
var numberBtns = document.querySelectorAll(".buttonNum");
var ActBtns = document.querySelectorAll(".buttonAct");
var decimal = document.getElementById("decimalBtn");

// Should now check if the inputbox only has a 0

numberBtns.forEach(function(button){
  button.addEventListener('click',function(){
    var currentValue = inputBox.value;
    if(currentValue == "0" && button.textContent == "0"){
      return;
    }
    inputBox.value += button.textContent;
  });
});

ActBtns.forEach(function(button){
  button.addEventListener('click',function(){
    var currentValue = inputBox.value;
    var lastBtn = button.textContent;
    var resultCalculation;
    if(lastBtn === "CLEAR"){
      inputBox.value = "";
    } else if (lastBtn === "ENTER"){
      if(currentValue.length>0){
        if(currentValue.search(/[-+*/]/) >= 0){
          resultCalculation = doCalculations(currentValue);
          inputBox.value = resultCalculation;
        }
      }
    }
    else{
      if(lastBtn === "+" || lastBtn === "-" || lastBtn === "*" || lastBtn === "/"){
        if(!isNaN(currentValue.slice(-1)) && currentValue.length > 0){
          inputBox.value += lastBtn;
        }
      }
    }
  });
});

decimalBtn.addEventListener('click',function(event){
  var currentValue = inputBox.value;
  var currentValue_length = currentValue.length;
  var decimalIndex = currentValue.indexOf(".");
  if(currentValue_length == 0 && decimalIndex == -1){
    inputBox.value += "0.";
  }else{
    if(decimalIndex==-1){
      inputBox.value += ".";
    }
  }
});

function doCalculations(inputString){
var num1 = inputString.slice(0, inputString.search(/[-+*/]/));
var operator = inputString.slice(inputString.search(/[-+*/]/), inputString.search(/[-+*/]/)+1);
var num2 = inputString.slice(inputString.search(/[-+*/]/)+1);
var result;
switch(operator){
  case '+':
    result = parseInt(num1)+parseInt(num2);
    break;
  case '-':
    result = parseInt(num1)-parseInt(num2);
    break;
  case '*':
    result = parseInt(num1)*parseInt(num2);
    break;
  case '/':
    result = parseInt(num1)/parseInt(num2);
    break;
  }
return result;
}


