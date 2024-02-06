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
    var headerHeight = header.offsetHeight;

    function handleScroll() {
        if (window.scrollY > headerHeight) {
            navbar.classList.add('fixed-top');
        } else {
            navbar.classList.remove('fixed-top');
        }
    }
    // Llamar a handleScroll cuando se desplace y cuando se cargue la página
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});


