const refs = {
    input: document.querySelector('#name-input'),
    outputeName: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.outputeName.textContent = event.currentTarget.value;
}