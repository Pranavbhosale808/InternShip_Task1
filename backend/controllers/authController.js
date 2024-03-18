require('dotenv').config()
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validateRegistrationInput } = require('../validators/validateRegisterationInput');
const Home = async(req,res)=>{
    res.render('home');
}


const register = async (req, res, next) => {
  try {
    const { name, email, passwords } = req.body;

    // Validate input
    const validationResult = validateRegistrationInput({ name, email, passwords });
    if (validationResult !== true) {
      return res.status(400).json({ error: validationResult });
    }

    // Check if user already exists
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists with this email' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(passwords, 10);

    // Create a new user
    const newUser = await prisma.user.create({ data: { name, email,passwords: hashedPassword} });

    // Generate JWT token
    const token = jwt.sign({ userId: newUser.id }, "thisissecretkey", { expiresIn: '1h' });

    // Save token in localStorage
    res.setHeader('Set-Cookie', `token=${token}; Path=/; HttpOnly`);

    return res.status(201).json({ message: 'User registered successfully', token: token });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const login = async (req, res) => {
  try {
    const { email, passwords } = req.body;

    // Find user by email
    const user = await prisma.user.findUnique({ where: { email } });

    // Check if user exists
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(passwords, user.passwords);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, "thisissecretkey", { expiresIn: '1h' });
    res.status(200).json({ token });

    if (!user.isVerified) {
      res.status(200).json({ alert: 'Login successful , Verify Your account', token });
    }
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};



  
module.exports = {Home, register,login}