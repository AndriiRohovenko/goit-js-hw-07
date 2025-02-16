function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector('.widget');
const widget_btn = document.querySelector('.widget > button');
widget.style.cssText = `
    width: 345px;
    height: 280px;
    background-color: rgb(255, 255, 255);
    margin: 0px auto;
    display: flex
;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
}
`;
widget_btn.style.cssText = `
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
  width: 169px;
`;

// Add hover state using event listeners
widget_btn.addEventListener('mouseover', () => {
  widget_btn.style.backgroundColor = 'rgba(108, 140, 255, 1)';
});

widget_btn.addEventListener('mouseout', () => {
  widget_btn.style.backgroundColor = 'rgba(78, 117, 255, 1)';
});

// --------------------

widget_btn.addEventListener('click', event => {
  console.log(event);
  const random_color_value = getRandomHexColor();
  const body = document.querySelector('body');
  body.style.backgroundColor = random_color_value;
  document.querySelector('.color').textContent = random_color_value;
});
