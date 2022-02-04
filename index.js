let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    console.log("tıklandı");
    navbar.classList.toggle("focus");
}
window.onscroll = () => {
    navbar.classList.remove("focus");
}