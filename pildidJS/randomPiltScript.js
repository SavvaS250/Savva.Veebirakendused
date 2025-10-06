function juhuslikPilt(){
    //massiiv
    const pildid=[
        'images/1.png',
        'images/2.png',
        'images/3.png',
        'images/4.png',
        'images/5.png'
    ];
    const randomPilt=document.getElementById('randomPilt');
    //Math.random() - juhuslik arv
    //Math.floor() - võtab arvust täisosa
    //pildid.length - mitu pilti on massiivis
    const juhuslikArv=Math.floor(Math.random()*pildid.length);

    randomPilt.src=pildid[juhuslikArv];
}
function piltmyistatus(){
    let randomPilt=document.getElementById('randomPilt');
    let vastus=document.getElementById('vastus');
    let valik=document.getElementsByName('valik');//mitu elements ühe nimega valik

    //tsükel for
    for(let i=0;i<valik.length;i++){
        if(valik[i].checked){
            //radio nupust võtakse value mida võrdleme pildi asukohaga
            if(randomPilt.getAttribute('src')==valik[i].value){
                vastus.innerHTML="Õige vastus!";
                vastus.style.color="green";
            }
            else{
                vastus.innerHTML="Mõtle veel";
                vastus.style.color="red";
            }
        }
    }
}
function arvuta(kogus, hind){
    return (kogus*hind).toFixed(2);
    //toFixed - ümardab 2 märki peale koma
}

const pilt1Hind=2;
const pilt2Hind=10;
const pilt3Hind=7;
const pilt4Hind=9;
const pilt5Hind=3.9;


function arvutaPiltHind(){
    let vastus2=document.getElementById('vastus2');
    let tk=document.getElementById('tk');
    let v1=document.getElementById('v1');
    let v2=document.getElementById('v2');
    let v3=document.getElementById('v3');
    let v4=document.getElementById('v4');
    let v5=document.getElementById('v5');

    if(v1.checked){
        vastus2.innerHTML=arvuta(tk.value, pilt1Hind) +" euro";
    }
    if(v2.checked){
        vastus2.innerHTML=arvuta(tk.value, pilt2Hind) +" euro";
    }
    if(v3.checked){
        vastus2.innerHTML=arvuta(tk.value, pilt3Hind) +" euro";
    }
    if(v4.checked){
        vastus2.innerHTML=arvuta(tk.value, pilt4Hind) +" euro";
    }
    if(v5.checked){
        vastus2.innerHTML=arvuta(tk.value, pilt5Hind) +" euro";
    }
}