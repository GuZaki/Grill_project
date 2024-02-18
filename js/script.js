/*Initialize Swiper*/
 
  const menu = ['Выбор конфигурации', 'Выбор материала и цвета', 'Дизайн-проект и изготовление', 'Установка'];

  var mySwiper = new Swiper('.worksteps__swiper', {
    slidesPerView: 1,
    pagination: {
      el: ".worksteps__swiper-pagination",
      clickable: true,
      renderBullet: function(index, className) {
        return '\
          <div class="box ' + className + '">\
          <div class="bigNumber">' + (index < 10 ? '0' + (index + 1) : (index + 1)) + '</div>\
          <div class="text">' + (menu[index]) + '</div>\
          </div>';
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


    //   var swiper = new Swiper(".news__wrap", {
        
    //     navigation: {
    //         nextEl: ".news__arrows .arrow-next",
    //         prevEl: ".news__arrows .arrow-prev",
    //     },
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    
    //     breakpoints: {
    //         300: {
    //             slidesPerView: 1,
    //             spaceBetween: 10,
    //         },
    //         470: {
    //             slidesPerView: 1.5,
    //             spaceBetween: 20,
    //         },
    //         670: {
    //             slidesPerView: 2,
    //             spaceBetween: 30,
    //         },
    //         769: {
    //             slidesPerView: 3,
    //             spaceBetween: 30,
    //         },
    //     },
    // });
      
    /*
        let header = document.querySelector(".header")
        window.onscroll = function(){
            
    if(window.scrollY > 100){
        header.style.background = "rgba(255, 255, 255)"
    }
    else{
        header.style.background = "rgba(255, 255, 255, 0.8)" 
    }
        }
    */