let egp1 =document.getElementById('egp');
let dor1 =document.getElementById('dor');
egp1.onkeyup=function(){
dor1.value=egp1.value*49.30;

}
dor1.onkeyup=function(){
    egp1.value=dor1.value/49.30;
}
