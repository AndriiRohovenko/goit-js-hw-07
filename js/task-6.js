const controls = document.getElementById('controls');
controls.style.cssText = `
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgb(240, 240, 240);
    width: 486px;
    height: 104px;
    margin: 0px auto 16px;
    gap: 16px;
    justify-content: center;
    border-radius: 8px;
}`;

const input = document.querySelector('input');
input.style.cssText = `
    width: 150px;
    height: 40px;
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid rgb(128, 128, 128);
    text-align: center;
}
`;

const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
  btn.style.cssText = `
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
  width: 120px;
  `;
  // Add hover state using event listeners
  btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = 'rgba(108, 140, 255, 1)';
  });

  btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = 'rgba(78, 117, 255, 1)';
  });

  if (btn.textContent == 'Destroy') {
    btn.style.backgroundColor = 'rgba(255, 78, 78, 1)';
    btn.addEventListener('mouseover', () => {
      btn.style.backgroundColor = 'rgba(255, 112, 112, 1)';
    });

    btn.addEventListener('mouseout', () => {
      btn.style.backgroundColor = 'rgba(255, 78, 78, 1)';
    });
  }
});

// Layout

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Implementing Create and Destroy functionality
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);
  if (amount < 1 || amount > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }

  createBoxes(amount);
  input.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    box.style.borderRadius = '5px';
    boxesContainer.appendChild(box);

    size += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
