// document.addEventListener('DOMContentLoaded', () => {
//   const sliderPrevButton = document.querySelector('.storiesSliderPagination__arrows-left')
//   const sliderNextButton = document.querySelector('.storiesSliderPagination__arrows-right')
//
//   $('.storiesSlider').slick({
//     infinite: false,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     prevArrow: sliderPrevButton,
//     nextArrow: sliderNextButton,
//     responsive: [
//       {
//         breakpoint: 1280,
//         settings: {
//           slidesToShow: 1,
//         }
//       },]
//   });
//
//   $('.storiesSlider').on('setPosition', (event, slick) => {
//     const withoutRemainder = slick.slideCount % slick.options.slidesToShow === 0
//
//     if (slick.currentSlide === 0) {
//       sliderPrevButton.style.opacity = '35%'
//     } else {
//       sliderPrevButton.style.opacity = '100%'
//     }
//
//     if (withoutRemainder) {
//       if (slick.currentSlide + 1 === slick.slideCount) {
//         sliderNextButton.style.opacity = '35%'
//       } else {
//         sliderNextButton.style.opacity = '100%'
//       }
//     } else {
//       if (slick.currentSlide + 1 === slick.slideCount - 1) {
//         sliderNextButton.style.opacity = '35%'
//       } else {
//         sliderNextButton.style.opacity = '100%'
//       }
//     }
//
//
//     $('.storiesSliderPagination__slides-current').text(slick.currentSlide + 1)
//     $('.storiesSliderPagination__slides-total').text(withoutRemainder ? slick.slideCount : slick.slideCount - 1)
//   });
// })

document.addEventListener('DOMContentLoaded', () => {
  const sliderPrevButton = document.querySelector('.storiesSliderPagination__arrows-left')
  const sliderNextButton = document.querySelector('.storiesSliderPagination__arrows-right')

  const slides = document.querySelectorAll('.storiesSlider__slide')

  $('.storiesSlider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: sliderPrevButton,
    nextArrow: sliderNextButton,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
        }
      },]
  });

  $('.storiesSlider').on('setPosition', (event, slick) => {
    slides.forEach((slide, index) => {
      const thisTopImg = slide.querySelector('.storiesSlider__slide-topImg')
      const thisMiddleImg = slide.querySelector('.storiesSlider__slide-middleImg')

      if (index === slick.currentSlide) {
        thisTopImg.classList.add('storiesSlider__slide-topImg--Active')
        thisMiddleImg.classList.add('storiesSlider__slide-middleImg--Active')
      } else {
        thisTopImg.classList.remove('storiesSlider__slide-topImg--Active')
        thisMiddleImg.classList.remove('storiesSlider__slide-middleImg--Active')
      }
    })

    if (slick.currentSlide === 0) {
      sliderPrevButton.style.opacity = '35%'
      sliderPrevButton.style.pointerEvents = 'none'
    } else {
      sliderPrevButton.style.opacity = '100%'
      sliderPrevButton.style.pointerEvents = 'all'
    }

    if (slick.currentSlide + 1 === slick.slideCount - 1) {
      sliderNextButton.style.opacity = '35%'
      sliderNextButton.style.pointerEvents = 'none'
    } else {
      sliderNextButton.style.opacity = '100%'
      sliderNextButton.style.pointerEvents = 'all'
    }


    $('.storiesSliderPagination__slides-current').text(slick.currentSlide + 1)
    $('.storiesSliderPagination__slides-total').text(slick.slideCount - 1)
  });
})