document.getElementById("learnMoreButton").addEventListener("click", (event) => {
    event.preventDefault();
    const header = document.getElementById("header");
    const learnMorePage = document.getElementById("learnMorePage");

    header.style.display = "none";
    learnMorePage.style.display = "flex";
});