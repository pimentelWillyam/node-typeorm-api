// importando core da rota
import * as express from "express"
import {Request,Response} from "express"

//importando controller
import {AutenticacaoController} from "../controllers/AutenticacaoController"
const autenticacaoController = new AutenticacaoController()

//criando rotas

export const autenticacaoRoute = express.Router()

autenticacaoRoute.post("/auth", (req: Request, res: Response) =>{autenticacaoController.autenticaUsuario(req,res)})
