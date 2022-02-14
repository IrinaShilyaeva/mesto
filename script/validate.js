const validateSelectors = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

const showInputError = (formElement, element, errorMessage, config) => {
  element.classList.add(config.inputErrorClass);

  const errorElement = formElement.querySelector(`.${element.id}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (formElement, element, config) => {
  element.classList.remove(config.inputErrorClass);

  const errorElement = formElement.querySelector(`.${element.id}-error`);
  errorElement.textContent = " ";
  errorElement.classList.remove(config.errorClass);
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );

  inputList.forEach((element) => {
    element.addEventListener("input", function () {
      isValid(formElement, element, config);
    });
  });
  setSubmitButton(formElement, config);
  formElement.addEventListener("input", () =>
    setSubmitButton(formElement, config)
  );
};

const isValid = (formElement, element, config) => {
  if (!element.validity.valid) {
    showInputError(formElement, element, element.validationMessage, config);
  } else {
    hideInputError(formElement, element, config);
  }
};

function setSubmitButton(formElement, config) {
  const button = formElement.querySelector(config.submitButtonSelector);
  button.disabled = !formElement.checkValidity();
  button.classList.toggle(
    config.inactiveButtonClass,
    !formElement.checkValidity()
  );
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, config);
  });
};

enableValidation(validateSelectors);