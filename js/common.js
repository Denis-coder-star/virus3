$('.epidemic-body').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  dots: false,
  speed: 1500,
  responsive: [
    {
      breakpoint: 1380,
      settings: {
        dots: true,
        arrows: false,
      },
    },
     {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
  ],
});


$(document).ready(function(event){
  $('.ham').click(function(event){
    $('.menu-mobile').toggleClass('menu-mobile-active');
  });
})

$(document).ready(function(event){
  $('.menu__link').click(function(event){
    $('.menu-mobile').removeClass('menu-mobile-active');
    $('.hamRotate').removeClass('active');
  })
})





// $(document).ready(function(){
// 	$('.table1').click(function(){
// 		$('.column-block').css('background', 'white');
// 		$('.column-block h3').css('color', '#646464');
// 		$('.column-block span').css('border', '3px solid #019570');
// 		$('.white').css('display', 'none');
// 		$('.green').css('display', 'block');
// 		$('.column-green').css('background', 'white');
// 		$('.column-green h3').css('color', '#646464');
// 		$('.column-green span').css('border', '3px solid #019570');
// 		$('.column-block span img:last-child').css('display', 'block');
// 		$('.column-block span img:first-child').css('display', 'none');
// 		$('.column-green').css('border-right', '1px solid #d3d3d3');
// 		$('.column-green').css('border-top', '1px solid #d3d3d3');




// 		$('.table1').css('background', '#019973');
// 		$('.table1').css('border', '1px solid transparent');
// 		$('.table1 h3').css('color', 'white');
// 		$('.table1 span').css('border', '3px solid white');
// 		$('.white1').css('display', 'block');
// 		$('.green1').css('display', 'none');
// 	});
// });


document.body.onload = function() {

    setTimeout(function() {
    var preloader = document.getElementById('preloader');
    if(!preloader.classList.contains('done') ) {
    preloader.classList.add('done');
    body.classList.add('lock');
    }
    }, 1000);
 }