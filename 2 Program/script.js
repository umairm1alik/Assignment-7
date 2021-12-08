var num1=document.getElementById("num1");
var num2=document.getElementById("num2");
var num3=document.getElementById("num3");
function compare(){
    if(num1.value > num2.value && num1.value > num3.value){
        document.getElementById("result").innerHTML="Number one is greater than number two and three.";
    }else if(num1.value < num2.value && num2.value > num3.value){
        document.getElementById("result").innerHTML="Number two is greater than number one and three.";
    }else if(num3.value > num1.value && num3.value > num2.value){
        document.getElementById("result").innerHTML="Number Three is greater than number one and two.";
    }else{
        document.getElementById("result").innerHTML="Numbers are equal.";
    }
}

function keyPress(event){
    if(event.keyCode===13){
        compare();
    }
}
addEventListener("keyup" , keyPress)
