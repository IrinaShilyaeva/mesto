const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);

const showInputError = (element) => {
  element.classList.add('popup__input_type_error');
  formError.classList.add('popup__input-error_active');
};

const hideInputError = (element) => {
  element.classList.remove('popup__input_type_error');
  formError.classList.remove('popup__input-error_active');
};

const isValid = () => {
  if (!formInput.validity.valid) {
    showInputError(formInput);
  } else {
    hideInputError(formInput);
  };
};

formElement.addEventListener('input', (evt) => {
  evt.preventDefault();
});

formInput.addEventListener('input', isValid); 

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
});
