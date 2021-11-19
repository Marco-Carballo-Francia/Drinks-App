const passport = require("passport");
const User = require("../../models/User.js");
const localStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;


passport.use('register', new localStrategy({
    usernameField: "email",
    passwordField: "contraseña",
    passReqToCallback: true
}, async (req, email, contraseña, done) => {
    try {
        const { nombre, apellido } = req.body;
        const user = await User.create({ nombre, apellido, email, contraseña });
        return done(null, user);
    } catch (e) {
        return done(e);
    }
}));

passport.use("login", new localStrategy({
    usernameField: "email",
    passwordField: "contraseña"
}, async (email, contraseña, done) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return done(null, false, { message: "No se econtro el usuario" });
        }

        const validate = await user.isValidContraseña(contraseña);
        if (!validate) {
            return done(null, false, { message: "No se econtro la validacion" });
        }

        return done(null, user, { message: "Se logueo Correctamente" });
    } catch (e) {
        return done(e);
    }
}));

passport.use(new JWTStrategy({
    secretOrKey: 'top_secret',
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
}, async (token, done) => {
    try {
        return done(null, token.user);
    } catch (e) {
        done(error);
    }
}));