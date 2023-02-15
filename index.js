const express = require('express');

const app = express();

app.get('/test', (req, res) => {
    
    return res.send('Ok');
});

app.listen(3000, () => {
    console.log('Runing in port 3333');
});