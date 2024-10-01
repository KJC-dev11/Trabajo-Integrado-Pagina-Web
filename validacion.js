function validar(event) {
    event.preventDefault();

    let user = document.forms['form-contacto']['nombre']; 
    let mail = document.forms['form-contacto']['mail'];
    let celular = document.getElementById('celular'); 

    let isValid = true;

    if (user.value === "" || user.value.length < 4 || user.value.length > 10) {
        document.getElementById('spanErrorUser').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('spanErrorUser').style.display = 'none';
    }

    if (mail.value === "") {
        document.getElementById('spanErrorMail').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('spanErrorMail').style.display = 'none';
    }

    const telefonoPattern = /^[0-9]{10}$/;
    if (celular.value === "" || !telefonoPattern.test(celular.value)) {
        document.getElementById('spanErrorCelular').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('spanErrorCelular').style.display = 'none';
    }

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
        celular.value = '';
    }

    return false; // Asegurar que el formulario no se envíe
}
