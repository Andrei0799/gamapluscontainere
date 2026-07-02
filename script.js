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

const panou = document.getElementById("panou").value;

const culoare = document.getElementById("culoare").value;

const usi = document.getElementById("usi").value;

const ferestre = document.getElementById("ferestre").value;

const baie = document.getElementById("baie").checked ? "Da" : "Nu";

const bucatarie = document.getElementById("bucatarie").checked ? "Da" : "Nu";

const electric = document.getElementById("electric").checked ? "Da" : "Nu";

const ac = document.getElementById("ac").checked ? "Da" : "Nu";

const terasa = document.getElementById("terasa").checked ? "Da" : "Nu";

const buget = document.getElementById("buget").value;

const bugetPersonalizat = document.getElementById("bugetPersonalizat").value;

const termen = document.getElementById("termen").value;

const detalii = document.getElementById("detalii").value;

const mesaj = `📦 CERERE NOUĂ DE OFERTĂ

👤 Nume: ${nume}

📞 Telefon: ${telefon}

📍 Județ: ${judet}

🏙️ Localitate: ${localitate}

📏 Dimensiune: ${dimensiune}

🧱 Grosime panou: ${panou}

🎨 Culoare: ${culoare}

🚪 Uși: ${usi}

🪟 Ferestre: ${ferestre}

🚿 Baie: ${baie}

🍽️ Bucătărie: ${bucatarie}

⚡ Instalație electrică: ${electric}

❄️ Aer condiționat: ${ac}

🏡 Terasă: ${terasa}

💰 Buget: ${buget}

💵 Buget personalizat: ${bugetPersonalizat}

📅 Termen: ${termen}

📝 Alte detalii:

${detalii}`;

window.open(

"https://wa.me/40799415521?text=" + encodeURIComponent(mesaj),

"_blank"

);

}
