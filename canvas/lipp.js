function eestiLipp(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext){
        let l=lipp.getContext("2d");
        l.fillStyle="blue";
        l.fillRect(0,0,330,70);
        l.fillStyle="black";
        l.fillRect(0,70,330,70);
        l.fillStyle="white";
        l.fillRect(0,140,330,70);
    }
}
function prantsusmaaLipp(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext){
        let l=lipp.getContext("2d");
        l.fillStyle="blue";
        l.fillRect(0,0,110,210);
        l.fillStyle="white";
        l.fillRect(110,0,110,210);
        l.fillStyle="red";
        l.fillRect(220,0,110,210);
    }
}
function mehhikoLipp(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext){
        let l=lipp.getContext("2d");
        l.fillStyle="darkgreen";
        l.fillRect(0,0,110,210);
        l.fillStyle="white";
        l.fillRect(110,0,110,210);
        l.fillStyle="red";
        l.fillRect(220,0,110,210);

        const fail=new Image();
        fail.src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Coat_of_arms_of_Mexico.svg/250px-Coat_of_arms_of_Mexico.svg.png";
        fail.onload = () => {
            l.drawImage(fail, 120, 85, 90, 50);
        }
    }
}