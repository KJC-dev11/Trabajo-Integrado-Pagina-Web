function validar(event) {
    event.preventDefault();
    
    let user = document.forms['form-contacto']['nombre'];
    let mail = document.forms['form-contacto']['mail'];
    let celular = document.getElementById('celular');

    let isValid = true;

    // Limpiar mensajes de error anteriores
    clearErrorMessages();

    // Validación del nombre
    if (user.value === "" || user.value.length < 4 || user.value.length > 10) {
        showError(user, 'El nombre es obligatorio y debe tener entre 4 y 10 caracteres');
        isValid = false;
    }

    // Validación del correo electrónico
    if (mail.value === "") {
        showError(mail, 'El correo es obligatorio y debe ser válido');
        isValid = false;
    }

    // Validación del teléfono
    const telefonoPattern = /^[0-9]{10}$/;
    if (celular.value === "" || !telefonoPattern.test(celular.value)) {
        showError(celular, 'El teléfono es obligatorio y debe tener 10 dígitos');
        isValid = false;
    }

    // Si todo es válido, mostrar el mensaje de éxito
    if (isValid) {
        let res = document.getElementById('resultado');
        let text = document.createElement('h2');
        text.innerHTML = '¡Gracias, ' + user.value + '! Hemos recibido tu solicitud. Te contactaremos pronto a través de ' + mail.value + ' o ' + celular.value + '.';
        res.innerHTML = ''; // Limpiar el resultado anterior
        res.appendChild(text);
        res.style.display = 'block';

        // Limpiar los campos del formulario
        user.value = '';
        mail.value = '';
        celular.value = '';
    }

    return false;
}

function clearErrorMessages() {
    // Elimina todos los mensajes de error previos
    let errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(message) {
        message.remove();
    });
}

function showError(input, message) {
    // Crear el mensaje de error
    let error = document.createElement('span');
    error.classList.add('error-message');
    error.style.color = 'red';
    error.innerHTML = message;

    // Insertar el mensaje de error después del campo de entrada
    input.parentNode.insertBefore(error, input.nextSibling);
}
