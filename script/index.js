const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
];
//переменне "попап"
const popupList = document.querySelectorAll(".popup");
const popupElement = document.querySelector(".popup_type_profile");
const cardPopupElement = document.querySelector(".popup_type_card");
const imagePopup = document.querySelector(".popup_type_image");
// переменне "кнопки"
const profileEditButton = document.querySelector(".profile__edit-button");
const cardAddButton = document.querySelector(".profile__add-button");
// переменные "внесение данных в форму"
const nameInput = document.querySelector(".popup__input_user_name");
const infoInput = document.querySelector(".popup__input_user_info");
const cardNameInput = document.querySelector(".popup__input_card_name");
const cardLinkInput = document.querySelector(".popup__input_card_link");

const userName = document.querySelector(".profile__name");
const userText = document.querySelector(".profile__text");

const form = document.querySelector(".popup__form");
const cardForm = document.querySelector('[name="cardform"]');

const imageCard = document.querySelector(".element__image");
const nameCard = document.querySelector(".element__name");
const elementsList = document.querySelector(".elements__list");
const elementTemplate = document
  .querySelector("#elements-template")
  .content.querySelector(".element");

const openCard = document.querySelector(".popup__opencard");

const bigImage = document.querySelector(".popup__big-image");
const nameBigImage = openCard.querySelector(".popup__image-name");

const renderElement = (item) => {
  const element = elementTemplate.cloneNode(true);
  const cardLikeButton = element.querySelector(".element__like");
  const cardDeleteButton = element.querySelector(".element__delete");

  element.querySelector(".element__name").textContent = item.name;
  element.querySelector(".element__image").src = item.link;
  element.querySelector(".element__image").alt = item.name;

  cardLikeButton.addEventListener("click", handleLikeButton);
  cardDeleteButton.addEventListener("click", handleDeleteButton);
  element
    .querySelector(".element__image")
    .addEventListener("click", handleOpenCard);

  return element;
};

const addCard = (element) => {
  elementsList.prepend(element);
};

const handleLikeButton = (e) => {
  e.target.classList.toggle("element__like_active");
};

const handleDeleteButton = (e) => {
  e.target.closest(".element").remove();
};

const handleOpenCard = (e) => {
  const img = e.target.src;

  bigImage.src = img;
  nameBigImage.textContent = e.target.alt;

  openPopup(imagePopup);
};

const handleCardsFormSubmit = (e) => {
  e.preventDefault();
  const list = {
    name: cardNameInput.placeholder,
    link: cardLinkInput.placeholder,
  };
  const newCard = renderElement(list);
  addCard(newCard);
  closePopup(cardPopupElement);
};

initialCards.forEach((item) => {
  const createCard = renderElement(item);
  addCard(createCard);
});

popupList.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close-button")) {
      closePopup(popup);
    }
  });
});

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
}

function openProfilePopup() {
  nameInput.value = userName.innerText;
  infoInput.value = userText.innerText;

  openPopup(popupElement);
}

function openCardPopup() {
  openPopup(cardPopupElement);
}

function openImagePopup() {
  openPopup(imagePopup);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
}

function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const mainPopup = document.querySelector(".popup_opened");
    closePopup(mainPopup);
  }
}

function handleFormSubmit(e) {
  e.preventDefault();

  userName.textContent = nameInput.value;
  userText.textContent = infoInput.value;

  closePopup(popupElement);
}

profileEditButton.addEventListener("click", openProfilePopup); // слушатель открытия попапа редактирования пользователя
cardAddButton.addEventListener("click", openCardPopup); // слушатель открытия попапа добавления карточки.
form.addEventListener("submit", handleFormSubmit); // слушатель сохранения формы редактирования профиля
cardForm.addEventListener("submit", handleCardsFormSubmit); // слушатель сохранения новой карточки
