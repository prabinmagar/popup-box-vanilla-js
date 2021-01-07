

const popupBtn = document.getElementById('popup-btn');
const popupWrapper = document.querySelector('.popup-wrapper');
const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', () => {
    popupWrapper.classList.add('togglePopup');
});

popupBtn.addEventListener('click', () => {
    popupWrapper.classList.remove('togglePopup');
});