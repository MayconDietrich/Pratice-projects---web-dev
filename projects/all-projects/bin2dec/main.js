let input = document.getElementById('inputBin');
let decimalResult = document.getElementById('convertedValue');

input.addEventListener('keyup', () => {
    decimalResult.textContent = parseInt((input.value + '').replace(/[^01]/gi, ''), 2);
    if(decimalResult.innerHTML == "Nan") {
        alert('Only 0 and 1!');
        decimalResult.innerHTML = '';
        input.value = '';
    }
});
