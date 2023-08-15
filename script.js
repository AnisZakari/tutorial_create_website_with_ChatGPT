document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            // You can add other dynamic behavior here if needed
        });
        card.addEventListener("mouseleave", () => {
            // You can add other dynamic behavior here if needed
        });
    });
});