const abrirMenu = document.querySelector(".abrir-menu");
const menu = document.querySelector(".menu");
const cerrarMenu = document.querySelector(".cerrar-menu");

function añadirEventos()
{
    abrirMenu.addEventListener("touchstart", abrir);
    abrirMenu.addEventListener("click", abrir);

    cerrarMenu.addEventListener("touchstart", cerrar);
    cerrarMenu.addEventListener("click", cerrar);
}

function abrir()
{
    menu.style.display = "flex"
    menu.style.flexDirection = "column";
    menu.style.gap = "20px"
}

function cerrar()
{
    menu.style.display = "none"
}

export {añadirEventos};