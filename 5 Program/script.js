var input=document.getElementById("inp");
function compare(){
    if(input.value % 2 ==0){
        document.getElementById("result").innerHTML="Number is Even.";
    }else {
        document.getElementById("result").innerHTML="Number is Odd.";
    }
}
