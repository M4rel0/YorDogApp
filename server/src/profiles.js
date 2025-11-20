// server/src/profiles.js
import { Router } from 'express';
import { query } from './db.js';

const router = Router();

/**
 * POST /profiles
 * Cria ou atualiza o perfil de um dog
 */
router.post('/', async (req, res) => {
  try {
    const { userId, dogName, breed, age, bio, gender, avatarUrl } =
      req.body || {};

    if (!userId || !dogName) {
      return res
        .status(400)
        .json({ message: 'userId e dogName são obrigatórios.' });
    }

    // Verifica se já existe perfil
    const existing = await query(
      'SELECT id FROM dog_profiles WHERE user_id = ?',
      [userId]
    );

    if (!existing.length) {
      // INSERT
      const result = await query(
        `INSERT INTO dog_profiles
         (user_id, dog_name, breed, age, bio, gender, avatar_url)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          userId,
          dogName,
          breed ?? null,
          age ?? null,
          bio ?? null,
          gender ?? null,
          avatarUrl ?? null,
        ]
      );

      return res.status(201).json({
        id: result.insertId,
        userId,
        dogName,
        breed,
        age,
        bio,
        gender,
        avatarUrl,
      });
    } else {
      // UPDATE
      const id = existing[0].id;

      await query(
        `UPDATE dog_profiles
         SET dog_name = ?, breed = ?, age = ?, bio = ?, gender = ?, avatar_url = ?
         WHERE id = ?`,
        [
          dogName,
          breed ?? null,
          age ?? null,
          bio ?? null,
          gender ?? null,
          avatarUrl ?? null,
          id,
        ]
      );

      return res.json({
        id,
        userId,
        dogName,
        breed,
        age,
        bio,
        gender,
        avatarUrl,
      });
    }
  } catch (e) {
    console.error('PROFILE SAVE ERROR:', e);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
});

/**
 * GET /profiles/:userId
 */
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    const rows = await query('SELECT * FROM dog_profiles WHERE user_id = ?', [
      userId,
    ]);

    if (!rows.length) {
      return res.status(404).json({ message: 'Perfil não encontrado.' });
    }

    return res.json(rows[0]);
  } catch (e) {
    console.error('PROFILE GET ERROR:', e);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
});

export default router;
