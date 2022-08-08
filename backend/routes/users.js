const router = require('express').Router();
router.get('/', function (req, res) {   res.write('User route here');   });
module.exports = router;