import {Router} from 'express' // importa o router do express
import userController from '../controllers/UserController' // importa a classe user controller

import loginRequired from '../middlewares/loginRequired' // importacao do loginRequired

const router = new Router() // cria uma nova rota

// Não deveria existir
router.get('/', userController.index) // Lista usuarios
// router.get('/:id', userController.show) // Lista usuario

router.post('/', userController.store)
router.put('/', loginRequired, userController.update)
router.delete('/', loginRequired, userController.delete)

export default router // exporta a rota

// tipos de metodos de um controller
// index = lista todos os usuarios - GET
// store/create = cria um novo usuario - POST
// delete = apaga um usuario - DELETE
// show = mostra um usuario - GET
// update = atualiza um usuario - PATCH OU PUT
