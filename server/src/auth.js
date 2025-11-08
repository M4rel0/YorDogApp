import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { query } from './db.js';

const router = Router();

function signToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES || '7d',
  });
}

// POST /auth/register
router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body || {};
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'E-mail e senha são obrigatórios' });
    }

    const existing = await query('SELECT id FROM users WHERE email = ?', [
      email,
    ]);
    if (existing.length) {
      return res.status(409).json({ message: 'E-mail já cadastrado' });
    }

    const hash = await bcrypt.hash(password, 10);
    const result = await query(
      'INSERT INTO users (email, password_hash, name) VALUES (?, ?, ?)',
      [email, hash, name || null]
    );

    const user = { id: result.insertId, email, name: name || null };
    const token = signToken(user);
    return res.status(201).json({ user, token });
  } catch (e) {
    console.error('REGISTER ERROR:', e);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
});

// POST /auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'E-mail e senha são obrigatórios' });
    }

    const rows = await query(
      'SELECT id, email, password_hash, name FROM users WHERE email = ?',
      [email]
    );
    if (!rows.length) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    const user = rows[0];
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ message: 'Credenciais inválidas' });

    const token = signToken(user);
    return res.json({
      user: { id: user.id, email: user.email, name: user.name },
      token,
    });
  } catch (e) {
    console.error('LOGIN ERROR:', e);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
});

export default router;
