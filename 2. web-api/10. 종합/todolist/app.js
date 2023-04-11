/* 할일 추가 */
const $input = document.querySelector('.input');
const $button = document.querySelector('.icon');

$button.addEventListener('click', e => {
    if ($input.value === '') {
        alert("할 일을 입력하세요");
        return;
    }
    /* 할일 li추가 */
    const $todoList = document.querySelector('.todoList');

    const $checkbox = document.createElement('input');
    $checkbox.type = 'checkbox';
    $todoList.appendChild($checkbox);

    const $newLi = document.createElement('li');
    $newLi.textContent = $input.value;
    $checkbox.appendChild($newLi);
    $input.value = '';


});