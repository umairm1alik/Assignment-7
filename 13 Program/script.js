var input=document.getElementById("inp");

function check(){
    var ten=input.value / 10;
    var twenty=input.value / 20;
    var fifty=input.value / 50;
    var hun=input.value / 100;
    var fh=input.value / 500;
    var ft= input.value / 5000;
    
    document.getElementById("ten").innerHTML=`Ten rupees currency notes: ${Math.floor(ten)}  `;
    document.getElementById("twenty").innerHTML=`Twenty rupees currency notes: ${Math.floor(twenty)}  `;
    document.getElementById("fif").innerHTML=`Fifty rupees currency notes: ${Math.floor(fifty)}  `;
    document.getElementById("hun").innerHTML=`Hundred rupees currency notes: ${Math.floor(hun)}  `;
    document.getElementById("fh").innerHTML=`Five Hundred rupees currency notes: ${Math.floor(fh)}  `;
    document.getElementById("ft").innerHTML=`Five Thousand rupees currency notes: ${Math.floor(ft)}  `;
    
}

  
