const { Router } = require("express");
const passport = require("passport");
const { postUser, postLogin, profileAuthenticate, googleLogin } = require("./user.controller.js");
// getUser, getUserById, getUserByNP otros contolers

const router = Router();

// router.get('/user', getUser);
// router.get('/user/:id', getUserById);
router.post('/user/register', passport.authenticate("register", { session: false }), postUser);
router.post('/user/login', postLogin);
router.get('/user/profile', passport.authenticate('jwt', { session: false }), profileAuthenticate);
router.post('/user/google', googleLogin)

module.exports = router;