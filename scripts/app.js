$(".client-list").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  dots: true,
  arrows: true,
  prevArrow:`<button type='button' class='slick-prev pull-left'><img src="./images/arrow-left.svg" alt=""></button>`,
  nextArrow:`<button type='button' class='slick-next pull-right'> <img src="./images/arrow-right.svg" alt=""></button>`,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
});
window.addEventListener("load", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  toggle && toggle.addEventListener("click", handleToggleMenu);
  function handleToggleMenu(e) {
    menu && menu.classList.add("is-show");
  }
  document.addEventListener("click", handleClickOutside);
  function handleClickOutside(e) {
    if (e.target.matches(".menu-toggle") || e.target.matches(".menu, .menu *"))
      return;
    menu && menu.classList.remove("is-show");
  }
});
