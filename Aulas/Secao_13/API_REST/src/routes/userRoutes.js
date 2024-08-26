import {Router} from 'express' // importa o router do express
import userController from '../controllers/UserController' // importa a classe user controller

const router = new Router() // cria uma nova rota

router.post('/', userController.store) // instancia a rota no metodo post e chama o usercontroller no metodo store
router.get('/', userController.index)
router.get('/:id', userController.show)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

export default router // exporta a rota

// tipos de metodos de um controller
// index = lista todos os usuarios - GET
// store/create = cria um novo usuario - POST
// delete = apaga um usuario - DELETE
// show = mostra um usuario - GET
// update = atualiza um usuario - PATCH OU PUT
