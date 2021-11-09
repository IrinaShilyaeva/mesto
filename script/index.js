let popupElement = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let editButton = document.querySelector('.profile__edit-button');
let formElement = popupElement.querySelector('.popup__form');

function openPopup() {
  popupElement.classList.add('popup_opened');
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  
  let nameInput = document.querySelector('.popup__name');
  let infoInput = document.querySelector('.popup__info');
  let userName= document.querySelector('.profile__name');
  let userText= document.querySelector('.profile__text');

  userName.textContent = nameInput.value;
  userText.textContent = infoInput.value;
  popupElement.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);