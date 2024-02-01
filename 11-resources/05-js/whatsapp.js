export function createWhatsApp() {
    const floatingWhatsAppButton = document.createElement("button");
    floatingWhatsAppButton.className = "whatsApp";

    const icon = document.createElement("img");
    icon.src = "../../11-resources/02-images/whatsapp.webp";

    floatingWhatsAppButton.appendChild(icon);

    document.body.appendChild(floatingWhatsAppButton);
}