const imagenes = [
    "https://cdns-images.dzcdn.net/images/cover/7b2469b7a8078d29cbd6cf4c289bdbf4/0x1900-000000-80-0-0.jpg", 
    "https://i.scdn.co/image/ab67616d0000b273c6fd62b30fe5e93ca266329e",
    "https://i1.sndcdn.com/artworks-PRw7ILPmstwaOSq0-Q22rqg-t500x500.jpg"
];

let indiceActual = 0;
const carrusel = document.getElementById("carruseldeimagenes");

document.getElementById("anterior").addEventListener("click", function() {
    indiceActual = (indiceActual === 0) ? imagenes.length - 1 : indiceActual - 1;
    carrusel.src = imagenes[indiceActual];
});

document.getElementById("sig").addEventListener("click", function() {
    indiceActual = (indiceActual === imagenes.length - 1) ? 0 : indiceActual + 1;
    carrusel.src = imagenes[indiceActual];
});