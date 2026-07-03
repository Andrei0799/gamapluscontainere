document.addEventListener("DOMContentLoaded", () => {

    calculeazaPret();

});

function calculeazaPret() {

    let pret = parseInt(document.getElementById("dimensiune").value);

pret += parseInt(document.getElementById("panou").value);

    if(document.getElementById("baie").checked) pret += 600;

    if(document.getElementById("bucatarie").checked) pret += 800;

    if(document.getElementById("electric").checked) pret += 300;

    if(document.getElementById("ac").checked) pret += 500;

    if(document.getElementById("terasa").checked) pret += 900;

    document.getElementById("pretFinal").innerHTML =

        "💰 Preț estimativ: <strong>" +

        pret.toLocaleString("ro-RO") +

        " €</strong>";

}

function trimiteWhatsApp(){

    calculeazaPret();

    let pret = Number(document.getElementById("dimensiune").value);

    pret += Number(document.getElementById("panou").value);

    if(document.getElementById("baie").checked) pret += 600;

    if(document.getElementById("bucatarie").checked) pret += 800;

    if(document.getElementById("electric").checked) pret += 300;

    if(document.getElementById("ac").checked) pret += 500;

    if(document.getElementById("terasa").checked) pret += 900;

    const mesaj =

`📦 CERERE OFERTĂ GAMA PLUS

👤 Nume: ${document.getElementById("nume").value}

📞 Telefon: ${document.getElementById("telefon").value}

📍 Județ: ${document.getElementById("judet").value}

🏙️ Localitate: ${document.getElementById("localitate").value}

📏 Dimensiune: ${document.getElementById("dimensiune").options[document.getElementById("dimensiune").selectedIndex].text}

🧱 Panou: ${document.getElementById("panou").options[document.getElementById("panou").selectedIndex].text}

🎨 Culoare: ${document.getElementById("culoare").value}

🚪 Uși: ${document.getElementById("usi").value}

🪟 Ferestre: ${document.getElementById("ferestre").value}

🚿 Baie: ${document.getElementById("baie").checked ? "Da" : "Nu"}

🍽️ Bucătărie: ${document.getElementById("bucatarie").checked ? "Da" : "Nu"}

⚡ Instalație electrică: ${document.getElementById("electric").checked ? "Da" : "Nu"}

❄️ Aer condiționat: ${document.getElementById("ac").checked ? "Da" : "Nu"}

🏡 Terasă: ${document.getElementById("terasa").checked ? "Da" : "Nu"}

💰 Buget: ${document.getElementById("buget").value}

💵 Buget personalizat: ${document.getElementById("bugetPersonalizat").value}

📅 Termen: ${document.getElementById("termen").value}

💶 Preț estimativ: ${pret.toLocaleString("ro-RO")} €

📝 Alte detalii:

${document.getElementById("detalii").value}`;

    window.open(

        "https://wa.me/40799415521?text=" + encodeURIComponent(mesaj),

        "_blank"

    );
console.log(pret);
}
