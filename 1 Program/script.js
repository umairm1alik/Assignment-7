var num1=document.getElementById("num1");
var num2=document.getElementById("num2");
function compare(){
    if(num1.value > num2.value){
        document.getElementById("result").innerHTML="Number one is greater than number two.";
    }else if(num1.value < num2.value){
        document.getElementById("result").innerHTML="Number two is greater than number one.";
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
