var input=document.getElementById("inp");
function compare(){
   
    if(isNaN(input.value)){
        document.getElementById("result").innerHTML="Input is in alphabatic form.";
    }else {
        document.getElementById("result").innerHTML="Input is not in alphabatic form.";
    }
}
