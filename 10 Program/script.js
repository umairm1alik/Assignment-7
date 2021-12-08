var input=document.getElementById("inp");
function check(){
   
    if(input.value == input.value.toUpperCase()){
        document.getElementById("result").innerHTML="Input Character is in upper case.";
    }else {
        document.getElementById("result").innerHTML="Input Character is in lower case.";
    }
}
