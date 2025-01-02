let knapp = document.createElement('button');
knapp.innerText = "Tryck för att se en bild!";
knapp.addEventListener("click", function() { visaBild()});
document.getElementById('bild').appendChild(knapp);

function visaBild() {
    let foto = document.createElement('img');
    foto.src='images/fiol.jpg';
    document.getElementById('bild').replaceChildren(foto);
}
