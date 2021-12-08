var input=document.getElementById("inp");
function compare(){
    if(input.value % 5 ==0 && input.value % 11==0){
        document.getElementById("result").innerHTML="Number is dividible by 5 and 11.";
    }else {
        document.getElementById("result").innerHTML="Number is not dividible by 5 and 11.";
    }
}

