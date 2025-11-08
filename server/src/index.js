import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRoutes from './auth.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ ok: true }));

app.use('/auth', authRoutes);

// ⚠️ IMPORTANTE → aceitar conexões da rede
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server rodando em http://0.0.0.0:${PORT}`);
});
