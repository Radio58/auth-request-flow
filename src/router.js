const express = require('express');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const router = express.Router();

const mockUser = {
    username: 'authguy',
    password: 'mypassword',
    profile: {
        firstName: 'Chris',
        lastName: 'Wolstenholme',
        age: 43
    }
};

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === mockUser.username && password === mockUser.password) {
        const token = jwt.sign({ username: mockUser.username }, secret)
        res.json({ token })
    } else {
        res.status(401).json({error: "invalid credentials"})
    }
});

router.get('/profile', (req, res) => {
  
});


module.exports = router;
