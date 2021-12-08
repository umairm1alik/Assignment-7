var input=document.getElementById("inp");
function compare(){
    if(input.value % 4== 0 || input.value % 100 ==0 && input.value % 400 ==0){
        document.getElementById("result").innerHTML="This is a Leap Year.";
    }else {
        document.getElementById("result").innerHTML="This not a leap year.";
    }
}
