const db = require('./db');

exports.criar = (resposta, callback) => {
  const sql = 'INSERT INTO respostas (chamado_id, usuario_id, mensagem) VALUES (?, ?, ?)';
  db.query(sql, [resposta.chamado_id, resposta.usuario_id, resposta.mensagem], callback);
};

exports.listarPorChamado = (chamadoId, callback) => {
  const sql = `
    SELECT r.*, u.nome AS autor 
    FROM respostas r
    JOIN usuarios u ON r.usuario_id = u.id
    WHERE chamado_id = ?
    ORDER BY data_envio ASC
  `;
  db.query(sql, [chamadoId], callback);
};
