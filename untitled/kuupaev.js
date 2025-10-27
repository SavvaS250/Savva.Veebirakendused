function tana(){
    const now=new Date();
    const paev=now.getDate();
    const kuu=now.getMonth()+1;
    const aasta=now.getFullYear();

    const kuupaev="Täna on "+paev+". "+kuu+". "+aasta;

    const tunnid = now.getHours();
    const minutid = now.getMinutes();

    const kellaAeg ="Kell on "+tunnid+":"+minutid;
    const kellJaKuupaev = "Täna on "+paev+". "+kuu+". "+aasta+" ja kell on "+tunnid+":"+minutid;

    let aeg=document.getElementById("aeg")
    aeg.innerHTML=kuupaev+"<br>"+kellaAeg+"<br>"+kellJaKuupaev;

    console.log(kuupaev);
    console.log(kellaAeg);
    console.log(kellJaKuupaev);
}
function sunnipaev(){
    let paevad=document.getElementById("paevad");

    let tana= new Date();
    let synd=new Date(tana.getFullYear(), 9-1, 11);

    if(synd<tana){
        synd=new Date(tana.getFullYear()+1, 9-1, 11);
    }

    let vahe=synd.getTime()-tana.getTime();
    let paevi= (vahe/(1000*60*60*24)).toFixed(2);
    paevad.innerHTML=paevi +"päeva";
    console.log("minu sünnipäevi "+paevi+" päeva");
}