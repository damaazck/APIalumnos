const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.get('/alumnos', (req, res) => {
    try {
        const rutaDB = path.join(__dirname, 'db.json');
        const datos = JSON.parse(
            fs.readFileSync(rutaDB, 'utf8')
        );

        res.json(datos.alumnos);
    } catch (error) {
        res.status(500).json({
            error: 'No se pudieron cargar los alumnos'
        });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
});