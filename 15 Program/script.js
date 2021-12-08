let input=document.getElementById("inp");

let grossSalary;
function calSalary(){

    if(input.value <= 10000){

       
        grossSalary=Math.round((input.value*20) /100) + Math.round((input.value*80) /100) + parseInt(input.value);
    
    }else if(input.value <= 20000){

    
        grossSalary=Math.round((input.value*25) /100) + Math.round((input.value*90) /100) + parseInt(input.value);

    }else if(input.value > 20000){

   
        grossSalary=Math.round((input.value*30) /100) + Math.round((input.value*95) /100) + parseInt(input.value);
    }

    

    document.getElementById("result").innerHTML=grossSalary;
}