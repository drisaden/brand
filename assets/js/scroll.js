let scrollToTopBtn = document.querySelector("#scrollToTopBtn");
const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

scrollToTopBtn.addEventListener("click", () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});