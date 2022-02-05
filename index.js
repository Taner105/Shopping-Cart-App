let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener("click", () => {
    console.log("tıklandı");
    menu.classList.toggle("active");
    navbar.classList.toggle("active")
})
// window.onscroll = () => {
//     navbar.classList.remove("active");
// }
document.querySelectorAll(".navbar").forEach(n => n.addEventListener("click", () => {
    menu.classList.remove("active");
    navbar.classList.remove("active")
}))


