const calculadora = require('../calculadora/calculadora');

function indexCalculadora(req, res) {
    res.render('./views/index.html');
}

function calcular(req, res) {
    res.send(calculadora.somar());
    res.send(calculadora.subtrair());
    res.send(calculadora.multiplicar());
    res.send(calculadora.dividir());
}

module.exports = {
    indexCalculadora,
    calcular
};
