//PATH: api/login

const {Router } = require('express')
const { check } = require('express-validator')
const {crearUsuario} = require ('../controllers/auth')
const {login} = require ('../controllers/auth')
const {renewToken} = require ('../controllers/auth')
const { validarJWT } = require('../middlewares/validation-jwt')
const { validatioFields } = require('../middlewares/validationFields')


const router = Router()
//Para crear nuevos usuarios
router.post ('/new', [
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('password', 'el password es obligatorio').not().isEmpty(),
    check('email', 'el email es obligatorio').isEmail(),
    validatioFields
],crearUsuario )



//Para el Login
router.post('/',[
    check('email', 'el email es obligatorio').isEmail(),//Midleware para validar el campo de email
    check('password', 'el password es obligatorio').not().isEmpty(),
    validatioFields
], login)

//Revalidar token
router.get('/renew',validarJWT, renewToken)

module.exports = router