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

const activateMenuAtCurrentSection = (section) => {
  const targetLine = scrollY + (innerHeight / 2);

  const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`)

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionEndsAt = sectionTop + sectionHeight;

  const sectionBoundaries = sectionTop <= targetLine &&  !(targetLine >= sectionEndsAt);

  if (sectionBoundaries) menuElement.classList.add('active');
  else menuElement.classList.remove('active');
  
}

const onScroll = () => {
  showNavOnScrol();
  showBackToTheTopButtonScroll();
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  // activateMenuAtCurrentSection(depositions);
  activateMenuAtCurrentSection(contact);
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
