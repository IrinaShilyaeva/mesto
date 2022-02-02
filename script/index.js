
const popup = document.querySelector('.popup');
const popupElement = document.querySelector('.popup_profile');                           //переменные попапа "Пользователь"
const closeButton = document.querySelector('.popup__close-button');

const editButton = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.popup__input_user_name');
const infoInput = document.querySelector('.popup__input_user_info');
const userName= document.querySelector('.profile__name');
const userText= document.querySelector('.profile__text');

const formElement = popupElement.querySelector('.popup__form');

                                                                                  //переменные попапа "добавления карточек"
  const cardPopupElement = document.querySelector('.popup_card');
  const addButton = document.querySelector('.profile__add-button');
  const closeCardButton = document.querySelector('.popup__close-card');
  const imageCard = document.querySelector('.element__image');
  const nameCard = document.querySelector('.element__name');
  const cardNameInput = document.querySelector('.popup__input_card_name');
  const cardLinkInput = document.querySelector('.popup__input_card_link');
  const cardForm = document.querySelector('[name="cardform"]');
  const likeButton = document.querySelector('.element__like');
  const deleteButton = document.querySelector('.element__delete');


  const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name:'Иваново',
      link:'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name:'Камчатка',
      link:'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name:'Байкал',
      link:'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
      name:'Холмогорский район',
      link:'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    }
  ]

  const elementsList = document.querySelector('.elements__list');
  const elementTemplate = document.querySelector('#elements-template').content.querySelector('.element');;
  
  const renderElement = (item) => {
    const element = elementTemplate.cloneNode(true);
    const likeButton = element.querySelector('.element__like');
    const deleteButton = element.querySelector('.element__delete');
    element.querySelector('.element__name').textContent = item.name;
    element.querySelector('.element__image').src = item.link;
    element.querySelector('.element__image').alt = item.name;
    likeButton.addEventListener('click', handleLikeButton);
    deleteButton.addEventListener('click', handleDeleteButton);
    element.querySelector('.element__image').addEventListener('click', handleOpenCard);

    elementsList.prepend(element);
  }

  const handleLikeButton = (e) => {
    e.target.classList.toggle('element__like_active');
  }

  const handleDeleteButton = (e) => {
    e.target.closest('.element').remove();
  }

  const openCard = document.querySelector('.popup__opencard');
  const imagePopup = document.querySelector('.popup_image');
  const bigImage = document.querySelector('.popup__big-image');
  const nameBigImage = openCard.querySelector('.popup__image-name');

  const handleOpenCard = (e) => {
    const img = e.target.src;
    bigImage.src = img;
    const nameBigImage = openCard.querySelector('.popup__image-name');
    nameBigImage.textContent = e.target.alt;  
    openPopup(imagePopup);
  }

  const cardsFormSubmitHandler = (e) => {
    e.preventDefault(); 
    const list = {
      name: cardNameInput.value,
      link: cardLinkInput.value
    }
    renderElement(list);
    closePopup(cardPopupElement);
  }
                            
  initialCards.forEach(item => {
    renderElement(item);
  })

  const popupList = document.querySelectorAll('.popup');
  popupList.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup)
      };
      if (evt.target.classList.contains('popup__close-button')) {
        closePopup(popup)
      };
    });
  });
                                                                                        //создание функций
  function openPopup(popup) {
    popup.classList.add('popup_opened');
  }

  function closePopup(popup) {
    popup.classList.remove('popup_opened');
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

  function formSubmitHandler (e) {
    e.preventDefault(); 
    userName.textContent = nameInput.value;
    userText.textContent = infoInput.value;
    closePopup(popupElement);
  }

                                                                                    // создание слушателей
  editButton.addEventListener('click', openProfilePopup);                       // слушатель открытия попапа редактирования пользователя
  addButton.addEventListener('click', openCardPopup);                    // слушатель открытия попапа добавления карточки.
  formElement.addEventListener('submit', formSubmitHandler);             // слушатель сохранения формы редактирования профиля
  cardForm.addEventListener('submit', cardsFormSubmitHandler);           // слушатель сохранения новой карточки