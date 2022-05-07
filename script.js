const onScroll = () => {
  // A função onScroll executa no html na tag body com a propriedade 'onscroll'
  const navigation = document.getElementById('navigation');
  if (scrollY > 0) {
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  };
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
  #about .content`);
