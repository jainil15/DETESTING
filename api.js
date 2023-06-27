const express = require('express');
const router = express.Router();

router.post('./submit-name', (req, res) => {
    const name = req.body.name
    const password = req.body.password
    console.log("Submitted name: ", name)
    res.sendStatus(200)
})

module.exports = router