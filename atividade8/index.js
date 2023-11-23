const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + './source/views');

app.use(express.urlencoded({extended: true}));

app.use("/", require('./source/routes/calculadoraRoutes'));

const PORT = 8080;
app.listen(PORT, function () {
    console.log("App rodando na porta " + PORT);
})
