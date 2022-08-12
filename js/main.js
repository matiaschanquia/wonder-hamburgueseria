

const botonAbrir = document.getElementById("boton-abrir");
const botonCerrar = document.getElementById("boton-cerrar");
const itemsMenu = document.querySelectorAll(".item-menu");
const nav = document.getElementById("nav-flotante");



botonAbrir.addEventListener("click", function() {
    nav.classList.remove("display-none")
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
    nav.classList.add("display-none");
}



