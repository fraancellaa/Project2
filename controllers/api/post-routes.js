const router = require('express').Router();
const { Post} = require('../../models/');

// get all users posts
router.get('/', (req, res) => {
    Post.findAll({
       order: [['created_at', 'DESC']] ,
       attributes: ['id', 'title', 'created_at'],
       include: [
           {
               model: User,
               attributes: ['username']
           }
       ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get a single post
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id,
        },
        attributes: ['id', 'title', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' })
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create a post route
router.post('/', async (req, res) => {
    try {
        const createdPost = await Post.create({
            id: req.body.id,
            blog_title: req.body.blog_title,
            blog_text: req.body.blog_text
        });
        res.status(200).json(createdComment);
    } catch (err) {
        res.status(400).json(err);
    }
})


//update a post's title
router.put('/posts/:id', (req, res) => {
    Post.update({
        title: req.body.title
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// delete an entry/post
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router; 