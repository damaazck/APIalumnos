
const contenedor = document.getElementById('lista-alumnos');

async function cargarAlumnos() {
    try {
        const respuesta = await fetch('/alumnos');

        if (!respuesta.ok) {
            throw new Error('Error al consultar la API');
        }

        const alumnos = await respuesta.json();

        contenedor.innerHTML = alumnos.map(alumno => `
            <article>
                <h2>${alumno.nombre}</h2>

                <img
                    src="${alumno.imagenes}"
                    alt="Foto de ${alumno.nombre}"
                    width="150"
                    onerror="this.alt='Imagen no disponible'; this.style.display='none';"
                >

                <p><strong>Edad:</strong> ${alumno.edad}</p>
                <p><strong>Carrera:</strong> ${alumno.carrera}</p>
                <p><strong>Semestre:</strong> ${alumno.semestre}</p>
                <p><strong>Promedio:</strong> ${alumno.promedio}</p>
            </article>
        `).join('');

    } catch (error) {
        console.error(error);
        contenedor.textContent =
            'No se pudieron cargar los alumnos.';
    }
}

cargarAlumnos();