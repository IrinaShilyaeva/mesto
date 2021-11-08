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
  
  let nameInput = formElement.querySelector('.popup__name');
  let infoInput = formElement.querySelector('.popup__info');

  nameInput.textContent = formElement.querySelector('.popup__name').value;
  infoInput.textContent = formElement.querySelector('.popup__info').value;
  popupElement.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);