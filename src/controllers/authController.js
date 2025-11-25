import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../../models/User.js';

export const register = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
        return res.status(400).json({ error: 'Email already registered' });
        }

        const hashed = await bcrypt.hash(password, 10);

        const result = await User.create({ email: email, password_hash: hashed });
        console.log(result.User);
        
        const token = jwt.sign({ userID: result.id }, process.env.JWT_SECRET, {expiresIn: '1h'} );
        res.status(201).json({
            message: 'User registered successfully',
            user: { id: result.id, email: result.email },
            token
        });
    } catch (error) {

        res.status(500).json({ error: error.message })
    }
    
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Compare passwords
    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({
      message: 'Login successful',
      user: { id: user.id, email: user.email },
      token
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};