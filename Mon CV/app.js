const body = document.querySelector("body");
const scrollbar = document.querySelector(".scroll")

window.addEventListener("scroll", () => {
    let scroll = window.scrollY / (body.offsetHeight - window.innerHeight);
    let scrollpercent = Math.round(scroll * 100);
    scrollbar.style.width = scrollpercent + "%"
})