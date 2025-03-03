<<<<<<< HEAD
//hol
=======
document.addEventListener("DOMContentLoaded", function () {
    const headline = document.getElementById("headline");

    headline.addEventListener("click", function (event) {
        // Crear un círculo
        const circle = document.createElement("div");
        circle.classList.add("click-circle");

        // Posicionar el círculo donde se hizo clic
        const x = event.clientX;
        const y = event.clientY;
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;

        // Agregar el círculo al body
        document.body.appendChild(circle);

        // Eliminar el círculo después de 3 segundos
        setTimeout(() => {
            circle.remove();
        }, 3000); // 3 segundos
    });
});
//Ejecuta la función iniciar cuando la página web haya se haya cargado por completo
window.addEventListener('load', startPage, false);

function startPage() {
    //Selecciona todas las imagenes con la clase 'imagen-interactive'
    const images = document.querySelectorAll('.image-interactive');

    images.forEach(image => {
        //Guarda la imagen original en el atributo 'data-original'
        image.setAttribute('data-original', image.src);
        //Señala el evento que se producirá cuando el cursor del mouse aparece sobre el elemento image
        image.addEventListener('mouseover', changeImage, false);
        //Señala el evento que se producirá cuando el cursor del mouse se aleje del elemento image
        image.addEventListener('mouseleave', restoreImage, false);
    })
}

function restoreImage(event){
    //Indica el elemento al que se acerca el mouse
    const image = event.target;
    //Obtiene la ruta de la imagen original desde el atributo 'data-original'
    const originalImage = image.getAttribute('data-original');
    image.style.opacity = 0; //Desvanece la imagen
    setTimeout(() => {
        image.src = originalImage; //Restaura a la imagen original después de 250ms (tiempo de la transición)
        image.style.opacity = 1; //Restaura la opacidad de la imagen con un desvanecimiento
    }, 250);
}

function changeImage(event) {
    //Indica el elemento que el mouse dejó
    const image = event.target;
    //Obtiene la ruta de la nueva imagen desde el atributo 'data-change'
    const newImage = image.getAttribute('data-change');
    image.style.opacity = 0; //Desvanece la imagen antes de cambiarla
    setTimeout(() => {
        image.src = newImage; //Cambia la imagen después de 250ms de pasar el mouse (tiempo de la transición)
        image.style.opacity = 1; //Restaura la opacidad de la nueva imagen con un desvanecimiento
    }, 250);
}
>>>>>>> main
