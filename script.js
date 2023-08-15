document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.backgroundColor = "#555";
        });
        card.addEventListener("mouseleave", () => {
            card.style.backgroundColor = "#333";
        });
    });
});
