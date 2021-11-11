const { Router } = require("express");
const passport = require("passport");
const { postUser, postLogin, profileAuthenticate, googleLogin, newAdmin, getUserByName } = require("./user.controller.js");

const router = Router();

// router.get('/user', getUser);
// router.get('/user/:id', getUserById);
router.post('/user/register', passport.authenticate("register", { session: false }), postUser);
router.post('/user/login', postLogin);
router.get('/user/profile', passport.authenticate('jwt', { session: false }), profileAuthenticate);
router.post('/user/google', googleLogin);
router.put('/admin/update/:id', newAdmin);
router.get('/admin/users', getUserByName);


module.exports = router;