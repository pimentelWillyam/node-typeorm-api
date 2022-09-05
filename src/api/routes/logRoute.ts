// importando core da rota
import * as express from "express"
import { Request, Response } from "express"

//importando controller
import { LogController } from "../controllers/LogController"
const logController = new LogController()

//criando rotas
export const logRoute  = express.Router()

logRoute.post("/log", (req: Request,res: Response) => logController.postaLog(req,res))
logRoute.get("/log/", (req: Request,res: Response) => logController.pegaTodosLogs(req,res))
logRoute.get("/log/:id", (req: Request,res: Response) => logController.pegaLogPorId(req,res))
logRoute.patch("/log/:id", (req: Request,res: Response) => logController.atualizaLogPorId(req,res))
logRoute.delete("/log/:id", (req: Request,res: Response) => logController.deletaLogPorId(req,res))

