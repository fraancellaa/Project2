const router = require('express').Router();

<<<<<<< HEAD
router.get('/', (req, res) => {
    res.render('homepage', {
        id: 1,
        post_url: 'https://blahblog.com/first/',
        title: 'My first blog',
        created_at: new Date(),
        user: {
            username: 'random_user'
        }
    });
});
=======
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models')

router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'post_url',
        'title',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        // pass a single post object into the homepage template
        res.render('homepage', dbPostData[0]);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
>>>>>>> German

module.exports = router;