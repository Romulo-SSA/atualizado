const Resposta = require('../models/resposta.model');

exports.criar = (req, res) => {
  Resposta.criar(req.body, (err) => {
    if (err) return res.status(500).send(err);
    res.status(201).send({ message: 'Resposta registrada com sucesso' });
  });
};

exports.listar = (req, res) => {
  Resposta.listarPorChamado(req.params.chamadoId, (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
};
