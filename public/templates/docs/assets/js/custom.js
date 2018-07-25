// Slick Carrusel
$('.home-carrusel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear'
});

// Preloader
setTimeout(function(){
	$('.preloader').fadeOut();
},2000)

//Side Navbar
function toggleNav() {
	$('#mySidenav').toggleClass('open');
  $('html').toggleClass('sidenav-open');
  $('#sidenav-mask').toggleClass('sidenav-mask');
}
$('#sidenav-mask').click(function() {
  toggleNav();
});
$('.sidenav-link').click(function() {
  toggleNav();
});