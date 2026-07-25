function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach((el)=>{
    observer.observe(el);
});
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hide");
    }, 200);
});
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
});