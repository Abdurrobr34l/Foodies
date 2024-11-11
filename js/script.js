// Javascript
// TOGGLER START 
// When menu link is clicked the hamburger menu turns off
$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});
// When menu links is clicked the focus on toggler goes away 
document.addEventListener("click", function (event) {
  const toggler = document.querySelector(".navbar-toggler");
  const isTogglerClick = toggler.contains(event.target);
  const isMenuLink = event.target.closest(".navbar-nav .nav-link");

  // If a menu link or area outside the toggler is clicked, blur the toggler
  if (!isTogglerClick || isMenuLink) {
      toggler.blur();
  }
});




// TOGGLER END



// jquery
$(document).ready(function () {

});
