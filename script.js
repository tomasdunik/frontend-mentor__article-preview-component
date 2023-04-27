/*****************************
Open share box window
*****************************/

const shareIcon = document.querySelector(
  '.main__article__information__icon-share-box'
);
const shareBox = document.querySelector('.share-box');

shareIcon.addEventListener('click', function () {
  shareBox.classList.toggle('share-box--open');
});
