const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// @desc    Login/landing page
// @route   GET/
router.get('/', ensureGuest, (req, res) => {
    res.render('Login', {
        layout: 'login',
    })
})



// @desc    Dashboard page
// @route   GET /dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
 
    res.render('dashboard')
})

module.exports = router