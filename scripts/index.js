const popupElement = document.querySelector('.popup');
const editProfile = document.querySelector('.profile__edit-btn');
const closeButton = popupElement.querySelector('.popup__close-btn');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');

let nameInput = document.querySelector('.popup__input_type_name');
let aboutInput = document.querySelector('.popup__input_type_about');


function openPopup() {
	popupElement.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  aboutInput.value = userAbout.textContent;
}

function closePopup() {
	popupElement.classList.remove('popup_opened');
}

editProfile.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)

let formElement = document.querySelector('.popup__form');


function editProfileFunc(evt) {
  evt.preventDefault();

  userName.textContent = nameInput.value;
	userAbout.textContent = aboutInput.value;

  closePopup();
}

formElement.addEventListener('submit', editProfileFunc);


function heartActive() {
  this.classList.add('element__heart_active');
}

const hearts = document.querySelectorAll('.element__heart');
for (let i = 0; i < hearts.length; ++i) {
  const heart = hearts[i];
  heart.addEventListener('click', heartActive);
}
