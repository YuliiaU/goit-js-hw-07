const quantityOfCategories = document.querySelector('#categories').children.length;
console.log(`В списке ${quantityOfCategories} категории`);

const quantityOfElements = document.querySelector('#categories').children;
for (let elem of quantityOfElements) {
    let categoryEl = elem.firstElementChild.textContent;   
    let quantityEl = elem.lastElementChild.children.length;
    console.log(`Категория: ${categoryEl}. Количество элементов: ${quantityEl}`);
};