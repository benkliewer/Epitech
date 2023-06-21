const slide = ["assets/images/Projet/img_01.jpg", "assets/images/Projet/img_02.jpg", "assets/images/Projet/img_03.jpg","assets/images/Projet/img_04.jpg"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

setInterval("ChangeSlide(1)", 5000);