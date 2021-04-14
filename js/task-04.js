const counter = {
    value: 0,
    increment() {
        console.log(this);
        this.value += 1;
    },
    decrement() {
        console.log(this);
        this.value -= 1;
    },
};

const BtnIncrement = document.querySelector('button[data-action="increment"]');
const BtnDecrement = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');


BtnIncrement.addEventListener('click', function () {
    counter.increment();
    console.log(counter.value);
    valueEl.textContent = counter.value;
});

BtnDecrement.addEventListener('click', function () {
    counter.decrement();
    console.log(counter.value);
    valueEl.textContent = counter.value;
});