$(document).ready(function () {

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
  });

  // Range input update
  document.querySelectorAll('.slidercontainer').forEach(container => {
    const slider = container.querySelector('.slider');
    if (slider) {
      slider.addEventListener('input', (e) => {
        container.style.setProperty('--position', `${e.target.value}%`);
      });
    }
  });

  // ------------------------------
  // Recoveries Slider
  // ------------------------------
  $('#RecoveriesSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('#BannerPrevDesktop, #BannerPrevMobile'),
    nextArrow: $('#BannerNextDesktop, #BannerNextMobile'),
    draggable: false,
    infinite: false
  });

  // ------------------------------
  // Ailments Slider
  // ------------------------------
  $('#AilmentsSlider').slick({
    variableWidth: true,
    arrows: true,
    centerPadding:'50px',
    prevArrow: $('.AilmentPrevButton'),
    nextArrow: $('.AilmentNextButton'),
    dots: false,
    infinite: false,
    slidesToScroll: 1,
  });

  // ------------------------------
  // Journey Slider (already Slick, enhanced)
  // ------------------------------
  const JourneyPointItems = document.querySelectorAll('.journey-point-item');
  const $journeyCarousel = $('#journeyImgSlide');

  $journeyCarousel.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    speed: 500,
    pauseOnHover: false,
    cssEase: 'linear',
  });

  function updateJourneyImageLayer(currentIndex) {
    const $slides = $journeyCarousel.find('.slick-slide').not('.slick-cloned'); 
    $slides.removeClass('active-front active-second active-third active-fourth');

    const totalSlides = $slides.length;
    const frontIndex = currentIndex % totalSlides;
    const secondIndex = (frontIndex + 1) % totalSlides;
    const thirdIndex = (frontIndex + 2) % totalSlides;
    const fourthIndex = (frontIndex + 3) % totalSlides;

    $slides.eq(frontIndex).addClass('active-front');
    $slides.eq(secondIndex).addClass('active-second');
    $slides.eq(thirdIndex).addClass('active-third');
    $slides.eq(fourthIndex).addClass('active-fourth');
  }

  updateJourneyImageLayer(0);

  $journeyCarousel.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    updateJourneyImageLayer(nextSlide);

    JourneyPointItems.forEach((item, i) => {
      item.classList.toggle('active', i === nextSlide);
    });
  });

  JourneyPointItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      $journeyCarousel.slick('slickGoTo', index);
    });
  });

  // ------------------------------
  // Insurance Slider
  // ------------------------------
  $('#InsuranceSlider').slick({
    variableWidth: true,
    autoplay: true,
    speed:2000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    dots: false,
    infinite: true,
    draggable: true, // Enable dragging with mouse
    swipeToSlide: true
  });

  $('#insuaranceBottomSlider').slick({
    slidesToShow: 1,
    arrows: true,
    prevArrow: $('.InsuranceBottomPrevButton'),
    nextArrow: $('.InsuranceBottomNextButton'),
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  // ------------------------------
  // Mobile About Slider
  // ------------------------------
  $('#mobileSliderAbout').slick({
    slidesToShow: 1,
    arrows: true,
    prevArrow: $('.AboutBottomPrevButton'),
    nextArrow: $('.AboutBottomNextButton'),
    dots: false,
  });

  // ------------------------------
  // Doctors Slider
  // ------------------------------
  $('#doctorsSlider').slick({
    slidesToShow: 4,
    slidesToScroll:1,
    arrows:true,
    infinite:false,
    prevArrow: $('#doctorsSlider').closest('section').find('.doctorPrevButton'),
    nextArrow: $('#doctorsSlider').closest('section').find('.doctorNextButton'),
    dots:false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    ],
  });

  // ------------------------------
  // Google Reviews Slider
  // ------------------------------
  $('#googleReviewsSlider').slick({
    variableWidth: true,
    arrows: true,
    infinite:false,
    prevArrow: $('.GooglePrevNav'),
    nextArrow: $('.GoogleNextNav'),
    dots: false
  });

  // ------------------------------
  // Blogs Slider
  // ------------------------------
  $('#blogSlider').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    infinite:false,
    prevArrow: $('.BlogsPrevSlide'),
    nextArrow: $('.BlogsNextSlide'),
    
  });

  // ------------------------------
  // Clinic Slider
  // ------------------------------
  $('#clinicSlider').slick({
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    prevArrow: $('.ClinicSliderPrev'),
    nextArrow: $('.ClinicSliderNext'),
    dots: false,
    infinite: true,
    responsive: [
      { breakpoint: 768, settings: { variableWidth: true } },
      { breakpoint: 0, settings: { slidesToShow: 1, variableWidth: false } }
    ]
  });

  // ------------------------------
  // Journey Container height fix
  // ------------------------------
  const $journeyContainer = $('#journeyContainer');
  function setJourneyHeight(){
    $journeyContainer.css({'height':$journeyContainer.outerHeight(),'overflow':"hidden"});
  }
  setJourneyHeight();
  $(window).resize(setJourneyHeight);

});
