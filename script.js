// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Agrega efecto de desplazamiento fijo al hacer scroll
window.addEventListener('load', function() {
    var header = document.getElementById('main-header');
    var navbar = document.querySelector('.navbar');
    var spacer = document.querySelector('.navbar-spacer');  
    
    var navbarHeight = navbar.offsetHeight;

    function handleScroll() {
        if (window.scrollY > navbarHeight) {
            navbar.classList.add('fixed-top');
            spacer.style.display = 'block';  // muestra el espaciador
            spacer.style.height = navbarHeight + 'px';  // 
        } else {
            navbar.classList.remove('fixed-top');
            spacer.style.display = 'none';  // oculta el espaciador
            spacer.style.height = '0';  // borra su altura
        }
    }
    // Llamar a handleScroll cuando se desplace y cuando se cargue la página
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});


document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

