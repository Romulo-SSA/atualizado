const db = require('./db');

exports.buscarPorEmail = (email, callback) => {
  db.query('SELECT * FROM usuarios WHERE email = ?', [email], callback);
};

exports.criar = (usuario, callback) => {
  db.query(
    'INSERT INTO usuarios (nome, email, senha_hash, tipo_usuario) VALUES (?, ?, ?, ?)',
    [usuario.nome, usuario.email, usuario.senha_hash, usuario.tipo_usuario],
    callback
  );
};

