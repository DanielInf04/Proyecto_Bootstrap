window.onload = function() {
    // Obtén todos los enlaces de la barra de navegación
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
    // Agrega un evento de clic a cada enlace
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        // Primero, elimina la clase 'active' de todos los enlaces
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Luego, agrega la clase 'active' al enlace que fue clickeado
        this.classList.add('active');
      });
    });
}