import express from 'express';
const router = express.Router();

import { loginAdmin, registerAdmin } from '../controllers/Admin.js'; // ✅ Note the .js extension

router.post('/login', loginAdmin);
router.post('/register', registerAdmin); // Optional route

export default router;
