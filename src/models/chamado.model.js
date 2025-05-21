const db = require('./db');

exports.criar = (chamado, callback) => {
  const sql = 'INSERT INTO chamados (titulo, descricao, status, usuario_id) VALUES (?, ?, ?, ?)';
  db.query(sql, [chamado.titulo, chamado.descricao, chamado.status, chamado.usuario_id], callback);
};

exports.listarTodos = (callback) => {
  db.query('SELECT c.*, u.nome AS nome_usuario FROM chamados c JOIN usuarios u ON c.usuario_id = u.id', callback);
};
