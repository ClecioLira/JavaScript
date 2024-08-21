import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Login from './modules/Login'
import Cadastro from './modules/Cadastro'
import Contato from './modules/Contato'

const cadastro = new Cadastro('.form-cadastro')
const login = new Login('.form-login')
const contato = new Contato('.form-contato')

cadastro.init()
login.init()
contato.init()