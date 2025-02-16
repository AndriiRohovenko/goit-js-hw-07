const form = document.querySelector('.login-form');
form.style.cssText = `
margin: 0px auto;
    padding: 24px;
    width: 408px;
    border-radius: 8px;
    background-color: rgb(255, 255, 255);
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
}`;

const labels = document.querySelectorAll('label');
labels.forEach(el => {
  el.style.cssText = `
    margin-bottom: 16px;
    display: block; `;
});

const inputs = document.querySelectorAll('input');
inputs.forEach(el => {
  el.style.cssText = `
    width: 100%;
    height: 40px;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid rgb(128, 128, 128);
    transition: border-color 0.3s;`;
});

const form_btn = document.querySelector('form > button');

form_btn.style.cssText = `
  background-color: rgba(78, 117, 255, 1);
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  color: white; 
  font-size: 16px; 
  font-weight: 500; 
  line-height: 1.25; 
  cursor: pointer; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 86px;
`;

// Add hover state using event listeners
form_btn.addEventListener('mouseover', () => {
  form_btn.style.backgroundColor = 'rgba(108, 140, 255, 1)';
});

form_btn.addEventListener('mouseout', () => {
  form_btn.style.backgroundColor = 'rgba(78, 117, 255, 1)';
});

// -----------------------------------------

form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = [
    { key: form.elements.email.name, value: form.elements.email.value.trim() },
    {
      key: form.elements.password.name,
      value: form.elements.password.value.trim(),
    },
  ];

  let allFieldsFilled = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      allFieldsFilled = false;
    }
  });

  if (!allFieldsFilled) {
    alert('All form fields must be filled in!');
  } else {
    for (const obj of formData) {
      console.log(obj);
    }
    form.reset();
  }
});
