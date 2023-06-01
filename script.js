document.addEventListener('DOMContentLoaded', function () {
    var tajInputs = document.getElementsByClassName('taj-input');
    var adoszamInputs = document.getElementsByClassName('adoszam-input');

    Array.from(tajInputs).forEach(function (input, index) {
        input.addEventListener('input', function () {
            handleTajInputChange(index);
            handleInputNavigation(tajInputs, index);
        });
        input.addEventListener('focus', function () {
            handleTajInputFocus(index);
        });
    });

    Array.from(adoszamInputs).forEach(function (input, index) {
        input.addEventListener('input', function () {
            handleAdoszamInputChange(index);
            handleInputNavigation(adoszamInputs, index);
        });
        input.addEventListener('focus', function () {
            handleAdoszamInputFocus(index);
        });
    });
});

function handleTajInputChange(index) {
    var tajInputs = document.getElementsByClassName('taj-input');
    var tajFilledCount = 0;

    for (var i = 0; i < tajInputs.length; i++) {
        var input = tajInputs[i];
        var sanitizedValue = sanitizeNumberInput(input.value);

        if (sanitizedValue !== '') {
            input.value = sanitizedValue;
            input.classList.add('filled');
            tajFilledCount++;
        } else {
            input.classList.remove('filled');
        }

        if (i <= index) {
            input.classList.add('active');
        } else {
            input.classList.remove('active');
        }

        if (input.value === '') {
            input.classList.remove('error');
        } else if (/^[0-9]+$/.test(input.value)) {
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }
    }

    if (tajFilledCount === tajInputs.length) {
        for (var i = 0; i < tajInputs.length; i++) {
            var input = tajInputs[i];
            input.classList.add('completed');
        }
    }
}

function handleAdoszamInputChange(index) {
    var adoszamInputs = document.getElementsByClassName('adoszam-input');
    var adoszamFilledCount = 0;

    for (var i = 0; i < adoszamInputs.length; i++) {
        var input = adoszamInputs[i];
        var sanitizedValue = sanitizeNumberInput(input.value);

        if (sanitizedValue !== '') {
            input.value = sanitizedValue;
            input.classList.add('filled');
            adoszamFilledCount++;
        } else {
            input.classList.remove('filled');
        }

        if (i <= index) {
            input.classList.add('active');
        } else {
            input.classList.remove('active');
        }

        if (input.value === '') {
            input.classList.remove('error');
        } else if (/^[0-9]+$/.test(input.value)) {
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }
    }

    if (adoszamFilledCount === adoszamInputs.length) {
        for (var i = 0; i < adoszamInputs.length; i++) {
            var input = adoszamInputs[i];
            input.classList.add('completed');
        }
    }
}

function handleTajInputFocus(index) {
    var tajInputs = document.getElementsByClassName('taj-input');

    for (var i = 0; i < tajInputs.length; i++) {
        var input = tajInputs[i];

        if (i <= index) {
            input.classList.add('active');
        } else {
            input.classList.remove('active');
        }
    }
}

function handleAdoszamInputFocus(index) {
    var adoszamInputs = document.getElementsByClassName('adoszam-input');

    for (var i = 0; i < adoszamInputs.length; i++) {
        var input = adoszamInputs[i];

        if (i <= index) {
            input.classList.add('active');
        } else {
            input.classList.remove('active');
        }
    }
}

function sanitizeNumberInput(inputValue) {
    var sanitizedValue = '';

    for (var i = 0; i < inputValue.length; i++) {
        var char = inputValue.charAt(i);

        if (/^[0-9]$/.test(char)) {
            sanitizedValue += char;
        }
    }

    return sanitizedValue;
}

function handleInputNavigation(inputs, index) {
    var nextIndex = index + 1;

    if (nextIndex < inputs.length && inputs[index].value !== '' && /^[0-9]+$/.test(inputs[index].value)) {
        inputs[nextIndex].focus();
    }
}
