const scrollTopBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    scrollTopBtn.style.display = scrollPosition > 250 ? "flex" : "none";
});
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
