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
