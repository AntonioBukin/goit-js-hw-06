// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid,
// які ми вже додали у вихідні файли завдання.

const symbolEl = {
    input: document.querySelector('#validation-input'),
};

symbolEl.input.addEventListener('blur', OnValidInput);

function OnValidInput(event) {
    event.currentTarget.classList.remove('invalid');
    
    if (event.currentTarget.value.length === 6) {
        symbolEl.input.classList.add('valid')
    } else {
        symbolEl.input.classList.add('invalid')
    };
}
