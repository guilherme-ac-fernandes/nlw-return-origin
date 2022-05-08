
// window.addEventListener('scroll', onScroll)
// onScroll();

const showNavOnScrol = () => {
  // A função onScroll executa no html na tag body com a propriedade 'onscroll'
  const navigation = document.getElementById('navigation');
  if (scrollY > 0) {
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  };
}

const showBackToTheTopButtonScroll = () => {
  const backToTopButton = document.getElementById('backToTopButton');
  if (scrollY > 400) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  };
}

const onScroll = () => {
  showNavOnScrol();
  showBackToTheTopButtonScroll();
};

const openMenu = () => document.body.classList.add('menu-expanded');

const closeMenu = () => document.body.classList.remove('menu-expanded');

// ScrollReveal Lib
ScrollReveal({
  origem: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats,
  #services,
  #services header,
  #services .card, 
  #about,
  #about header,
  #about .content,
  #about .content img`
);
