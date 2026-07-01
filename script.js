document.addEventListener("DOMContentLoaded", function () {

    const butoane = document.querySelectorAll("a");

    butoane.forEach(function (buton) {

        buton.addEventListener("mouseenter", function () {

            this.style.transform = "scale(1.05)";

        });

        buton.addEventListener("mouseleave", function () {

            this.style.transform = "scale(1)";

        });

    });

    console.log("Gama PLUS Containere - Site încărcat cu succes!");

});