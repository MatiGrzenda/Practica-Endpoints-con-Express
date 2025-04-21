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

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});