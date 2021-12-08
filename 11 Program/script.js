var input=document.getElementById("inp");

function checkDay(){
    if(input.value== 0){
        document.getElementById("result").innerHTML="Monday"
    }else if(input.value== 1){
        document.getElementById("result").innerHTML="Tuesday"
    }else if(input.value== 2){
        document.getElementById("result").innerHTML="Wednesday"
    }else if(input.value== 3){
        document.getElementById("result").innerHTML="Thursday"
    }else if(input.value== 4){
        document.getElementById("result").innerHTML="Friday"
    }else if(input.value== 5){
        document.getElementById("result").innerHTML="Saturday"
    }else if(input.value== 6){
        document.getElementById("result").innerHTML="Sunday"
    }
  
}