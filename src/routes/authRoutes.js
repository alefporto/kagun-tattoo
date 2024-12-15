import express from 'express';
import { cadastrarTatuador, logarTatuador } from '../controllers/authController.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.json("Hello World");
})
router.post('/cadastro', cadastrarTatuador);
router.post('/login', logarTatuador);

export default router;
