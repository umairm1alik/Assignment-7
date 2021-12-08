var input=document.getElementById("inp");
function check(){
    var forNumber=/^[0-9]+$/
    var forAlphabet=/^[A-Za-z]+$/
    if(input.value.match(forNumber)){
        document.getElementById("result").innerHTML="Input character is Number.";
    }else if(input.value.match(forAlphabet)){
        document.getElementById("result").innerHTML="Input character is Alphabet.";
    }else{
        document.getElementById("result").innerHTML="Input character is special digit   .";
    }
}