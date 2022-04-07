//HOME-ROUTES ARE FOR ALL USER-FACING ROUTES
const router = require('express').Router();
const sequelize = require('../config/connection')
const { Post, User } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage', {
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
    res.render('homepage', {
        id: 1,
        post_url: 'https://blahblog.com/first/',
        title: 'Dashboard',
        created_at: new Date(),
        user: {
            username: 'random_user'
        }
    });
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        id: 1,
        post_url: 'https://blahblog.com/first/',
        title: 'Dashboard',
        created_at: new Date(),
        user: {
            username: 'random_user'
        }
    });
});
// get all posts for homepage
// router.get('/', (req, res) => {
//     Post.findAll({
//         attributes: [
//             'id',
//             'post_url',
//             'title',
//             'created_at'
//         ],
//         include: [
//             {
//                 model: User,
//                 attributes: ['username']
//             }
//         ]
//     })
//     .then(dbPostData => {
//         const posts = dbPostData.map(post => post.get({ plain: true }));

//         res.render('homepage', {
//             posts,
//             loggedIn: req.session.loggedIn
//         });
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// get single post

// login router
router.get('/login', (req, res) => {
    res.render('login');
})

module.exports = router;