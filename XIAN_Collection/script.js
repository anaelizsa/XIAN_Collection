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

document.addEventListener("DOMContentLoaded", function() {
    var nav = document.getElementById("navsection");
    var header = document.getElementById("header");
    
    window.onscroll = function() {
        var scrollY = window.scrollY || document.documentElement.scrollTop;
        
        if (scrollY >= header.offsetHeight) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    };
});