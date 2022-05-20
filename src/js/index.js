export function validate(input) {
  const inputType = input.dataset.type;
  const inputField = input.parentElement.querySelector('.form__input');
  const inputSpam = input.parentElement.querySelector('.form__span');

  if (input.validity.valid) {
    inputField.classList.remove('form-error__input');
    inputSpam.classList.remove('form-error__span');
    inputSpam.innerHTML = '';
  } else {
    inputField.classList.add('form-error__input');
    inputSpam.classList.add('form-error__span');
    inputSpam.innerHTML = showErrorMessage(inputType, input);
  }
}

const errorTypes = [
  'valueMissing',
  'typeMismatch'
]

const errorMessages = {
  email: {
    valueMissing: 'Email cannot be empty',
    typeMismatch: 'Please provide a valid email address'
  }
}

function showErrorMessage(inputType, input) {
  let message = '';
  const inputfield = input.parentElement.querySelector('.form__input');

  errorTypes.forEach(error => {

    if (input.validity[error]) {
      message = errorMessages[inputType][error];
      inputfield.placeholder = 'example@email.com';
    }

    if (message === 'Please provide a valid email address') {
      inputfield.value = '';
    }
  })

  return message;
}
