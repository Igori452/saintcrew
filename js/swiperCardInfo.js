document.addEventListener( 'DOMContentLoaded', function() {
  const heightSlidersMain = '660px';
  const heightSliders1400 = '580px';
  const heightSliders1100 = '500px';
  let main = new Splide( '#main-slider', {
      type : 'fade',
      pagination : false,
      arrows: true,
      cover : true,
      height : heightSlidersMain,
      width : '600px',
      breakpoints : {
        1700: { height : heightSliders1400 },
        1400: { height : heightSliders1100 },
      },
  });

  let thumbnails = new Splide( '#thumbnail-slider', {
      perPage : 5,
      revind: true,
      speed : 200,
      isNavigation : true,
      gap : 10,
      focus : 0,
      pagination : false,
      arrows : false,
      direction : 'ttb',
      height : heightSlidersMain,
      width : '115px',
      breakpoints : {
        1700: { height : heightSliders1400 },
        1400: { height : heightSliders1100 },
      },
  });

  let mobile = new Splide( '#mobile-slider', {
    pagination : true,
    arrows : true,
    height : '550px',
    width : '500px',
    breakpoints : {
      600: { 
        height : '540px',
        width : '95%', 
      },
      500: { height : '430px' },
      400: { height : '360px' },
      360: { height : '330px' },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
  mobile.mount();
});

