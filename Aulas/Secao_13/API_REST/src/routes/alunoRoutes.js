import {Router} from 'express' // importa o router do express
import alunoController from '../controllers/AlunoController' // importa a classe aluno controller
import loginRequired from '../middlewares/loginRequired'

const router = new Router() // cria uma nova rota

router.get('/', alunoController.index)

router.get('/:id', alunoController.show)

router.post('/', loginRequired, alunoController.store)

router.put('/:id', loginRequired, alunoController.update)

router.delete('/:id', loginRequired, alunoController.delete)


export default router // exporta a rota
