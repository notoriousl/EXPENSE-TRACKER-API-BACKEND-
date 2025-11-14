const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req,res) => {
    res.send('Expense Tracker is Running!');
});

app.get('/login', (req,res) => {
    res.send('ur in babes!');
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost ${PORT}`);
});