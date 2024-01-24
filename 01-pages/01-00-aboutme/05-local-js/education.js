document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion__item");

    accordionItems.forEach((item) => {
        const button = item.querySelector(".accordion__item__button");
        const targetId = item.getAttribute("data-jx-target");
        const targetBody = document.querySelector(targetId);

        button.addEventListener("click", function () {
            // Toggle the visibility of the accordion body
            if (targetBody) {
                targetBody.hidden = !targetBody.hidden;
            }
        });
    });
});

function toggleReflection() {
    console.log("happening")
    const chevronIcon = document.getElementById("chevron-icon");
    chevronIcon.classList.toggle("flipY");
}
