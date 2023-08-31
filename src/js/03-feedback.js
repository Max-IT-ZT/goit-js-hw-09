import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
emailInput.value = savedState.email || '';
messageTextarea.value = savedState.message || '';

const updateStateThrottled = throttle(updateState, 500);

form.addEventListener('input', updateStateThrottled);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = emailInput.value;
  const message = messageTextarea.value;

  emailInput.value = '';
  messageTextarea.value = '';

  localStorage.removeItem(STORAGE_KEY);

  console.log({ email, message });
});

function updateState() {
  const currentState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
}
