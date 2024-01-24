function createFooter() {
    var footer = document.createElement("footer");
    footer.textContent = "este será el footer";

    var fooContent = document.createElement("div");
    fooContent.textContent = "uno";
    fooContent.className = "footer__content";

    var fooCopyright = document.createElement("small");
    fooCopyright.textContent = "© 2024 Todos los derechos reservados.";
    fooCopyright.className = "footer__copyright";

    footer.appendChild(fooContent);
    footer.appendChild(fooCopyright);

    document.getElementById("footer").appendChild(footer);
}

createFooter();
