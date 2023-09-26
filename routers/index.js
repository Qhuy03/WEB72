const router = require('express').Router();

const user = [
    {
        id: 1,
        name: 'John',
        age: 22
    }
]
router.get('/user', (req, res) => {
    return res.status(200).json({message: 'Hello World', user});
});

module.exports = router;