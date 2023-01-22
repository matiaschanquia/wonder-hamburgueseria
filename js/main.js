

const botonAbrir = document.getElementById("boton-abrir");
const botonCerrar = document.getElementById("boton-cerrar");
const itemsMenu = document.querySelectorAll(".item-menu");
const nav = document.getElementById("nav-flotante");
const body = document.body;


botonAbrir.addEventListener("click", function(e) {
    e.stopPropagation();
    nav.classList.add("active")
});

botonCerrar.addEventListener("click", function() {
    cerrarNav();
});

itemsMenu.forEach(item => {
    item.addEventListener("click", cerrarNav)
});

nav.addEventListener("click", (e) => {
    e.stopPropagation();
})

body.addEventListener("click", cerrarNav)

function cerrarNav() {
    nav.classList.remove("active");
}



