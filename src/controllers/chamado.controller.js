const Chamado = require('../models/chamado.model');

exports.criar = (req, res) => {
  Chamado.criar(req.body, (err) => {
    if (err) return res.status(500).send(err);
    res.status(201).send({ message: 'Chamado criado com sucesso' });
  });
};

exports.listar = (req, res) => {
  Chamado.listarTodos((err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
};
