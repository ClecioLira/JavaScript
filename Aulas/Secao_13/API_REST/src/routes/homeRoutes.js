import {Router} from 'express' // importa o router do express
import homeController from '../controllers/HomeController' // importa a classe home controller

const router = new Router() // cria uma nova rota

router.get('/', homeController.index) // instancia a rota no metodo get e chama o homecontroller no metodo index

export default router // exporta a rota 
