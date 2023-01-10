const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('logout!');
});

// receives post request to /logout from client side click event - not working
router.post('/', (req, res) => {
  res.clearCookie('email');
  res.send({ message: 'Logout', loginSuccess: false });
});


module.exports = router;
