function validar() {
    // Primer paso: extraer los inputs
    let user = document.forms['form-contacto']['nombre'];
    let mail = document.forms['form-contacto']['mail'];
    let pass = document.getElementById('pass');

    // Segundo paso: controlar los inputs

    // Validar el primer input (Nombre)
    if (user.value === "" || user.value.length < 4 || user.value.length > 10) {
        document.getElementById('spanErrorUser').style.display = 'block';
        return false;
    } else {
        document.getElementById('spanErrorUser').style.display = 'none';
    }

    // Validar el segundo input (Correo)
    if (pass.value === "") {
        document.getElementById('spanErrorPass').style.display = 'block';
        return false;
    } else {
        document.getElementById('spanErrorPass').style.display = 'none';
    }

    // Tercer paso: procesar la información correcta
    let res = document.getElementById('resultado');
    let text = document.createElement('h2');
    text.innerHTML = 'El usuario ' + user.value + ' ha sido creado con éxito.';
    res.innerHTML = ''; // Limpiar el resultado anterior
    res.appendChild(text);
    res.style.display = 'block';

    return false; // Prevenir el envío del formulario
}
