 // Referencia al botón
 const scrollToTopBtn = document.getElementById('scrollToTopBtn');

 // Mostrar el botón al hacer scroll
 window.onscroll = function () {
   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
     scrollToTopBtn.style.visibility = 'visible';
     scrollToTopBtn.style.opacity = '1';
   } else {
     scrollToTopBtn.style.opacity = '0';
     scrollToTopBtn.style.visibility = 'hidden';
   }
 };
 
 // Acción al hacer clic en el botón
 scrollToTopBtn.addEventListener('click', function () {
   window.scrollTo({ top: 0, behavior: 'smooth' });
 });