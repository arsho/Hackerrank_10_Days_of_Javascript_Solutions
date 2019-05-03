function handleClickEvent(event){
  var res = document.getElementById("res");
  var resContent = res.innerHTML;
  var btn = event.target;
  var element = document.getElementById(btn.id);
  var elementValue = element.innerHTML;
  // Clean the display when C is pressed
  if(elementValue == "C"){
    res.innerHTML = "";
  }
  // Show result when = is pressed
  else if(elementValue == "="){
    var result = 0;
    // An addition operation
    if(resContent.split("+").length > 1){
      var operands = resContent.split("+");
      var operand1 = parseInt(operands[0], 2);
      var operand2 = parseInt(operands[1], 2);
      result = operand1 + operand2;
    }
    // A substraction operation
    else if(resContent.split("-").length > 1){
      var operands = resContent.split("-");
      var operand1 = parseInt(operands[0], 2);
      var operand2 = parseInt(operands[1], 2);
      result = operand1 - operand2;
    }
    // A multiplication operation
    else if(resContent.split("*").length > 1){
      var operands = resContent.split("*");
      var operand1 = parseInt(operands[0], 2);
      var operand2 = parseInt(operands[1], 2);
      result = operand1 * operand2;
    }
    // A division operation
    else if(resContent.split("/").length > 1){
      var operands = resContent.split("/");
      var operand1 = parseInt(operands[0], 2);
      var operand2 = parseInt(operands[1], 2);
      result = operand1 / operand2;
    }
    result = result.toString(2);
    res.innerHTML = result;
  }
  // Otherwise add the value in the display
  else{
    res.innerHTML += elementValue;
  }
}

var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btnClr = document.getElementById("btnClr");
var btnEql = document.getElementById("btnEql");
var btnSum = document.getElementById("btnSum");
var btnSub = document.getElementById("btnSub");
var btnMul = document.getElementById("btnMul");
var btnDiv = document.getElementById("btnDiv");

btn0.addEventListener("click", handleClickEvent);
btn1.addEventListener("click", handleClickEvent);
btnClr.addEventListener("click", handleClickEvent);
btnEql.addEventListener("click", handleClickEvent);
btnSum.addEventListener("click", handleClickEvent);
btnSub.addEventListener("click", handleClickEvent);
btnMul.addEventListener("click", handleClickEvent);
btnDiv.addEventListener("click", handleClickEvent);
