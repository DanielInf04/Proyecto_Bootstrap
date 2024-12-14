// Script para cerrar el acordeón al cambiar de página
document.addEventListener('DOMContentLoaded', function () {
    // Cerrar todas las secciones del acordeón al cargar la página
    var myAccordion = document.getElementById('accordionFAQ');
    var collapseElements = myAccordion.querySelectorAll('.accordion-collapse');

    collapseElements.forEach(function (collapseElement) {
    // Asegurarse de que todas las secciones estén cerradas
    collapseElement.classList.remove('show');
    });
});

// Script para ocultar el menú al hacer clic en un ítem del navbar en pantallas menores de 992px
document.querySelectorAll('.navbar-nav .nav-link').forEach(function(item) {
    item.addEventListener('click', function() {
        // Solo se ejecuta en pantallas pequeñas (menos de 992px)
        if (window.innerWidth < 992) {
        const navbarCollapse = document.getElementById('navbarNav');
        const navbarToggle = document.querySelector('.navbar-toggler');
        
        // Si el menú está abierto, lo cierra
        if (navbarCollapse.classList.contains('show')) {
            navbarToggle.click();
        }
        }
    });
});