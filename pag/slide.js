
let slide = document.querySelectorAll(".slide");
function mostrarSlide(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < slide.length; i++) {
        let alturaSlide = slide[i].offsetTop
        if (alturaSlide - 500 < scrollTop) {
            slide[i].style.opacity = 1;
            slide[0].classList.add("mostrar-slide");
            slide[1].classList.add("mostrar-slide-der")
        }
        
    }
}
window.addEventListener('scroll', mostrarSlide);