const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('change', changeFontSize);

function changeFontSize() {
    textEl.style.fontSize = this.value + 'px';
    console.log('font-size: ', this.value,'px');
};