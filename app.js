const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Calculator API Running");
});

app.get('/add', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({ result: a + b });
});

app.get('/sub', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({ result: a - b });
});

app.get('/mul', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({ result: a * b });
});

app.get('/div', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({ result: a / b });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});