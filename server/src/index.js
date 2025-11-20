import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import authRoutes from './auth.js';
import profileRoutes from './profiles.js'; // <-- novo

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ ok: true }));

app.use('/auth', authRoutes);
app.use('/profiles', profileRoutes); // <-- novo

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server rodando em http://0.0.0.0:${PORT}`);
});
