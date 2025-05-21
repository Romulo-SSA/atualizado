const express = require('express');
const cors = require('cors');

const usuarioRoutes = require('./routes/usuario.routes');
const chamadoRoutes = require('./routes/chamado.routes');
const respostaRoutes = require('./routes/resposta.routes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/chamados', chamadoRoutes);
app.use('/api/respostas', respostaRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});