var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredslides: true,
    loop:true,
    autoplay: {
        delay:3000,
        disableOnInteraction: false,
    },
    
});

/*=== navbar toggle ===*/
let nacBar = document.querySelector('.navlink');
let  menuBar = document.querySelector('.#menuBtn');

menuBar.onclick = ()=> {
    navBar.classList.toggle('.active');
    menuBar.classList.toggle('.bx-x');
}
/*=== Product Section start ===*/
var swiper = new swiper(".myproduct",{
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    breakpoints: {
        550: {
            slidesPerView: 2,
            spaceBetween: 40,
        }
    }
});
