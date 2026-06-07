let mydiv =document.querySelector('#fheading');

let newElement = document.createElement('span');
newElement.textContent="chinmay biswas"
mydiv.insertAdjacentElement('beforebegin',newElement);

let parent = document.querySelector('#div2');
let chile = document.querySelector('#fpara4')
parent.removeChild(chile);