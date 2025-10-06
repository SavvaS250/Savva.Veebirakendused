const pilt1Hind=2;
const pilt2Hind=10;
const pilt3Hind=7;
const pilt4Hind=9;
const pilt5Hind=3.9;

function naitaPilt(){
    let pilt=document.getElementById('pilt');

    const pildid=[
        'images/1.png',
        'images/2.png',
        'images/3.png',
        'images/4.png',
        'images/5.png'
    ];

    if(v1.checked){
        pilt.src=pildid[0];
    }
    if(v2.checked){
        pilt.src=pildid[1];
    }
    if(v3.checked){
        pilt.src=pildid[2];
    }
    if(v4.checked){
        pilt.src=pildid[3];
    }
    if(v5.checked){
        pilt.src=pildid[4];
    }

}

function arvuta(kogus, hind){
    return (kogus*hind).toFixed(2);
}

function arvutaPiltHind(){
    let vastus=document.getElementById('vastus');
    let kogus=document.getElementById('kogus');
    let v1=document.getElementById('v1');
    let v2=document.getElementById('v2');
    let v3=document.getElementById('v3');
    let v4=document.getElementById('v4');
    let v5=document.getElementById('v5');
    let pilt=document.getElementById('pilt');

    const pildid=[
        'images/1.png',
        'images/2.png',
        'images/3.png',
        'images/4.png',
        'images/5.png'
    ];
    if(v1.checked){
        vastus.innerHTML=arvuta(kogus.value, pilt1Hind) +" euro";
        pilt.src=pildid[0];
    }
    if(v2.checked){
        vastus.innerHTML=arvuta(kogus.value, pilt2Hind) +" euro";
        pilt.src=pildid[1];
    }
    if(v3.checked){
        vastus.innerHTML=arvuta(kogus.value, pilt3Hind) +" euro";
        pilt.src=pildid[2];
    }
    if(v4.checked){
        vastus.innerHTML=arvuta(kogus.value, pilt4Hind) +" euro";
        pilt.src=pildid[3];
    }
    if(v5.checked){
        vastus.innerHTML=arvuta(kogus.value, pilt5Hind) +" euro";
        pilt.src=pildid[4];
    }
}