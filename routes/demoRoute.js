const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

router.get('/', auth, (req, res)=>{
    res.send('This is the demo route')
})

module.exports = router