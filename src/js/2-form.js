const storageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;
const input = form.elements.email;

form.addEventListener('submit', formSubmit);
form.addEventListener('input', formInput);

valueLocalStorage();

function formSubmit(e) {
  e.preventDefault();

  localStorage.removeItem(storageKey);

  console.log({
    email: `${e.currentTarget.elements.email.value.trim()}`,
    message: `${e.currentTarget.elements.message.value.trim()}`,
  });

  e.currentTarget.reset();
}

function formInput(e) {
  const inputMessage = e.currentTarget.elements.email.value;
  const textareaMessage = e.currentTarget.elements.message.value;

  localStorage.setItem(
    storageKey,
    JSON.stringify({
      email: `${inputMessage}`,
      message: `${textareaMessage}`,
    })
  );
}

function valueLocalStorage() {
  const savedMessage = localStorage.getItem(storageKey);

  const parsetMessage = JSON.parse(savedMessage);

  const { email, message } = parsetMessage;

  if (email && message) textarea.value = message;
  input.value = email;
}
