import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');


formEl.addEventListener('input', throttle(onFormFillInput, 500));
formEl.addEventListener('submit', onSubmitButtonClick);

if (localStorage.getItem(LOCALSTORAGE_KEY)) {
  const { email, message } = JSON.parse(
      localStorage.getItem(LOCALSTORAGE_KEY)
  );

  inputEl.value = email;
  textareaEl.value = message;
}

function onFormFillInput(e) {
  const formData = { email: '', message: '' };
  if (e.target.nodeName === 'INPUT') {
    formData.email = e.target.value;
    formData.message = textareaEl.value;
  } else {
    formData.message = e.target.value;
    formData.email = inputEl.value;
  }

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onSubmitButtonClick(e) {
  e.preventDefault();

  const { email, message } = e.currentTarget.elements;

  if (!email.value || !message.value) {
        alert('Please fill out all the fields!');
        return;
  }
  console.log(JSON.parse(
  localStorage.getItem(LOCALSTORAGE_KEY)));

  formEl.reset();

  localStorage.clear();
}
