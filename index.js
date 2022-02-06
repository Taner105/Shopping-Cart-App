let menu = document.getElementById('menu-icon');
let navbar = document.getElementsByClassName('navbar');

menu.onclick = () => {
    console.log("tıklandı");
    navbar.classList.toggle("active")
}
// window.onscroll = () => {
//     navbar.classList.remove("active")
// }


let previewContainer = document.getElementsByClassName("products-preview");
let previewBox = document.getElementsByClassName("detail");

document.querySelectorAll(".shop-container .box").forEach(product => {

    product.onclick = () => {
        previewContainer[0].style.display = "flex"
        let name = product.getAttribute("data-name");
        // console.log("tıklandı");


        for (let i = 0; i < previewBox.length; i++) {
            let target = previewBox[i].getAttribute("data-target")
            if (name == target) {
                previewBox[i].classList.add("active");

            }
        }
    }

});

for (let i = 0; i < previewBox.length; i++) {
    previewBox[i].querySelector(".bx-x").onclick = () => {
        // console.log("tıklandı");
        previewBox[i].classList.remove("active")
        previewContainer[0].style.display = "none"
    }
}
