const express = require('express');
const router = express.Router();

// Controllers
const { pingServer } = require('../controllers/pingController')

// Routes
router.get('/', (req, res) => {
  res.send("<h2>Hi There!</h2>")
})

router.get('/ping', pingServer);

module.exports = router;
