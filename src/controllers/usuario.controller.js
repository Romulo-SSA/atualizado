const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario.model');

exports.criar = (req, res) => {
  const { nome, email, senha, tipo_usuario } = req.body;
  if (!nome || !email || !senha) {
    return res.status(400).send({ message: 'Nome, email e senha são obrigatórios.' });
  }
  bcrypt.hash(senha, 10, (err, hash) => {
    if (err) return res.status(500).send(err);
    Usuario.criar({ nome, email, senha_hash: hash, tipo_usuario: tipo_usuario || 'comum' }, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(409).send({ message: 'Email já cadastrado.' });
        }
        return res.status(500).send(err);
      }
      res.status(201).send({ message: 'Usuário cadastrado com sucesso!' });
    });
  });
};

exports.login = (req, res) => {
  const { email, senha } = req.body;
  Usuario.buscarPorEmail(email, (err, results) => {
    if (err) return res.status(500).send(err);
    if (!results.length) return res.status(404).send({ message: 'Usuário não encontrado' });

    const usuario = results[0];
    bcrypt.compare(senha, usuario.senha_hash, (err, match) => {
      if (err) return res.status(500).send(err);
      if (!match) return res.status(401).send({ message: 'Senha incorreta' });

      res.send({
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
      });
    });
  });
};
