const input = document.getElementById('input');

document.getElementById('value').addEventListener('click', () => {
    input.value = 'Ola mundo!'

    console.log(input.value);
    console.log(input.getAttribute('value'));
})

document.getElementById('type').addEventListener('click', () => {
    input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', () => {
    input.placeholder = 'digite algo'
})

document.getElementById('disable').addEventListener('click', () => {
    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', () => {
    const data = input.dataset.somethingElse
    console.log(data);
    input.dataset.somethingElse = 'outro valor'
    console.log(input.dataset.somethingElse);
})