document.getElementById('but').addEventListener ('click' , function() {
const selectedaba=document.querySelector('input[name="aba"]:checked');
if(selectedaba){
let page="";
if(selectedaba.value==="num"){
    page="test4.html"
}else if(selectedaba.value==="num1"){
    page="test5.html"
   
}else{
    page="test6.html"
}
location.href=page;
}else{
    alert("please select a cuurrency.")
}

})