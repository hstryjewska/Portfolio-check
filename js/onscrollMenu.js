const navbar = document.querySelector('nav');

const onScrollMenu = () => {window.onscroll = () => {
  if (window.pageYOffset > 0) {
    navbar.classList.add('light')
  } else {
    navbar.classList.remove('light')
  }
}};

export { onScrollMenu }


