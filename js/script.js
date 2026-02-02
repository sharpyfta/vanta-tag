// Example: simple fade-in animations
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("section");
    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transition = "opacity 1s ease-in-out";
    });

    setTimeout(() => {
        elements.forEach(el => {
            el.style.opacity = 1;
        });
    }, 200);
});
