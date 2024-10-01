function validar() {
    // Extraer los inputs
    let user = document.forms['form-contacto']['user'];
    let mail = document.forms['form-contacto']['mail'];
    let celular = document.getElementById('celular');  // opcional, ya que no es requerido

    let isValid = true;

    // Validar el primer input (Nombre)
    if (user.value === "" || user.value.length < 4 || user.value.length > 10) {
        document.getElementById('spanErrorUser').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('spanErrorUser').style.display = 'none';
    }

    // Validar el segundo input (Correo Electrónico)
    if (mail.value === "") {
        document.getElementById('spanErrorMail').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('spanErrorMail').style.display = 'none';
    }

    // Si todo es válido, procesar el envío y mostrar el mensaje
    if (isValid) {
        let res = document.getElementById('resultado');
        let text = document.createElement('h2');
        text.innerHTML = 'El usuario ' + user.value + ' ha sido enviado con éxito.';
        res.innerHTML = ''; // Limpiar el resultado anterior
        res.appendChild(text);
        res.style.display = 'block';

        // Limpiar los campos del formulario
        user.value = '';
        mail.value = '';
        celular.value = '';  // Esto es opcional, ya que el campo de teléfono no es requerido
    }

    return false; // Prevenir la actualización de la página
}
