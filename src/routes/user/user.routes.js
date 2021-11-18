const { Router } = require("express");
const passport = require("passport");
const {
    postUser,
    postLogin,
    profileAuthenticate,
    googleLogin,
    newAdmin,
    getUserByName,
    editUser,
    addFavorite,
    getUserByID,
    deleteX,
    deleteAll
} = require("./user.controller.js");

const router = Router();

//   /users
router.get('/user/:userId', getUserByID);
router.post('/user/register', passport.authenticate("register", { session: false }), postUser);
router.post('/user/login', postLogin);
router.get('/user/profile', passport.authenticate('jwt', { session: false }), profileAuthenticate);
router.post('/user/google', googleLogin);
router.put('/admin/update/:id', newAdmin);
router.get('/admin/users', getUserByName);
router.post('/user/google', googleLogin);
router.patch('/user/edit/:id', editUser);
router.put('/user/favorite', addFavorite);
router.put('/user/deleteX/:userId', deleteX);
router.put('/user/deleteAll/:userId', deleteAll);


module.exports = router;