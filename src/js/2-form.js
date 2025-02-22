const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('form.feedback-form');
const feedbackFormKey = 'feedback-form-state';

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(feedbackFormKey, JSON.stringify(formData));
});

const storedFormData = localStorage.getItem(feedbackFormKey);
if (storedFormData) {
  const parsedFormData = JSON.parse(storedFormData);
  formData.email = parsedFormData.email;
  formData.message = parsedFormData.message;
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(feedbackFormKey);
  formData.email = '';
  formData.message = '';
  form.reset();
});
