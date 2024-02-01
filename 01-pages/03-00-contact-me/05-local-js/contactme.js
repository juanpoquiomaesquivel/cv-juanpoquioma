const emailInput = document.getElementById("myEmail");
const topicInput = document.getElementById("myTopic");
const descriptionInput = document.getElementById("description");

emailInput.addEventListener("keypress", (evt) => {
    const key = evt.key;

    if (!/^\d$/.test(key)) {
        evt.preventDefault();
    }
});
