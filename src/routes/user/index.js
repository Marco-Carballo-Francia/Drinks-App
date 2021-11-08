const { Router } = require("express");
const userRouter = require('./user.routes.js');


const router = Router();

router.use('/users', userRouter);

module.exports = router;


// "nombre": "Marco",
// "apellido": "Carballo",
// "contraseña": "123456",
// "email": "email@ejemplo.com",
// "direccion": "Italia 124",
// "telefono": "134235235235",
// "admin": false,
// "itemList": [ObjectId("617862e66fd6a2b956c1279d"), ObjectId("617862e66fd6a2b956c1279c")]
