/**
 * EJERCICIO: Validador de Contraseñas
 * Debes crear una función que valide si una contraseña es segura
 * 
 * REGLAS:
 * - Mínimo 8 caracteres
 * - Al menos 1 mayúscula
 * - Al menos 1 minúscula  
 * - Al menos 1 número
 * - Al menos 1 carácter especial (@, #, $, etc.)
 * - No puede contener espacios
 * 
 * La función debe retornar un objeto con:
 * - valida: true/false
 * - errores: array con los tipos de error encontrados
 */

function validarPassword(password) {
    // ¡INTÉNTALO PRIMERO TÚ! 
    // Ponte un temporizador de 15 minutos antes de pedir ayuda
    const errores = [];

    if (password.length < 8) {
        errores.push("La contraseña debe tener minimo 8 caracteres ");
    }

    if (!/[A-Z]/.test(password)) {
        errores.push("La contraseña debe tener al menos una letra mayuscula");
    }

    if(!/[a-z]/.test(password)) {
        errores.push("La contraseña debe contener al menos una letra minuscula");
    }

    if (!/[0-9]/.test(password)) {
        errores.push("La contraseña debe tener al menos un numero");
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
        errores.push("La contraseña debe contener al menos un caracter especial");
    }

    if (/\s/.test(password)) {
        errores.push("La contraseña no puede tener espcios");
    }

    return {
        valida: errores.length === 0,
        errores: errores
    };
}

//Probar la funcion

console.log(validarPassword("Password123!")); // { valida: true, errores: [] }
console.log(validarPassword("pass"));
console.log(validarPassword("PASSWORD123"));