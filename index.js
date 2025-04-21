import express from 'express'; // Importa el módulo express
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Bienvenido a mi servidor");
})

app.get('/saludo', (req, res) => {
    res.send("¡Hola, mundo!");
})

app.get('/numero', (req, res) => {
    res.send(42);
})

app.get('/usuario', (req, res) => {
    res.json({ "nombre": "Ana", "edad": 25 });
})

app.get('/productos', (req, res) => {
    res.json(["Mouse", "Teclado", "Monitor"]);
})

app.get('/materias', (req, res) => {
    res.json([{ "nombre": "Matemática" }, { "nombre": "Lengua" }]);
})

const personas = [];
app.get('/personas', (req, res) => {
    res.json(personas);
})

app.post('/personas', (req, res) => {
    const persona = req.body;
    if (!persona) return res.status(400).json({ error: 'Faltan datos de la persona' });
    personas.push(persona);
    res.status(201).json({ mensaje: 'Persona agregada', personas });
})

app.delete('/personas/:indice', (req, res) => {
    const indice = parseInt(req.params.indice);

    if (isNaN(indice) || !personas[indice]) {
        return res.status(404).json({ error: 'Persona no encontrada' });
    }

    const eliminado = personas.splice(indice, 1);
    res.json({ mensaje: `Persona eliminada: ${eliminado[0].nombre}`, personas });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});