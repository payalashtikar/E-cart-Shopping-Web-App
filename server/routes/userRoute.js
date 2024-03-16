const express = require('express');
const User = require('../model/userModel');
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY

// REGISTER
router.post('/signup', async (req, res) => {
    const { firstName, lastName, username, email, password } = req.body;
    try {
        if (!firstName || !lastName || !username || !email || !password)
            return res.status(400).send("Please enter all fields");

        const userExists = await User.findOne({ $or: [{ username }, { email }] })
        if (userExists) {
            return res.status(400).json({ message: "User already exists" })
        }

        const hashedPAssword = await bcrypt.hash(password, 12);
        const newUser = new User({ firstName, lastName, username, email, password: hashedPAssword });
        await newUser.save()
        return res.status(200).json({ message: "Registration SUCCESS", newUser })
    }
    catch (error) {
        return res.status(400).json({ error: "Registration FAILED", error })
    }

})

router.post('/signin', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password)
            return res.status(400).send("Please enter all fields");

        const user = await User.findOne({ $or: [{ username }, { email }] })
        if (!user) {
            return res.status(400).json({ message: "User not found" })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid credentials" })
        }

        const token = jwt.sign({ _id: user._id }, secretKey, { expiresIn: '48hr' })
        return res.status(200).json({ message: "Login SUCCESS", token: token, user })
    }
    catch (error) {
        return res.status(400).json({ error: "Login FAILED", error })
    }

})


module.exports = router;