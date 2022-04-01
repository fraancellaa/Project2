const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage',  {
        id: 1,
        post_url: 'https://blahblog.com/first/',
        title: 'Home Page',
        created_at: new Date(),
        user: {
            username: 'random_user'
        }
    });
});

router.get('/homepage', (req, res) => {
    res.render('homepage',  {
        id: 1,
        post_url: 'https://blahblog.com/first/',
        title: 'Dashboard',
        created_at: new Date(),
        user: {
            username: 'random_user'
        }
    });
});

router.get('/login', (req, res) => {
    res.render('login');
})

module.exports = router;