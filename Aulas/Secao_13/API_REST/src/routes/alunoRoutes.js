import {Router} from 'express' // importa o router do express
import alunoController from '../controllers/AlunoController' // importa a classe aluno controller

const router = new Router() // cria uma nova rota

router.get('/', alunoController.index) // instancia a rota no metodo get e chama o alunocontroller no metodo index

export default router // exporta a rota
