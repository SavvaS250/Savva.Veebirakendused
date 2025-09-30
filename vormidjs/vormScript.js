function nimiLugemine(){
    //let - muutuja määramine
    let nimi=document.getElementById("nimi");
    let vastus=document.getElementById("vastus");

    //genereerime innerHTML teksti dokumendis
    vastus.innerHTML="Tere, "+nimi.value;
}
function puhasta(){
    //let - muutuja määramine
    let nimi=document.getElementById("nimi");
    let vastus=document.getElementById("vastus");
    let vastus2=document.getElementById("vastus2");
    //genereerime innerHTML teksti dokumendis
    vastus.innerHTML="Vastusekoht";
    nimi.value="";
    vastus2.style.backgroundColor="white";
}
function varvValik(){
    let vastus2=document.getElementById("vastus2");
    let varv=document.getElementById("varv");

    vastus2.style.backgroundColor=varv.value;
}
function radioValik(){
    let naerata=document.getElementById("naerata");
    let kurvasta=document.getElementById("kurvasta");
    let pilt=document.getElementById("pilt");
    let vastus3=document.getElementById("vastus3");

    if(naerata.checked){
        pilt.src="images/Naerunagu.png";
        vastus3.innerText="Naerata siis!";
        vastus3.style.color="purple";
    }
    else if(kurvasta.checked){
        pilt.src="images/Kurbnagu.png";
        vastus3.innerText="Ära kurvasta!";
        vastus3.style.color="purple";
    }
    else{
        pilt.src="";
        vastus3.innerText="Tee oma valiku!";
        vastus3.style.color="purple";
    }
}
function tujuSlider(){
    let tuju=document.getElementById("tuju");
    let vastus4=document.getElementById("vastus4");

    if(tuju.value<30){
        vastus4.innerHTML="Tuju slider näitab " +tuju.value + " punkti.<br> Sa oled kurb(!";
    }
    else if(tuju.value<60){
        vastus4.innerHTML="Tuju slider näitab " +tuju.value + " punkti.<br> Sa oled neutraalne!";
    }
    else{
        vastus4.innerHTML="Tuju slider näitab " +tuju.value + " punkti.<br> Sa oled rõõmus)!";
    }
}
function kooliValik(){
    let vastus5=document.getElementById("vastus5");
    let kool=document.getElementById("kool");

    //selectedIndex, 1 rida on null rida ja javascriptis
    if(kool.selectedIndex!==0){
        vastus5.innerHTML="Sinu unistusekool on "+kool.value;
    }
    else{
        vastus5.innerHTML="Tee oma valik!";
    }
}