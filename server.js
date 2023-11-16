const express = require('express')
const app = express()
const path = require('path');
require('dotenv').config();

//app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

const router = require('./app/routes.js');
router(app);

/*app.get('/', (req, res) => {
    res.render(
        'index', 
        {test : "HEllO WORLD !", note: "Début projet immo"}
    );
})*/

app.listen(process.env.HTTP,() => {
    if(process.env.APP_ENV == 'dev') {
        console.log(`Le serveur est démarré : http://localhost:${process.env.HTTP}`);
    }
})