
window.onscroll =()=>{
    if(window.onscrollY){
        document.querySelector('header').classList.add('active');
    }
    else{
     document.querySelector('header').classList.remove('active');
    }
 }



 var swiper = new Swiper(".home-slider", {
     spaceBetween: 120,
     centeredSlides: true,
     autoplay: {
       delay: 6500,
       disableOnInteraction: false,
     },
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
     loop:true,
   });


   

   var swiper2 = new Swiper(".features-swiperslider", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });