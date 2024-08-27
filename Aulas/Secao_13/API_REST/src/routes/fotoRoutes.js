import {Router} from 'express' // importa o router do express
import multer from 'multer'

import fotoController from '../controllers/FotoController' // importa a classe foto controller
import multerConfig from '../config/multerConfig'

const upload = multer(multerConfig)

const router = new Router() // cria uma nova rota

router.post('/', upload.single('foto'), fotoController.store)

export default router // exporta a rota
