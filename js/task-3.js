const input = document.getElementById('name-input');
const span_output = document.getElementById('name-output');

input.style.cssText = `
    width: 360px;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid rgb(128, 128, 128);`;

input.addEventListener('input', change_user_name_hanlder);

function change_user_name_hanlder(event) {
  const default_name = 'Anonymous';
  span_output.textContent = event.target.value;
  if (event.target.value == '') {
    span_output.textContent = default_name;
  }
}
