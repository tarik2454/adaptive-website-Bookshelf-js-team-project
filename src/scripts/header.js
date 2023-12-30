const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(el => el.classList.remove('activ-page'));
menuLinks[0].classList.add('activ-page');

const mobileLinks = document.querySelectorAll('.mob-menu-link');
mobileLinks.forEach(el => el.classList.remove('activ-page'));
mobileLinks[0].classList.add('activ-page');

const bookCounter = document.querySelector('.book-counter');

function updateBookCounter() {
  const storedData = localStorage.getItem('bookList');

  if (storedData) {
    const parsedData = JSON.parse(storedData);
    const dataLength = Array.isArray(parsedData) ? parsedData.length : 0;
    bookCounter.innerHTML = dataLength;
  }
}
updateBookCounter();

export { updateBookCounter };
