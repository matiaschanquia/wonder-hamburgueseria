

const botonAbrir = document.getElementById("boton-abrir");
const botonCerrar = document.getElementById("boton-cerrar");
const itemsMenu = document.querySelectorAll(".item-menu");
const nav = document.getElementById("nav-flotante");



botonAbrir.addEventListener("click", function() {
    nav.classList.add("active")
});

botonCerrar.addEventListener("click", function() {
    cerrarNav();
});

itemsMenu.forEach(item => {
    item.addEventListener("click", function() {
        cerrarNav();
    })
});

function cerrarNav() {
    nav.classList.remove("active");
}



