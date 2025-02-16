const list = document.querySelectorAll('ul');
const categories = document.querySelectorAll('.item');
const items = document.querySelectorAll('.item ul > li');

const category_count_str = `Number of categories: ${categories.length}`;
console.log(category_count_str);

list.forEach(el => {
  el.style.listStyle = 'none';
  el.style.padding = 0;
  el.style.margin = 0;
});

categories.forEach(el => {
  el.style.cssText = `
      background-color: rgb(246, 246, 254);
      border-radius: 8px;
      margin-bottom: 24px;
      padding: 16px;
      width: 392px;
    `;
  const category_count_str = `Category: ${el.firstElementChild.textContent}`;
  console.log(category_count_str);
  const item_count_str = `Elements: ${el.lastElementChild.childElementCount}`;
  console.log(item_count_str);
});

items.forEach(el => {
  el.style.cssText = `
    padding: 8px 16px;
    margin-bottom: 8px;
    border: 1px solid rgb(128, 128, 128);
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.33;
    color: rgb(46, 47, 66);
      `;
});
