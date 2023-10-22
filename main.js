const navMenu=document.getElementById("nav-menu");
const navToggle=document.getElementById("nav-toggle");
const navClose= document.getElementById("nav-close");

// if  toggle menu is press
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu")
    })
}
// if cross is presed
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu");
    })
}


const navLinks=document.querySelectorAll(".nav__links");

const linkAction=()=>{
    const navMenu=document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}

navLinks.forEach((n)=>{
    n.addEventListener("click",linkAction);
})



const blurHeader=()=>{
    const header=document.getElementById("header")
    this.scrollY>=50?header.classList.add("blur-header"):header.classList.remove("blur-header");
}

window.addEventListener("scroll",blurHeader)


// scroll up behaviour

const scrollup=()=>{
    const scrollUP=document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUP.classList.add('show-scroll')
    :scrollUP.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollup);




// scroll scecction active links

// const sections=document.querySelectorAll("section[id]")
// const scrollActive=()=>{
//     const scrollY=Math.round(window.pageYOffset);

// }