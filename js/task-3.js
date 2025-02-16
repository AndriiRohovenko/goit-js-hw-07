'use strict';

function getElementWidth(content, padding, border) {
  const content_size = parseFloat(content);
  const padding_size = parseFloat(padding) * 2;
  const border_size = parseFloat(border) * 2;
  return content_size + padding_size + border_size;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
