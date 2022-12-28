let myOffCanvas = document.getElementById("offcanvasNavbar");
let offCanvasBackDrop = document.getElementsByClassName("offcanvas-backdrop")
let body = document.getElementsByTagName("body")
let navbar = document.getElementsByClassName("navbar")

function hideMyOffCanvas() {
    myOffCanvas.classList.toggle('show');
    offCanvasBackDrop[0].classList.remove('show')

    console.log(body[0])

}



// Tentar fazer o menu desaparecer ao clicar num link.