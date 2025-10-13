//sirge joon
function sirgeJoon(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d"); // anname tahvlinimi on t
        // joon
        t.beginPath();
        t.strokeStyle="white"
        t.lineWidth = 1;
        t.moveTo(20,80); // algus punkt
        t.lineTo(50,190); // lõpppunkt
        t.stroke();
    }
}
//kolmnurk
function kolmnurk(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d"); // anname tahvlinimi on t
        // joon
        t.beginPath();
        t.strokeStyle="white"
        t.fillStyle="white"
        t.lineWidth = 1;
        t.moveTo(50,100); // algus punkt
        t.lineTo(150,100);
        t.lineTo(150,200);
        t.lineTo(50,100); // lõpppunkt
        t.stroke();
        t.fill();
    }
}
function puhasta(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d"); // anname tahvlinimi on t
        t.clearRect(0,0,300,250); // 0, 0 - vasak üleval tahvli nurk  300 - tahvli laius, 250 - kõrgus
    }
}
//Ring
function ring(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");
    let r=document.getElementById("raadius");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d"); // anname tahvlinimi on t
        // ümberjoon
        t.beginPath();
        t.strokeStyle="grey"
        t.lineWidth = 1;
        t.arc(190, 190, r.value, 0, 2*Math.PI, true); // x, y - keskpunkt
        t.stroke();

        // ring
        t.beginPath();
        t.strokeStyle="grey"
        t.fillStyle="grey"
        t.lineWidth = 1;
        t.arc(80, 190, r.value, 0, 2*Math.PI, true); // x, y - keskpunkt
        t.stroke();
        t.fill();
    }
}
// ristkülik
function ristkylik(){
    const tahvel=document.getElementById("tahvel");
    let laius=document.getElementById("laius");
    let korgus=document.getElementById("korgus");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d"); // anname tahvlinimi on t
        t.fillStyle="grey"
        t.fillRect(50,30,laius.value,korgus.value); // 0, 0 - vasak üleval tahvli nurk  300 - tahvli laius, 250 - kõrgus
    }
}

function pilt(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d"); // anname tahvlinimi on t
        const fail=new Image();
        fail.src="https://picsum.photos/200/300";
        fail.onload = () => {
            t.drawImage(fail, 50, 50, 100, 200);
        }

    }
}



function valgusfoor(){
    const tahvel=document.getElementById("tahvel");
    let laius=document.getElementById("laius");
    let korgus=document.getElementById("korgus");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d"); // anname tahvlinimi on t
        t.fillStyle="grey"
        t.fillRect(50,30,100,200); // 0, 0 - vasak üleval tahvli nurk  300 - tahvli laius, 250 - kõrgus

        t.beginPath();
        t.strokeStyle="black"
        t.fillStyle="black"
        t.lineWidth = 1;
        t.arc(100, 190, 25, 0, 2*Math.PI, true); // x, y - keskpunkt
        t.stroke();
        t.fill();

        t.beginPath();
        t.strokeStyle="black"
        t.fillStyle="black"
        t.lineWidth = 1;
        t.arc(100, 130, 25, 0, 2*Math.PI, true); // x, y - keskpunkt
        t.stroke();
        t.fill();

        t.beginPath();
        t.strokeStyle="black"
        t.fillStyle="black"
        t.lineWidth = 1;
        t.arc(100, 70, 25, 0, 2*Math.PI, true); // x, y - keskpunkt
        t.stroke();
        t.fill();
    }
}

function roheline(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");
    let r=document.getElementById("raadius");
    if(tahvel.getContext){

        let t=tahvel.getContext("2d");
        // ring
        t.beginPath();
        t.strokeStyle="darkgreen"
        t.fillStyle="darkgreen"
        t.lineWidth = 1;
        t.arc(100, 190, 25, 0, 2*Math.PI, true); // x, y - keskpunkt
        t.stroke();
        t.fill();

        t.beginPath();
        t.strokeStyle="black"
        t.fillStyle="black"
        t.lineWidth = 1;
        t.arc(100, 130, 25, 0, 2*Math.PI, true); // x, y - keskpunkt
        t.stroke();
        t.fill();

        t.beginPath();
        t.strokeStyle="black"
        t.fillStyle="black"
        t.lineWidth = 1;
        t.arc(100, 70, 25, 0, 2*Math.PI, true); // x, y - keskpunkt
        t.stroke();
        t.fill();

    }
}

function kollane(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");
    let r=document.getElementById("raadius");
    if(tahvel.getContext){

        let t=tahvel.getContext("2d");
        // ring
        t.beginPath();
        t.strokeStyle="yellow"
        t.fillStyle="yellow"
        t.lineWidth = 1;
        t.arc(100, 130, 25, 0, 2*Math.PI, true); // x, y - keskpunkt
        t.stroke();
        t.fill();

        // ring
        t.beginPath();
        t.strokeStyle="black"
        t.fillStyle="black"
        t.lineWidth = 1;
        t.arc(100, 70, 25, 0, 2*Math.PI, true); // x, y - keskpunkt
        t.stroke();
        t.fill();

        t.beginPath();
        t.strokeStyle="black"
        t.fillStyle="black"
        t.lineWidth = 1;
        t.arc(100, 190, 25, 0, 2*Math.PI, true); // x, y - keskpunkt
        t.stroke();
        t.fill();
    }
}

function punane(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");
    let r=document.getElementById("raadius");
    if(tahvel.getContext){

        let t=tahvel.getContext("2d");
        // ring
        t.beginPath();
        t.strokeStyle="red"
        t.fillStyle="red"
        t.lineWidth = 1;
        t.arc(100, 70, 25, 0, 2*Math.PI, true); // x, y - keskpunkt
        t.stroke();
        t.fill();

        t.beginPath();
        t.strokeStyle="black"
        t.fillStyle="black"
        t.lineWidth = 1;
        t.arc(100, 130, 25, 0, 2*Math.PI, true); // x, y - keskpunkt
        t.stroke();
        t.fill();

        t.beginPath();
        t.strokeStyle="black"
        t.fillStyle="black"
        t.lineWidth = 1;
        t.arc(100, 190, 25, 0, 2*Math.PI, true); // x, y - keskpunkt
        t.stroke();
        t.fill();
    }
}