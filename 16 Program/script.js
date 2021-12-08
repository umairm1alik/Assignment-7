let input=document.getElementById("inp");
let finalAmount;
function calBill(){
if(input.value <= 50){
    
    finalAmount=Math.round((input.value * 0.50));
    let surcharge=Math.round((finalAmount*20)/100);
    finalAmount +=surcharge;
    
}else if(input.value <=150){
    
    finalAmount=Math.round(25 + ((input.value - 50)*0.75));
    let surcharge=Math.round((finalAmount*20)/100);
    finalAmount +=surcharge;

}else if(input.value <=250){
    
    finalAmount=Math.round(100 +((input.value - 150)*1.20));
    let surcharge=Math.round((finalAmount*20)/100);
    finalAmount +=surcharge;

}else if(input.value > 250){
    
    finalAmount=Math.round(220 +((input.value - 250)*1.50));
    let surcharge=Math.round((finalAmount*20)/100);
    finalAmount +=surcharge;

}
document.getElementById("result").innerHTML=`Your Bill is: ${finalAmount}Rs`;
}