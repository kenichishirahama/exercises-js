/**
 * Valida un formulario de registro con estas reglas:
 * - Nombre: mínimo 2 caracteres, máximo 50
 * - Email: debe contener @ y .
 * - Password: mínimo 8 caracteres, al menos 1 número y 1 mayúscula
 * - Edad: entre 18 y 100 años
 */

function validarFormulario(usuario) {
    // Tu código aquí
    const errores = [];

    //validar el nombre
    //que es typeof? es un operador que devuelve el tipo de dato de una variable 
    //que es || ? es un operador logico que significa "o"
    if (typeof usuario.nombre !== 'string' || usuario.nombre.length < 2 || usuario.nombre. length > 50) {
        errores.push("El nombre debe contener entre 2 y 50 caracteres");
    }
    
    //validar el email
    if (usuario.email.indexOf('@') === -1 || usuario.email.indexOf('.') === -1) {
        errores.push("el email debe contener @ y .");
    }

    //Validar la contraseña
    if (usuario.password.length < 8 || !/[A-Z]/.test(usuario.password) || !/[0-9]/.test(usuario.password)) {
        errores.push("La contraseña debe tener al menos 8 caracteres, una mayuscula y un numero");
    }

    //validar edad 
    if (typeof usuario.edad !== 'number' || usuario.edad < 18 || usuario.edad > 100) {
        errores.push("La edad debe estar entre 18 y 100 años");
    }

    //Retornar el resultado de la validacion
    return {
        valido: errores.length === 0,
        errores: errores
    }
}

//


// Ejemplo:
console.log(validarFormulario({
    nombre: "Ana",
    email: "ana@gmail.com",
    password: "Password123",
    edad: 25
})); // debería retornar { valido: true, errores: [] }