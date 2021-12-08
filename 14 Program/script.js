var phyMarks=document.getElementById("phy");
var cheMarks=document.getElementById("che");
var bioMarks=document.getElementById("bio");
var mathMarks=document.getElementById("math");
var compMarks=document.getElementById("comp");

function compute(){

    
    //Physics Section
    var phyResult=Math.round( (phyMarks.value/100)*100);
    document.getElementById("phy%").innerHTML=phyResult;
    if(phyResult>= 90){
        document.getElementById("phyGrade").innerHTML="A";
    }else if(phyResult>= 80){
        document.getElementById("phyGrade").innerHTML="B";
    }else if(phyResult>= 70){
        document.getElementById("phyGrade").innerHTML="C";
    }else if(phyResult>= 60){
        document.getElementById("phyGrade").innerHTML="D";
    }else if(phyResult>= 40){
        document.getElementById("phyGrade").innerHTML="E";
    }else{
        document.getElementById("phyGrade").innerHTML="F";
    }

    //Chemistry Section
    var cheResult=Math.round( (cheMarks.value/100)*100);
    document.getElementById("che%").innerHTML=cheResult;
    if(cheResult>= 90){
        document.getElementById("cheGrade").innerHTML="A";
    }else if(cheResult>= 80){
        document.getElementById("cheGrade").innerHTML="B";
    }else if(cheResult>= 70){
        document.getElementById("cheGrade").innerHTML="C";
    }else if(cheResult>= 60){
        document.getElementById("cheGrade").innerHTML="D";
    }else if(cheResult>= 40){
        document.getElementById("cheGrade").innerHTML="E";
    }else{
        document.getElementById("cheGrade").innerHTML="F";
    }

    //Biology Section
    var bioResult= Math.round((bioMarks.value/100)*100);
    document.getElementById("bio%").innerHTML=bioResult;
    if(bioResult>= 90){
        document.getElementById("bioGrade").innerHTML="A";
    }else if(bioResult>= 80){
        document.getElementById("bioGrade").innerHTML="B";
    }else if(bioResult>= 70){
        document.getElementById("bioGrade").innerHTML="C";
    }else if(bioResult>= 60){
        document.getElementById("bioGrade").innerHTML="D";
    }else if(bioResult>= 40){
        document.getElementById("bioGrade").innerHTML="E";
    }else{
        document.getElementById("bioGrade").innerHTML="F";
    }

    //Mathematics Section
    var mathResult=Math.round((mathMarks.value/100)*100);
    document.getElementById("math%").innerHTML=mathResult;
    if(mathResult>= 90){
        document.getElementById("mathGrade").innerHTML="A";
    }else if(mathResult>= 80){
        document.getElementById("mathGrade").innerHTML="B";
    }else if(mathResult>= 70){
        document.getElementById("mathGrade").innerHTML="C";
    }else if(mathResult>= 60){
        document.getElementById("mathGrade").innerHTML="D";
    }else if(mathResult>= 40){
        document.getElementById("mathGrade").innerHTML="E";
    }else{
        document.getElementById("mathGrade").innerHTML="F";
    }

    //Computer Section
    var compResult=Math.round((compMarks.value/100)*100);
    document.getElementById("comp%").innerHTML=compResult;
    if(compResult>= 90){
        document.getElementById("compGrade").innerHTML="A";
    }else if(compResult>= 80){
        document.getElementById("compGrade").innerHTML="B";
    }else if(compResult>= 70){
        document.getElementById("compGrade").innerHTML="C";
    }else if(compResult>= 60){
        document.getElementById("compGrade").innerHTML="D";
    }else if(compResult>= 40){
        document.getElementById("compGrade").innerHTML="E";
    }else{
        document.getElementById("compGrade").innerHTML="F";
    }

    //total Section

    var total=parseInt(phyMarks.value) + parseInt(cheMarks.value) + parseInt(bioMarks.value) + parseInt(mathMarks.value) + parseInt(compMarks.value);
    var totalPer=Math.round((total/500)*100);
    document.getElementById("totalObt").innerHTML=total;
    document.getElementById("total%").innerHTML=totalPer;
    if(totalPer>= 90){
        document.getElementById("totalGrade").innerHTML="A";
    }else if(totalPer>= 80){
        document.getElementById("totalGrade").innerHTML="B";
    }else if(totalPer>= 70){
        document.getElementById("totalGrade").innerHTML="C";
    }else if(totalPer>= 60){
        document.getElementById("totalGrade").innerHTML="D";
    }else if(totalPer>= 40){
        document.getElementById("totalGrade").innerHTML="E";
    }else{
        document.getElementById("totalGrade").innerHTML="F";
    }

}