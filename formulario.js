

    document.querySelector('.newsletter-form button').addEventListener('click', function(event) {
        event.preventDefault(); // Evitamos que el formulario se envíe
        var nombre = document.getElementById('nombre').value;
        var correo = document.getElementById('correo').value;
        if (!nombre || !correo) {
            // Si no se ha introducido el nombre o el correo, mostramos una alerta
            alert('No has introducido correctamente los datos');
        } else {
            // Aquí puedes agregar la lógica para manejar la suscripción
            alert('¡Gracias por suscribirte!');
        }
    });

