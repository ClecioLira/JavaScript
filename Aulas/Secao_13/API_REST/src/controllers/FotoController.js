import multer from 'multer'
import multerConfig from '../config/multerConfig'

const upload = multer(multerConfig).single('foto')

class FotoController { // cria classe
  async store(req, res) {
    return upload(req, res, (erro) => {
      if(erro) {
        return res.status(400).json({
          errors: [erro.code]
        })
      }

      return res.json(req.file)
    })
  }
}

export default new FotoController() // exporta a classe Foto controller
