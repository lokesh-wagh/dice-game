var button = document.querySelector("#button");
button.addEventListener("click",function(){
    var a=Math.floor(Math.random()*6+1);
var b=Math.floor(Math.random()*6+1);
var image1=document.querySelector("#image1");
var image2=document.querySelector("#image2");
var heading=document.querySelector("#heading");

image1.setAttribute("src","/dice"+a.toString()+".png");
image2.setAttribute("src","/dice"+b.toString()+".png");
if(a>b){
heading.textContent="Player One Wins";

}
else{
    if(a<b){
    heading.textContent="Player Two Wins"; 
}
else{
    heading.textContent="It's a Draw";
}}


})
var button1=document.querySelector("#button1");
button1.addEventListener("click",function(){
    var image1=document.querySelector("#image1");
    var image2=document.querySelector("#image2");
    image1.setAttribute("src","/dice6.png");
    image2.setAttribute("src","/dice6.png");
    var heading=document.querySelector("#heading");
    heading.textContent="Roll dice";
})
