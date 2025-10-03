//checkbox valikud
function valiAnsambel(){
    let abba=document.getElementById("abba");
    let the=document.getElementById("the");
    let system=document.getElementById("system");
    let limp=document.getElementById("limp");
    let vastus=document.getElementById("vastus");
    let valik="";

    if(abba.checked){
        valik+=abba.value+", ";
    }
    if(the.checked){
        valik+=the.value +", ";
    }
    if(system.checked){
        valik+=system.value +", ";
    }
    if(limp.checked){
        valik+=limp.value;
    }


    vastus.innerHTML="Sinu valitud muusikud: "+valik;
}
function arvamusLug(){
    let arvamus=document.getElementById("arvamus");
    let vastus2=document.getElementById("vastus2");

    vastus2.innerHTML="Sinu arvamus on: "+arvamus.value;
}
function tunnidPaevas(){
    let tunnid=document.getElementById("tunnid");
    let vastus3=document.getElementById("vastus3");

    vastus3.innerHTML="Sa kuulad muusikat "+tunnid.value+" tundi päevas";
}
function jahEi(){
    let jah=document.getElementById("jah");
    let ei=document.getElementById("ei");
    let vastus4=document.getElementById("vastus4");
    let valik="";

    if(jah.checked){
        valik=jah.value;
    }
    if(ei.checked){
        valik=ei.value;
    }

    vastus4.innerHTML="Raadio kuulamine: "+valik;
}
function raadioJaamad(){
    let jaamad=document.getElementById("jaamad");
    let vastus5=document.getElementById("vastus5");

    vastus5.innerHTML="Sinu nimetatud jaamad: "+jaamad.value;
}
function valiMuusika(){
    let metal=document.getElementById("metal");
    let rock=document.getElementById("rock");
    let hip=document.getElementById("hip");
    let pop=document.getElementById("pop");
    let jazz=document.getElementById("jazz");
    let klassik=document.getElementById("klassik");
    let vastus6=document.getElementById("vastus6");


    if(metal.checked){
        vastus6.innerHTML="Sinu vastus: "+metal.value;
    }
    else if(rock.checked){
        vastus6.innerHTML="Sinu vastus: "+rock.value;
    }
    else if(hip.checked){
        vastus6.innerHTML="Sinu vastus: "+hip.value;
    }
    else if(pop.checked){
        vastus6.innerHTML="Sinu vastus: "+pop.value;
    }
    else if(jazz.checked){
        vastus6.innerHTML="Sinu vastus: "+jazz.value;
    }
    else if(klassik.checked){
        vastus6.innerHTML="Sinu vastus: "+klassik.value;
    }

}
function puhasta(){
    let vastus=document.getElementById("vastus");
    let vastus2=document.getElementById("vastus2");
    let vastus3=document.getElementById("vastus3");
    let vastus4=document.getElementById("vastus4");
    let vastus5=document.getElementById("vastus5");
    let vastus6=document.getElementById("vastus6");
    let vastus7=document.getElementById("vastus7");

    vastus.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
    vastus6.innerHTML="";
    vastus7.innerHTML="";
}
function saadaNupp(){
    let abba=document.getElementById("abba");
    let the=document.getElementById("the");
    let system=document.getElementById("system");
    let limp=document.getElementById("limp");
    let vastus7=document.getElementById("vastus7");
    let arvamus=document.getElementById("arvamus");
    let tunnid=document.getElementById("tunnid");
    let jah=document.getElementById("jah");
    let ei=document.getElementById("ei");
    let jaamad=document.getElementById("jaamad");
    let valik1="";
    let valik="";
    let valik2="";
    let metal=document.getElementById("metal");
    let rock=document.getElementById("rock");
    let hip=document.getElementById("hip");
    let pop=document.getElementById("pop");
    let jazz=document.getElementById("jazz");
    let klassik=document.getElementById("klassik");



    if(metal.checked){
        valik2="Sinu vastus: "+metal.value;
    }
    else if(rock.checked){
        valik2="Sinu vastus: "+rock.value;
    }
    else if(hip.checked){
        valik2="Sinu vastus: "+hip.value;
    }
    else if(pop.checked){
        valik2="Sinu vastus: "+pop.value;
    }
    else if(jazz.checked){
        valik2="Sinu vastus: "+jazz.value;
    }
    else if(klassik.checked){
        valik2="Sinu vastus: "+klassik.value;
    }

    if(jah.checked){
        valik1=jah.value;
    }
    if(ei.checked){
        valik1=ei.value;
    }


    if(abba.checked){
        valik+=abba.value+", ";
    }
    if(the.checked){
        valik+=the.value +", ";
    }
    if(system.checked){
        valik+=system.value +", ";
    }
    if(limp.checked){
        valik+=limp.value;
    }

    vastus7.innerHTML="Sinu valitud muusikud: "+valik + "<br>Sinu arvamus on: "+arvamus.value + "<br>Sa kuulad muusikat "+tunnid.value+" tundi päevas"
    + "<br>Raadio kuulamine: "+valik1 + "<br>Sinu nimetatud jaamad: "+jaamad.value +"<br>"+ valik2;
}