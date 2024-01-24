const paragraphs = document.querySelectorAll(".scrollable");
let interval = null;
let timeout = null;
let direction = 1;

paragraphs.forEach((p) => {
    p.addEventListener("mouseenter", function () {
        if (!interval) {
            interval = requestAnimationFrame(scrollContent);
        }
    });

    p.addEventListener("mouseleave", function () {
        cancelAnimationFrame(interval);
        clearTimeout(timeout);
        interval = null;
        p.scrollTop = 0;
        direction = 1;
    });

    const scrollContent = () => {
        p.scrollTop += direction;

        if (
            p.scrollTop === 0 ||
            p.scrollTop === p.scrollHeight - p.clientHeight
        ) {
            timeout = setTimeout(() => {
                direction *= -1;
                interval = requestAnimationFrame(scrollContent);
            }, 2000);
        } else {
            interval = requestAnimationFrame(scrollContent);
        }

        if (!p.matches(":hover")) {
            if (interval) {
                cancelAnimationFrame(interval);
                interval = null;
            }
        }
    };
});
