let egp1=document.getElementById('egp')
let cny=document.getElementById('CNY')
egp1.onkeyup=function(){
cny.value=egp1.value*6.82;

}
cny.onkeyup=function(){
    egp1.value=cny.value/6.82;
}