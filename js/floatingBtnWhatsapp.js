window.onload = function() {
    // Referencia al botón de WhatsApp
    const whatsappBtn = document.getElementById('whatsappBtn');

    // Mostrar el botón al hacer scroll
    window.onscroll = function () {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        whatsappBtn.style.visibility = 'visible';
        whatsappBtn.style.opacity = '1';
    } else {
        whatsappBtn.style.opacity = '0';
        whatsappBtn.style.visibility = 'hidden';
    }
    };
}