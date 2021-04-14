const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.createElement('ul');
listEl.id = 'ingredients';
console.log(listEl);

const elements = ingredients.map(element => {
    const itemEL = document.createElement('li');
    itemEL.textContent = element;
    listEl.append(itemEL);
});

document.body.appendChild(listEl);