import multer from 'multer'
import multerConfig from '../config/multerConfig'

import Foto from '../models/Foto'

const upload = multer(multerConfig).single('foto')

class FotoController { // cria classe
  store(req, res) {
    return upload(req, res, async (erro) => {
      if(erro) {
        return res.status(400).json({
          errors: [erro.code]
        })
      }

      try {
        const {originalname, filename} = req.file
        const {aluno_id} = req.body
        const foto = await Foto.create({originalname, filename, aluno_id})

        return res.json(foto)
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe.']
        })
      }

    })
  }
}

export default new FotoController() // exporta a classe Foto controller
