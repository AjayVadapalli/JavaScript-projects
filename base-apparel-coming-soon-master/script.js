const submit = document.getElementById('submit');
const input = document.getElementById('input');
const label = document.getElementById('label');
const error = document.getElementById('err');

submit.addEventListener('click', validate);

function validate(e) {
    e.preventDefault();
    const inputValue = input.value.trim();
    const isEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (inputValue === '' || !isEmail.test(inputValue)) {
        error.style.display = 'flex';
        label.style.display = 'flex';
    }else{
        error.style.display = 'none';
        input.value = ''; 
    }
}
