// const nav = document.querySelector('nav');
// const alturaDeTrabado = 885; // Cambiar la altura según sea necesario

// window.addEventListener('scroll', () => {
//   if (window.scrollY > alturaDeTrabado) {
//     nav.classList.add('fixed');
//   } else {
//     nav.classList.remove('fixed');
//   }
// });

// // HERRAMIENTA PARA VER CUANTO SE DESPLAZA LA PAGINA
// window.addEventListener('scroll', () => {
//   console.log(window.scrollY);
// });


ScrollReveal().reveal("#inicio", { delay: 200 });
ScrollReveal().reveal(".servicios", { delay: 150 });
ScrollReveal().reveal(".container", { delay: 150 });
ScrollReveal().reveal(".contact", { delay: 150 });


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
