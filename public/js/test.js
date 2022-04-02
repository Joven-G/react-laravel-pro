const addButton = () => {
    const text = document.getElementById('add-text');
    const valueText = text.value;
    text.value = '';

    const div = document.createElement('div');
    const li = document.createElement('li');

    const p = document.createElement('p');
    p.textContent = valueText;

    const button = document.createElement('button');
    button.textContent = '削除';

    button.addEventListener('click', () => {
        const deleteTarget = button.closest('li');
        document.getElementById('memo-list').removeChild(deleteTarget);
    });

    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(button);

    document.getElementById('memo-list').appendChild(li);
}

document.getElementById('add-button').addEventListener('click', () => {
    addButton()
});










