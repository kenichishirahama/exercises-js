/**
 * IDENTIFICA la vulnerabilidad de seguridad en esta función
 * y ESCRIBE una versión segura
 */

function renderizarComentario(usuario, comentario) {
    // ¡VULNERABLE! ¿Puedes ver por qué?
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    h3.textContent = usuario;
    p.textContent = comentario;
    div.appendChild(h3);
    div.appendChild(p);
    //La vulnerabilidad es que si el usuario introduce codigo html o javascript en el comentaio
    //se ejecutara en el navegador y puede ser peligroso
    //Para solucionarlo, en lugar de usar innerHTML, usamo text content que no interpreta codigo html
    //div.innerHTML = `<h3>${usuario}</h3><p>${comentario}</p>`;
    return div;
}

// Ejemplo de ataque:
// renderizarComentario('Hacker', '<script>alert("XSS")</script>');