const express = require('express');

const app = express();
const port = 3000 || 5000

app.use(express.static(`${__dirname}/../public`));

app.set('views', `${__dirname}/../public/views`);
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port , () => {
    console.log('App listen on port: ', port);
})