var input=document.getElementById("inp");
function compare(){
    if(input.value > 0){
        document.getElementById("result").innerHTML="User input is a positive Number.";
    }else if(input.value < 0){
        document.getElementById("result").innerHTML="Users input is an negative number.";
    }else{
        document.getElementById("result").innerHTML="User input is zero.";
    }
}

function keyPress(event){
    if(event.keyCode===13){
        compare();
    }
}
addEventListener("keyup" , keyPress)