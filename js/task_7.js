// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const scriptSizeEl = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
}

scriptSizeEl.input.addEventListener('input', onChangeFonSize);

function onChangeFonSize(event) {
    scriptSizeEl.span.style.fontSize = event.currentTarget.value + 'px';
};