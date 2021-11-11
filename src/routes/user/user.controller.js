const passport = require("passport");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const User = require("../../models/User");
const config = require("../../config.js");

const client = new OAuth2Client(config.GOOGLE_CLIENT_ID);

const googleLogin = async (req, res) => {
  const { tokenId } = req.body;
  client
    .verifyIdToken({ idToken: tokenId, audience: config.GOOGLE_CLIENT_ID })
    .then((response) => {
      const { email_verified, email, picture, name } = response.payload;
      if (email_verified) {
        User.findOne({ email }).exec(async (err, user) => {
          if (err) {
            return res.status(400).json({
              error: "Something went wrong",
            });
          } else {
            if (user) {
              const { _id } = user;
              const token = jwt.sign({ user: { id: _id, email } }, "top_secret");
             /* const userFront = {
                id: _id,
                email: email,
                imagen: picture,
                nombre: name,
                token,

              };*/
               
               user.token=token;
              await user.save(); 
              //   console.log(userFront);
              return res.json(user);
            } else {
              let contraseña = email + "top_secret";
              let newUser = new User({
                email,
                contraseña,
                nombre: name,
              });
              newUser.save((err, data) => {
                if (err) {
                  return res.status(400).json({
                    error: "Something went wrong...",
                  });
                }
                const token = jwt.sign({ user: newUser }, "top_secret");
                const { _id, email } = newUser;
                res.json({
                  id: _id,
                  email: email,
                  imagen: picture,
                  nombre: name,
                  token,
                });
              });
            }
          }
        });
      }
    })
    .catch((err) => console.log("ERROR googleLogin"));
};

const postUser = async (req, res) => {
  res.json({ message: "Se registro correctamente", user: req.user });
};

const postLogin = async (req, res) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error("New Error");
        return error;
      }

      req.login(user, { session: false }, async (err) => {
        if (err) return err;

        const body = { id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, "top_secret");

        return res.json({ user });
      });
    } catch (error) {
      console.log(error);
    }
  })(req, res);
};

const profileAuthenticate = async (req, res, next) => {
  res.json({
    message: "Dale que sos vos",
    user: req.user,
    token: req.query.secret_token,
  });
};

const editUser = async (req, res, next) => {
  const { nombre, apellido, direccion, telefono, documento } = req.body;
  console.log(req.body, apellido)
  try {

    let edit = await User.findByIdAndUpdate(req.params.id,{
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      documento: documento,
      direccion: direccion

    }, {new: true})

    await edit.save();

    if(edit) res.json(edit);
    else res.send("not found");


  } catch (error) {
    console.log(error);
  }
};

//  const getUserByNP = async (req, res) => {
//     const { nombre, contraseña } = req.body;
//     try {
//         const getByNP = await User.findOne({nombre, contraseña});
//         console.log('getByNP', getByNP);
//         res.json(getByNP);
//     } catch (error) {
//         console.log(error);
//     }
// }

//  const getUserById = async (req, res) => {
//     const { id } = req.params
//     try {
//         const getById = await User.findById(id);

//         res.json(getById);
//     } catch (error) {
//         console.log(error);
//     }
// }

//  const getUser = async (req, res) => {
//     try {
//         const getDB = await User.find().populate('itemList');

//         if(!getDB)  return res.status(404).send('No se encontro nada en User');
//         return res.json(getDB);
//     } catch (error) {
//         console.log(error);
//     }
// };

// getUserByNP,
// getUserById,
// getUser

module.exports = {
  postLogin,
  postUser,
  profileAuthenticate,
  googleLogin,
  editUser
};
