var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const breakpoint = window.matchMedia( '(min-width: 601px)' );

const mySwiper = document.querySelectorAll('.mySwiper');
const cards = document.querySelectorAll('.cards');
const contentImages = document.querySelector('.content__images');
const footerImg = document.querySelector('.footer__img');


const breakpointChecker = function() {
  if ( breakpoint.matches === true ) {
    //Выключаем Swiper
    mySwiper.forEach((el) => {
      el.classList.add('display-none');
    })
    cards.forEach((el) => {
      if(el.classList.contains('display-none')) {
        el.classList.remove('display-none');
      }
    })
    if(contentImages.classList.contains('display-none')) {
      contentImages.classList.remove('display-none');
    }
    if(footerImg.classList.contains('display-none')) {
      footerImg.classList.remove('display-none');
    }
  } 
  else if ( breakpoint.matches === false ) {
    //Включаем Swiper
    console.log('//Включаем Swiper +++');

    cards.forEach((el) => {
      console.log(cards)
      el.classList.add('display-none');
    })
    contentImages.classList.add('display-none');
    footerImg.classList.add('display-none');
    mySwiper.forEach((el) => {
      if(el.classList.contains('display-none')) {
        el.classList.remove('display-none');
      }
    })
  }
  
}


breakpoint.addListener(breakpointChecker);
breakpointChecker(); 