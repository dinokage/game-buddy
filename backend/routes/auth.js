const router = require('express').Router();
const User  = require('../models/User');
router.get('/', function (req, res) {   res.write('Auth route here');   });
//register a new user
router.post('/register', function (req, res) {   
    const data = req.body;
    const newUser = new User(data);
    try {
        newUser.save().then(()=>{res.send('User Registered')});
    }
    catch (err) {   res.send('Error: ' + err.message); }
   });

module.exports = router;