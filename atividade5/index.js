const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.render('index.html', {usuario});
});

app.post('/dados', function (req, res) {
    let usuario = {
        nome: req.body.nome,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        agendamento: req.body.agendamento
    };
    res.render('dados.html', {usuario});
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('App rodando na porta ' + PORT);
});
