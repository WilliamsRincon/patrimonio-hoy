document.addEventListener('DOMContentLoaded', function () {
    // Slider Únete a Patrimonio Hoy
    const uneteSlider = new Swiper('.unete-slider', {
      loop: false,
      slidesPerView: 1.2,
      spaceBetween: 16,
      grabCursor: true,
      centeredSlides: true,
      navigation: {
        nextEl: '#unete-next',
        prevEl: '#unete-prev',
      },
      breakpoints: {
        640: { // sm
          slidesPerView: 2,
          spaceBetween: 24,
          centeredSlides: false,
        },
        768: { // md
          slidesPerView: 2.5,
          spaceBetween: 32,
          centeredSlides: false,
        },
        1024: { // lg
          slidesPerView: 3,
          spaceBetween: 32,
          centeredSlides: false,
        }
      }
    });

    // Slider Beneficios de Patrimonio Hoy
    const beneficiosSlider = new Swiper('.beneficios-slider', {
      loop: false,
      slidesPerView: 1.3,
      spaceBetween: 16,
      grabCursor: true,
      centeredSlides: true, // Center for mobile, especially with 1.x slides
      navigation: {
        nextEl: '#nextBeneficios',
        prevEl: '#prevBeneficios',
      },
      breakpoints: {
        640: { // sm screens, container max-w-xl (576px), slide w-56 (224px)
          slidesPerView: 2, // (576 - 1*16) / (224+16) = 560 / 240 = 2.33
          spaceBetween: 16,
          centeredSlides: false,
        },
        768: { // md screens, container max-w-2xl (672px), slide w-56 (224px)
          slidesPerView: 2.5, // (672 - 1*24) / (224+24) = 648 / 248 = 2.6
          spaceBetween: 24,
          centeredSlides: false,
        },
        1024: { // lg screens, container max-w-4xl (896px), slide w-56 (224px)
          slidesPerView: 3.5, // (896 - 2*24) / (224+24) = 848 / 248 = 3.4
          spaceBetween: 24,
          centeredSlides: false,
        }
      }
    });

    // Slider Materiales que puedes adquirir
    const materialesSlider = new Swiper('.materiales-slider', {
      loop: false,
      slidesPerView: 2,
      spaceBetween: 16,
      grabCursor: true,
      navigation: {
        nextEl: '#materiales-next',
        prevEl: '#materiales-prev',
      },
      breakpoints: {
        640: { // sm
          slidesPerView: 3,
          spaceBetween: 16,
        },
        768: { // md
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: { // lg
          slidesPerView: 5,
          spaceBetween: 24,
        },
         1280: { // xl
          slidesPerView: 5,
          spaceBetween: 24,
        }
      }
    });

    // Slider Promociones
    const promocionesSlider = new Swiper('.promociones-slider', {
      loop: false,
      slidesPerView: 1.1, // Show part of the next slide on mobile
      spaceBetween: 16,
      centeredSlides: true,
      grabCursor: true,
      navigation: {
        nextEl: '#promociones-next',
        prevEl: '#promociones-prev',
      },
      breakpoints: {
        640: { // sm
          slidesPerView: 1.5,
          spaceBetween: 20,
          centeredSlides: true,
        },
        768: { // md
          slidesPerView: 2.3,
          spaceBetween: 24,
          centeredSlides: false,
        },
        1024: { // lg
          slidesPerView: 3,
          spaceBetween: 24,
          centeredSlides: false,
        }
      }
    });

    // Slider Testimoniales
    const testimonialesSlider = new Swiper('.testimoniales-slider', {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 24,
      grabCursor: true,
      autoHeight: true, // Adjust height based on slide content
      pagination: {
        el: '.testimoniales-pagination',
        clickable: true,
      },
      breakpoints: {
        768: { // md
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: { // lg
          slidesPerView: 2, // Showing 2, but cards are wider and might take more space.
          spaceBetween: 32, // Adjust if needed, image shows them fairly apart.
        }
        // Consider if 3 slides should be shown on very large screens, though image implies 2 is max for readability.
      }
    });

});

// Script to set current year in footer (if not already handled elsewhere)
// This part should be outside the DOMContentLoaded if it's a simple operation
// or if the footer script is separate. Assuming it's okay here for now.
document.addEventListener('DOMContentLoaded', function() {
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});