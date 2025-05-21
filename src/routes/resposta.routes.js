const express = require('express');
const router = express.Router();
const controller = require('../controllers/resposta.controller');

router.post('/', controller.criar);
router.get('/:chamadoId', controller.listar);

module.exports = router;
