var input=document.getElementById("inp");

function compare(){
   
    if(input.value === "a" || input.value === "e" || input.value === "i" || input.value === "o" || input.value === "u"){
        document.getElementById("result").innerHTML="Input character is a vowel.";
    }else {
        document.getElementById("result").innerHTML="Input character is a consonent.";
    }
}
