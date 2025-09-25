$(document).ready(function () {

  AOS.init({
    easing: 'ease-out',
    once: true,
  });

  // Navbar Logic 
  $('.nav-dropwdown-item').click(function () {
    $(this).toggleClass('active');
  });

  $('#BurgerIcon').click(function () {
    $(this).toggleClass('is-active');
    $('.nav-menu-holder-bg').toggleClass('active');
  });

  const $overlay = $('.dropdown-overlay')
  $('.nav-dropwdown-item').on('mouseenter mouseleave', function (e) {
    $overlay.toggleClass('active', e.type === 'mouseenter');
  });



  // Footer Logic 
  $('.footer-menu-box').click(function () {
    $(this).toggleClass('active');
  })


  document.querySelectorAll('.slidercontainer').forEach(container => {
    const slider = container.querySelector('.slider');

    if (slider) {
      slider.addEventListener('input', (e) => {
        container.style.setProperty('--position', `${e.target.value}%`);
      });
    }
  });


  // const JourneyPointItems = document.querySelectorAll('.journey-point-item');
  // JourneyPointItems.forEach((item, index) => {
  //   item.addEventListener('click', () => {
  //     JourneyPointItems.forEach((i) => {
  //       if (i != item) {
  //         i.classList.remove('active');
  //         return
  //       }
  //       i.classList.add('active')

  //     })
  //   })
  // })



  const bannerOwl = $('#RecoveriesSlider').owlCarousel({
    items: 1,
    mouseDrag: false,
  });

  $('#BannerPrevDesktop, #BannerPrevMobile').click(() => bannerOwl.trigger('prev.owl.carousel'));
  $('#BannerNextDesktop, #BannerNextMobile').click(() => bannerOwl.trigger('next.owl.carousel'));

  function updateSliderNav(event, prevButton, nextBtn) {
    const carousel = event.relatedTarget;
    const current = carousel.current();
    const itemsCount = carousel.items().length;

    // disable prev on first
    if (current === 0) {
      $(prevButton).addClass('disabled');
    } else {
      $(prevButton).removeClass('disabled');
    }

    // disable next on last
    if (current === itemsCount - 1) {
      $(nextBtn).addClass('disabled');
    } else {
      $(nextBtn).removeClass('disabled');
    }
  }

  $('#RecoveriesSlider').on(
    'changed.owl.carousel initialized.owl.carousel',
    function (event) {
      updateSliderNav(
        event,
        '#BannerPrevDesktop, #BannerPrevMobile',
        '#BannerNextDesktop, #BannerNextMobile'
      );
    }
  );

  const alimentSLider = $('#AilmentsSlider').owlCarousel({
    autoWidth: true,
    margin: 35,
    dots: false,
  });
  $('.AilmentPrevButton').click(() => alimentSLider.trigger('prev.owl.carousel'));
  $('.AilmentNextButton').click(() => alimentSLider.trigger('next.owl.carousel'));



  // $('#journeyImgSlide').owlCarousel({
  //   items:1,
  //   loop:true,
  //   margin:10,
  //   arrows:false,
  //   dots:false,
  //   autoplay:true,
  //   autoplayTimeout:3000,
  // })

  const JourneyPointItems = document.querySelectorAll('.journey-point-item');
  const $journeyCarousel = $('#journeyImgSlide');
  $journeyCarousel.owlCarousel({
    items: 1,
    loop: 1,
    center: 1,
    arrows: 0,
    autoplayHoverPause: 0,
    dots: !1,
    autoplay: 1,
    autoplayTimeout: 8000,
  });

  function updateJourneyImagLayer(currentIndex) {
    const $slides = $journeyCarousel.find(".owl-item");
    const totalSlides = $slides.length;

    $slides.removeClass('active-front active-second active-third active-fourth').css('opacity', 0);

    const frontIndex = currentIndex;
    const secondIndex = (currentIndex + 1) % totalSlides;
    const thirdIndex = (currentIndex + 2) % totalSlides;
    const fourthIndex = (currentIndex + 3) % totalSlides;

    $slides.each(function () {
      let idx = $(this).index();

      if (idx === frontIndex) {
        $(this).addClass("active-front").css("opacity", 1);
      } else if (idx === secondIndex) {
        $(this).addClass("active-second").css("opacity", 0.7);
      } else if (idx === thirdIndex) {
        $(this).addClass("active-third").css("opacity", 0.5);
      } else if (idx === fourthIndex) {
        $(this).addClass("active-fourth").css("opacity", 0.2);
      }
    });
  }
  JourneyPointItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      $journeyCarousel.trigger('to.owl.carousel', [index, 500]);
      $journeyCarousel.trigger('stop.owl.autoplay');
      $journeyCarousel.trigger('play.owl.autoplay', [8000]);
    });
  });
 
  $journeyCarousel.on('changed.owl.carousel', function (event) {
  let index = event.item.index - event.relatedTarget._clones.length / 2;
  let count = event.item.count;
  const normalizedIndex = ((index % count) + count) % count;

  updateJourneyImagLayer(normalizedIndex);

    JourneyPointItems.forEach((item, i) => {
        item.classList.toggle('active', i === normalizedIndex);
    });
    });


  updateJourneyImagLayer(0);



  // Insurance Slider 
  $('#InsuranceSlider').owlCarousel({
    loop: true,
    margin: 20,
    autoWidth: true,
    autoplay: true,
    arrows: false,
    dots: false,
    autoplayTimeout: 2000,
    dots: false,
    nav: false,
  });

  const InsuranceBottom = $('#insuaranceBottomSlider').owlCarousel({
    items: 1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
  });

  $('.InsuranceBottomPrevButton').click(() => InsuranceBottom.trigger('prev.owl.carousel'));
  $('.InsuranceBottomNextButton').click(() => InsuranceBottom.trigger('next.owl.carousel'));

  $('#insuaranceBottomSlider').on(
    'changed.owl.carousel initialized.owl.carousel',
    function (event) {
      updateSliderNav(
        event,
        '.InsuranceBottomPrevButton',
        '.InsuranceBottomNextButton'
      );
    }
  );



  const MobileAboutSlider = $('#mobileSliderAbout').owlCarousel({
    items: 1,
    dots: false,
  });

  $('.AboutBottomPrevButton').click(() => MobileAboutSlider.trigger('prev.owl.carousel'));
  $('.AboutBottomNextButton').click(() => MobileAboutSlider.trigger('next.owl.carousel'));

  $('#mobileSliderAbout').on(
    'changed.owl.carousel initialized.owl.carousel',
    function (event) {
      updateSliderNav(
        event,
        '.AboutBottomPrevButton',
        '.AboutBottomNextButton'
      );
    }
  );



  // Doctors Slider 
  const Doctorslider = $('#doctorsSlider').owlCarousel({
    items: 4,
    dots: false,
    padding: 10,
    responsive: {
      0: {
        autoWidth: true,
      },
      786: {
        items: 3,
      },
      1024: {
        items: 4,
      }
    }
  });

  $('.doctorPrevButton').click(() => Doctorslider.trigger('prev.owl.carousel'));
  $('.doctorNextButton').click(() => Doctorslider.trigger('next.owl.carousel'));

  $('#doctorsSlider').on(
    'changed.owl.carousel initialized.owl.carousel',
    function (event) {
      updateSliderNav(
        event,
        '.doctorPrevButton',
        '.doctorNextButton'
      );
    }
  );
  // Doctors Slider 



  // Google Reviews slider
  const GoogleSlider = $('#googleReviewsSlider').owlCarousel({
    autoWidth: true,
    dots: false,
  });

  $('.GooglePrevNav').click(() => GoogleSlider.trigger('prev.owl.carousel'));
  $('.GoogleNextNav').click(() => GoogleSlider.trigger('next.owl.carousel'));

  $('#googleReviewsSlider').on(
    'changed.owl.carousel initialized.owl.carousel',
    function (event) {
      updateSliderNav(
        event,
        '.GooglePrevNav',
        '.GoogleNextNav'
      );
    }
  );


  // Blogs Slider
  const BlogsSlider = $('#blogSlider').owlCarousel({
    dots: false,
    autoplay:true,
    responsive: {
      0: {
        autoWidth: true,
      },
      786: {
        items: 3,
        margin: 10,
      },
      1024: {
        items: 4,
        margin: 14,
        autoWidth: false,
      }
    }
  });
  $('.BlogsPrevSlide').click(() => BlogsSlider.trigger('prev.owl.carousel'));
  $('.BlogsNextSlide').click(() => BlogsSlider.trigger('next.owl.carousel'));

  $('#blogSlider').on(
    'changed.owl.carousel initialized.owl.carousel',
    function (event) {
      updateSliderNav(
        event,
        '.BlogsPrevSlide',
        '.BlogsNextSlide'
      );
    }
  );













  // Clinci Slider 
  const ClinicSlider = $('#clinicSlider').owlCarousel({
    autoWidth: true,
    loop: true,
    items: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        autoWidth: false,
      },
      768: {
        autoWidth: true
      }
    }
  })

  $('.ClinicSliderPrev').click(() => ClinicSlider.trigger('prev.owl.carousel'));
  $('.ClinicSliderNext').click(() => ClinicSlider.trigger('next.owl.carousel'));



  const $journeyContainer = $('#journeyContainer');
  const containerheight = $journeyContainer.outerHeight();
  function setJorneyHeight(){
    $journeyContainer.css({'height':containerheight,'overflow':"hidden"});
  }
  setJorneyHeight()

  $(window).resize(function() {
    setJorneyHeight();
  });


})