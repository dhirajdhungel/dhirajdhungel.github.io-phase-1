// const navSlide = function(){
//     var burger = document.querySelector(".burger"),
//         nav = document.querySelector('.page-nav'),
//         navLinks = document.querySelectorAll('nav.page-nav a'); /* target the links inside the nav instead of the nav itself (fixes closing animation) */

//         burger.addEventListener("click", function(){
//         nav.classList.toggle('nav-active');

//         navLinks.forEach((link,index) => {
//             if (link.style.animation){
//                 link.style.animation = '';
//             } else {
//                 link.style.animation = `navLinkFade 0.2s ease forwards ${index / 3 + 0}s`; /* index / 3 as there are 3 links inside the nav */
//             }
//         });
        
//         burger.classList.toggle('toggle'); 
//     });
// }
// navSlide();

function myFunction(x) {
    x.classList.toggle("toggle");
  }