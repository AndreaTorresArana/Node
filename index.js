const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir archivos estáticos (Bootstrap, CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Configurar motor de plantillas EJS (opcional si quieres vistas dinámicas)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ruta principal (sirve index.html desde /public)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  // O con EJS: res.render('index', { titulo: "Página con Node + Bootstrap" });
});

// Puerto dinámico para despliegue en la nube
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
