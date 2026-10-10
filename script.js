/* ==================================================
   MOBILE NAVIGATION
================================================== */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");


menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("open");

});



/* ==================================================
   CLOSE MENU AFTER CLICKING A LINK
================================================== */

const navLinks = document.querySelectorAll(".main-nav a");


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("open");

    });

});



/* ==================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
================================================== */

document.addEventListener("click", (event) => {

    const clickedInsideMenu =
        mainNav.contains(event.target);

    const clickedToggle =
        menuToggle.contains(event.target);


    if (
        !clickedInsideMenu &&
        !clickedToggle
    ) {

        mainNav.classList.remove("open");

    }

});



/* ==================================================
   IMAGE ERROR CHECK
================================================== */

const images = document.querySelectorAll("img");


images.forEach((image) => {

    image.addEventListener("error", () => {

        console.warn(
            "Image could not be loaded:",
            image.src
        );

    });

});