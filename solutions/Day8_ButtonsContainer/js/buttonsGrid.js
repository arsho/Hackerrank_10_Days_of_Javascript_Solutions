var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
btn5.onclick = function(){
    var btn1Value = btn1.innerHTML;
    var btn2Value = btn2.innerHTML;
    var btn3Value = btn3.innerHTML;
    var btn4Value = btn4.innerHTML;
    var btn6Value = btn6.innerHTML;
    var btn7Value = btn7.innerHTML;
    var btn8Value = btn8.innerHTML;
    var btn9Value = btn9.innerHTML;

    btn1.innerHTML = btn4Value;
    btn2.innerHTML = btn1Value;
    btn3.innerHTML = btn2Value;
    btn4.innerHTML = btn7Value;
    btn6.innerHTML = btn3Value;
    btn7.innerHTML = btn8Value;
    btn8.innerHTML = btn9Value;
    btn9.innerHTML = btn6Value;    
};
