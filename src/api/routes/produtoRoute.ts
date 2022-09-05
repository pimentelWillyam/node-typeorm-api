import * as express from "express"
import {Request, Response} from "express"

// importando controller
import {ProdutoController} from "../controllers/ProdutoController"
const produtoController = new ProdutoController()
//criando rotas
export const produtoRoute = express.Router()

produtoRoute.post("/produto", (req: Request,res: Response) => produtoController.postaProduto(req,res))
produtoRoute.get("/produto", (req: Request,res: Response) => produtoController.pegaTodosProdutos(req,res))
produtoRoute.get("/produto/:id", (req: Request,res: Response) => produtoController.pegaProdutoPorId(req,res))
produtoRoute.patch("/produto/:id", (req: Request,res: Response) => produtoController.atualizaProdutoPorId(req,res))
produtoRoute.delete("/produto/:id", (req: Request,res: Response) => produtoController.deletaProdutoPorId(req,res))

