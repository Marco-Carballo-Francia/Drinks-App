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

              //  const userFront = {
              //    id: _id,
              //    email: email,
              //    imagen: picture,
              //    nombre: name,
              //    token
              //  }

              user.token = token;
              await user.save();

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

        return res.json(user);
      });
    } catch (error) {
      console.log(error);
    }
  })(req, res);
};

const profileAuthenticate = (req, res) => {
  res.json({
    message: "Dale que sos vos",
    user: req.user,
    token: req.query.secret_token,
  });
};

const getUserByName = async (req, res) => {
  const { nombre } = req.query;
  try {
    let getUser = await User.find()
      .populate('itemList.item', ['nombre', 'precio', 'imagen'])
      .populate('ticketHistory');

    if (nombre && nombre !== "") {
      let getByName = getUser.filter((u) =>
        u.nombre?.toLowerCase().includes(nombre?.toLowerCase())
      );
      return res.json(getByName);
    }
    return res.json(getUser);
  } catch (error) {
    console.log(error);
  }
};

const newAdmin = async (req, res) => {
  const { id } = req.params;
  const { changeRol } = req.body;
  try {
    let user = await User.findById(id);

    if (user.admin === false && changeRol === false) {
      return res.json(user);
    }
    if (
      (user.admin === false && changeRol === true) ||
      (user.admin === true && changeRol === false)
    ) {
      const update = await User.findOneAndUpdate(
        { _id: id },
        { $set: { admin: changeRol } },
        { new: true }
      );
      let newAdmin = await update.save();
      return res.json(newAdmin);
    }
  } catch (error) {
    console.log(error);
  }
};

const editUser = async (req, res, next) => {
  const {
    nombre,
    apellido,
    direccion,
    telefono,
    documento,
    fechadenacimiento,
    piso,
    departamento,
    ciudad,
    estadoProvincia,
    codigoPostal,
    itemCart
  } = req.body;
  
  try {
    let qty = 0;
    let obj = {};

    if (itemCart) {
      qty = itemCart.qtyCart;
      obj = {
        item: itemCart.item,
        qtyCart: qty,
      };
    }
    let user = await User.findById(req.params.id)
      .populate('itemList.item', ['nombre', 'precio', 'imagen'])
      .populate('ticketHistory');

    function splitt(string) {
      let id = string.split('"');
      let dividido = id[1];
      return dividido;
    }
    let bool = false;

    
    if (user) {
      if(itemCart){

      for (let i = 0; i < user.itemList.length; i++) {
        if(user.itemList.length>1){
          if (splitt(JSON.stringify(user?.itemList[i]?.item?._id)) === obj.item.toString()) bool = true;
        }
        if (bool) {
          if (qty < 1) {
            if (user.itemList[i].qtyCart > 1)  user.itemList[i].qtyCart--;
          }else {
            user.itemList[i].qtyCart++;
          }

          let save = await user.save();

          let update = await User.findById(save._id)
            .populate('itemList.item', ['nombre', 'precio', 'imagen'])
            .populate('ticketHistory');

          return res.json(update);
        }
      }
     } 
      let edit = await User.findByIdAndUpdate(user._id, {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        documento: documento,
        direccion: direccion,
        fechadenacimiento: fechadenacimiento,
        piso: piso,
        departamento: departamento,
        ciudad: ciudad,
        estadoProvincia: estadoProvincia,
        codigoPostal: codigoPostal,
        itemList: [...user.itemList, obj]
      }, { new: true });

      let save = await edit.save();

      let update = await User.findById(save._id)
        .populate('itemList.item', ['nombre', 'precio', 'imagen'])
        .populate('ticketHistory');

      if (update) return res.json(update);
      else return res.send("No se encontro la actualizacion");
    }
    res.send('Hubo un error al traer el Usuario');
  } catch (error) {
    console.log(error);
  }
};

const deleteX = async (req, res) => {
  const {itemsId} = req.body;
  const {userId} =req.params;
  try {
    let user = await User.findById(userId);

    function splitt(string) {
      let id = string?.split('"');
      let dividido = id[1];
      return dividido;
    }
    console.log("user.itemList", user.itemList)
    console.log("itemsId", itemsId)
    console.log("userId", userId)
    let delet = user.itemList.filter(i => splitt(JSON.stringify(i.item)) !== itemsId.toString());
    
    let put = await User.findByIdAndUpdate(userId, {
      itemList: delet
    }, {new: true});

    let save = await put.save();
    let update = await User.findById(save._id).populate('itemList.item');
    console.log(update);
    res.json(update);
  } catch (error) {
    console.log(error);
  }
};

const deleteAll = async (req, res) => {
  const { userId } = req.params;
  try {
    let user = await User.findById(userId)
    .populate('itemList.item');

    let put = await User.findByIdAndUpdate(userId, {
      itemList: []
    }, {new: true});

    let save = await put.save();

    let update = await User.findById(save._id)
    .populate('itemList.item');
    res.json(update.itemList);
  } catch (error) {
    conole.log(error);
  }
}

const addFavorite = async (req, res) => {
  const { id } = req.body
  try {
    const getById = await User.findById(id);
    res.json(getById);
  } catch (error) {
    console.log(error);
  }
}

const getUserByID = async (req, res) => {
  const { userId } = req.params;
  console.log("userId", userId)
  try {
    let user = await User.findById(userId)
    .populate('itemList.item', ['nombre', 'precio', 'imagen']);
    res.json(user.itemList);
  } catch (error) {
    console.log(error);
  }
}

// getUserById,
// getUser

module.exports = {
  postLogin,
  postUser,
  profileAuthenticate,
  googleLogin,
  newAdmin,
  getUserByName,
  editUser,
  addFavorite,
  getUserByID,
  deleteX,
  deleteAll
};
