const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.port || 3000;


app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/parciales');

//Express HBS
app.set('view engine', 'hbs');


// app.get('/', function(req, res) {

//     // res.send('Hola Mundo')
//     let salida = {
//         nombre: 'Fabian',
//         edad: 40,
//         url: req.url
//     }
//     res.send(salida);
// });


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Fabian'
    });
});


app.get('/about', (req, res) => {
    res.render('about');
});



app.get('/data', function(req, res) {
    res.send('Hola Data')
});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
});