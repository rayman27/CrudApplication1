const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const controllerinfo = require('./controllers/controllerinfo');
console.log("hello" + controllerinfo);

const app = express();

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout' }));
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: false }))
app.use(controllerinfo);

const port = process.env.PORT || 1000;
app.listen(port, () => { console.log(`server running at ${port} port`) });