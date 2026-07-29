function toggleMenu() {
    const menu = document.getElementById("mobileMenu");

    if (menu.style.right === "0px") {
        menu.style.right = "-260px";
    } else {
        menu.style.right = "0px";
    }
}
window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").classList.add("hide");

},2500);

});
// =======================
// LOADER PARTICLES
// =======================

const canvas = document.getElementById("loaderCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize",resizeCanvas);

const particles=[];

for(let i=0;i<70;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,

r:Math.random()*2+1,

speed:Math.random()*0.4+0.2,

alpha:Math.random()

});

}

function animateLoader(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.beginPath();

ctx.fillStyle=`rgba(97,165,255,${p.alpha})`;

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fill();

p.y-=p.speed;

if(p.y<0){

p.y=canvas.height;

p.x=Math.random()*canvas.width;

}

});

requestAnimationFrame(animateLoader);

}

animateLoader();