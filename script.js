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
function trimiteWhatsApp() {

const nume = document.getElementById("nume").value;

const telefon = document.getElementById("telefon").value;

const judet = document.getElementById("judet").value;

const localitate = document.getElementById("localitate").value;

const dimensiune = document.getElementById("dimensiune").value;

const mesaj =

`📦 CERERE NOUĂ DE OFERTĂ

👤 Nume: ${nume}

📞 Telefon: ${telefon}

📍 Județ: ${judet}

🏙️ Localitate: ${localitate}

📏 Dimensiune: ${dimensiune}

Trimis de pe site-ul GAMA PLUS Containere`;

window.open(

"https://wa.me/40799415521?text=" + encodeURIComponent(mesaj),

"_blank"

);

}
