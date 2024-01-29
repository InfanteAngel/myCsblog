const mobileNav = document.getElementById("toggleNav");
const bToggle = document.getElementById("burger");
const xToggle =document.getElementById("navToggleX");
bToggle.setAttribute("aria-hidden", "false");

bToggle.setAttribute("aria-hidden", "true");

window.addEventListener("scroll", function(){
    var headerNav = document.getElementById("primary-nav");
    headerNav.classList.toggle("primary-clr", window.scrollY > 0);
})

function toggle(){
    if(bToggle.getAttribute("aria-hidden") == "false"){
        bToggle.setAttribute("aria-hidden", "true");
        bToggle.classList.toggle("visually-hidden");

        mobileNav.setAttribute("aria-hidden", "false");
        mobileNav.classList.remove("visually-hidden");
    }
    else{
        bToggle.setAttribute("aria-hidden", "false");
        bToggle.classList.remove("visually-hidden");

        mobileNav.setAttribute("aria-hidden", "true");
        mobileNav.classList.toggle("visually-hidden");
    }
}


bToggle.addEventListener("click", toggle);
xToggle.addEventListener("click", toggle);
