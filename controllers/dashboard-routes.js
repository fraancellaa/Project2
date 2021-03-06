const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Post, User } = require('../models');
const sequelize = require('../config/connection');

router.get('/', withAuth, (req, res) => {
console.log(req.session);
console.log('======================');
Post.findAll({
    where: {
        user_id: req.session.user_id
    },
    attributes: [
        'id',
        'post_url',
        'title',
        'created_at'
    ],
    include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
.then(dbPostData => {
    const posts = dbPostData.map(post => post.get({ plain: true }));
    res.render('dashboard', { posts, loggedIn: true });
})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

  module.exports = router;