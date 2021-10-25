const { response } = require("express");
const bcrypt = require('bcryptjs')

const User = require("../models/usuario");
const { generateJWT } = require("../helpers/jwt");

//Crear usuario
const crearUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;
    //¿existe el email?
    const existEmail = await User.findOne({ email });
    if (existEmail) {
      return res.status(400).json({
        ok: false,
        msg: "El correo ya existe",
      });
    }

    const user = new User(req.body);
    //Encriptar la contraseña del usuario
    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(password, salt)

    //Guardar usuario en DB
    await user.save(); //para guardar el usuario en la DB

    //Generando el JWT
    const token = await generateJWT(user.id)

    res.json({
      ok:true,
      user,
      token
    });


  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Busque el administrador, esto se jodió",
    });
  }
};

//Login
const login = async (req, res) => {
  const { email, password } = req.body;
    try {
        //¿existe usuario con el mismo email?
        const userDB = await User.findOne({email})
        if (!userDB) {
            return res.status(404).json({
                ok: false,
                msg:'Email no encontrado'
            })
        }

        //Validando password
        const validpassword = bcrypt.compareSync(password, userDB.password )
        if (!validpassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Password no es correcto'
            })
        }
        //Generar JWT
        const token = await generateJWT(userDB.id)

        res.json({
            ok:true,
            usuario: userDB,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
          ok: false,
          msg: "Busque el administrador, esto se jodió",
        });
    }
  
};

//Revalidar token
const renewToken = async (req, res = response) => {
  
  const uid = req.uid

  //Generar un nuevo JWT
  const token = await generateJWT(uid)
 
 //Obtener el usuario por uid
const user = await User.findById(uid)


  res.json({
    ok: true,
    user,
    token
  });
};

module.exports = {
  crearUsuario,
  login,
  renewToken,
};
