let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    console.log("tıklandı");
    navbar.classList.add("active");
}
window.onscroll = () => {
    navbar.classList.remove("active");
}