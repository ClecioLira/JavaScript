import {Router} from 'express' // importa o router do express
import loginRequired from '../middlewares/loginRequired'

import fotoController from '../controllers/FotoController' // importa a classe foto controller

const router = new Router() // cria uma nova rota

router.post('/', loginRequired, fotoController.store)

export default router // exporta a rota
