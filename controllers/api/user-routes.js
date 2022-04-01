<<<<<<< HEAD
const { Router } = require("express");
const { route } = require("express/lib/application");
const { UPSERT } = require("sequelize/types/query-types");

//GET ALL USERS
router.get('/', (req, res) => {
    //ACCESS USER MODEL AND USE .FINDALL() METHOD SIM TO SQL COMMAND: SELECT * FROM users;
    User.findAll()
=======
const router = require('express').Router();
const { User } = require('../../models');

// GET /api/users --- ALL users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
>>>>>>> 4fa10b46334deaa6cc06b674928a3ed857c1212d
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
<<<<<<< HEAD
    });
});

//GET ONE USER AT A TIME SIM TO SQL: SELECT * FROM users WHERE id = 1
router.get('/:id', (req,res) => {
    //SEQUELIZE .FINDONE() METHOD
    User.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//POST ROUTE TO CREATE A USER
route.post('/', (req,res) => {
    //ALL INFO FROM USER MODEL TABLE IE USERNAME, EMAIL, PASSWORD THIS SEQUELIZE METHOD .CREATE() IS SIM TO SQL COMMANDS: 
    /*
    INSERT INTO users
        (username, email, password)
    VALUES
        ("<actual username>", "<actual email>", "<actual password>");
    */
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//PUT ROUTE TO UPDATE EXISTING DATA USES SEQUELIZE .UPDATE() METHOD COMBINING PARAMETERS FOR BOTH CREATING AND LOOKING-UP DATA BY PASSING-IN BOTH REQ.BODY AND REQ.PARAMS.ID. THE SQL EQUIVALENT:
/*
UPDATE users
SET username = "Lernantino", email = "<ACTUAL.EMAIL>", password = "<ACTUAL-PASSWD>"
WHERE id = 1;
*/
router.put('/:id', (req, res) => {
    //EXPECTS KEY/VALUE PAIRS TO MATCH MODEL
    User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData[0]) {
                res.status(404).json({ message: 'No user found with this id.' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//DELETE A SPECIFIC USER FROM THE DB VIA THE SEQUELIZE .DESTROY() METHOD AND ID WHERE TO REMOVE DATA FROM THE USER DB TABLE
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
=======
    })
});

// GET /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
           id: req.params.id 
>>>>>>> 4fa10b46334deaa6cc06b674928a3ed857c1212d
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
<<<<<<< HEAD
            res.status(404).json({ message: 'No user found with this id.' });
=======
            res.status(400).json({ message: 'No user found with this id' });
>>>>>>> 4fa10b46334deaa6cc06b674928a3ed857c1212d
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
<<<<<<< HEAD
});
=======
});


//POST /api/ update user
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// // Create new user
// router.post('/', async (req, res) => {
//     try {
//     const dbUserData = await User.create({
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password
//         });

//         req.session.save(() => {
//             req.session.loggedIn = true;

//             res.status(200).json(dbUserData);
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err)
//     }
// });

// Login
router.post('/login', (req, res) => {
    User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(400).json({ message: 'Incorrect email. Please try again!' });
            return;
            }

        //verify user 
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password. Please try again!' });
            return;
        }

        res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
}); 

// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(400).end();
    }
});

// PUT /api/users/1
router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData[0]) {
            res.status(400).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user found with this id' })
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
>>>>>>> 4fa10b46334deaa6cc06b674928a3ed857c1212d
