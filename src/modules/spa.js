const spa = () => {
  const homePage = document.getElementById('home');
  const aboutPage = document.getElementById('about');

  const home = document.querySelector('.main');
  const about = document.querySelector('.about-link');

  home.addEventListener('click', () => {
    homePage.style.display = 'flex';
    aboutPage.style.display = 'none';
  });

  about.addEventListener('click', () => {
    homePage.style.display = 'none';
    aboutPage.style.display = 'block';
  });
};

export default spa;