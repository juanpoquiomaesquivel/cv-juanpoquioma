export function createHeader() {
    var header = document.createElement("header");
    var nav = document.createElement("nav");

    var navBrand = document.createElement("div");
    navBrand.textContent = "marca";
    navBrand.className = "header__brand";

    var navBar = document.createElement("div");
    navBar.className = "header__bar";

    var navLanguage = document.createElement("div");
    navLanguage.className = "header__language";
    var navLangToggle = document.createElement("input");
    navLangToggle.type = "checkbox";

    navLanguage.appendChild(navLangToggle);

    var routes = [
        {
            label: "Explora",
            url: "../00-00-index/index.html",
        },
        {
            label: "Sobre mí",
            url: "../01-00-aboutme/aboutme.html",
        },
        {
            label: "Portafolio",
            url: "#",
        },
        {
            label: "Contáctame",
            url: "../03-00-contact-me/contact-me.html",
        },
    ];

    routes.forEach((route) => {
        var link = document.createElement("a");
        link.href = route.url;
        link.textContent = route.label;

        if (link.href === window.location.href) {
            link.classList.add("active");
        }

        navBar.appendChild(link);
    });

    nav.appendChild(navBrand);
    nav.appendChild(navBar);
    nav.appendChild(navLanguage);

    header.appendChild(nav);
    header.className = "header";

    document.getElementById("header").appendChild(header);
}
