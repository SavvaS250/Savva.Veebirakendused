function nimeLug(){
    let vastus=document.getElementById("vastus");
    let eesnimi=document.getElementById("eesnimi");


    vastus.innerHTML="Sinu nimi on "+eesnimi.value;
}
function perenimeLug(){
    let vastus2=document.getElementById("vastus2");
    let perenimi=document.getElementById("perenimi");

    vastus2.innerHTML="Sinu perekonnanimi on "+perenimi.value;
}
function sunniKuu(){
    let vastus3=document.getElementById("vastus3");
    let synd=document.getElementById("synd");

    vastus3.innerHTML="Sa oled sündinud "+synd.value;
}
function radioValik(){
    let mees=document.getElementById("mees");
    let naine=document.getElementById("naine");
    let muu=document.getElementById("muu");
    let vastus4=document.getElementById("vastus4");

    if(mees.checked){
        vastus4.innerText="Sa oled mees ";
    }
    else if(naine.checked){
        vastus4.innerText="Sa oled naine";
    }
    else{
        vastus4.innerText="Kes sa oled???";
    }
}
function emailOn(){
    let vastus5=document.getElementById("vastus5");
    let email=document.getElementById("email");


    vastus5.innerHTML="Sinu e-posti address on "+email.value;
}
function puhasta(){
    let eesnimi=document.getElementById("nimi");
    let vastus=document.getElementById("vastus");
    let vastus2=document.getElementById("vastus2");
    let vastus5=document.getElementById("vastus5");
    let email=document.getElementById("email");
    let perenimi=document.getElementById("perenimi");
    let vastus3=document.getElementById("vastus3");
    let synd=document.getElementById("synd");
    let naine=document.getElementById("naine");
    let muu=document.getElementById("muu");
    let vastus4=document.getElementById("vastus4");



    vastus.innerHTML="";

    vastus2.innerHTML="";

    vastus3.innerHTML="";

    vastus4.innerHTML="";

    vastus5.innerHTML="";

}
function saadaNupp(){
    let eesnimi=document.getElementById("eesnimi");
    let email=document.getElementById("email");
    let perenimi=document.getElementById("perenimi");
    let synd=document.getElementById("synd");
    let naine=document.getElementById("naine");
    let muu=document.getElementById("muu");
    let vastus6=document.getElementById("vastus6");

    vastus6.innerHTML="Sinu nimi on "+eesnimi.value + "<br>Sinu perekonnanimi on "+perenimi.value +  "<br>Sa oled sündinud "+synd.value
    + "<br>Sa oled mees " + "<br>Sa oled naine" + "<br>Kes sa oled???" +  "<br>Sinu e-posti address on "+email.value;
            }