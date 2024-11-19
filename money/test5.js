let egp1 =document.getElementById('egp');
let Sar =document.getElementById('Sar');
egp1.onkeyup=function(){
    Sar.value=egp1.value*13.12
}
Sar.onkeyup=function(){
egp1.value=Sar.value/13.12
}
