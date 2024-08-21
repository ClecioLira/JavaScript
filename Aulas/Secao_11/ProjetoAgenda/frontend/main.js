import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Login from './modules/Login'
import Cadastro from './modules/Cadastro'

const cadastro = new Cadastro('.form-cadastro')

const login = new Login('.form-login')

cadastro.init()
login.init()
