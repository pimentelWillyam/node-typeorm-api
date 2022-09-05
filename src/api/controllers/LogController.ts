import { Request, Response } from "express";

import { LogService } from "../services/LogService";
const logService = new LogService()

enum ErroLog{
    LOG_REQUISICAO_INVALIDA = "A requisição inserida foi considerada inválida",
    LOG_LISTA_NAO_ENCONTRADA = "Não foi possível devolver uma lista com os logs",
    LOG_NAO_ENCONTRADO = "Não foi possível encontrar o Log procurado",
    LOG_NAO_ATUALIZADO = "Não foi possível atualizar este Log",
    LOG_NAO_DELETADO = "Não foi possível deletar este Log"
}

export class LogController{

    async postaLog(req: Request, res: Response){
        try{
            const log = await logService.postaLog(req)
            res.status(200).json(log)
        } catch(erro){
            console.error(erro)
            res.status(200).send(ErroLog.LOG_REQUISICAO_INVALIDA)
        }       
    }

    async pegaTodosLogs(req: Request, res: Response){
        try{
            const listaLogs = await logService.pegaTodosLogs()
            res.status(200).json(listaLogs)
        } catch(erro){
            console.error(erro)
            res.status(400).send(ErroLog.LOG_LISTA_NAO_ENCONTRADA)
        }
    }

    async pegaLogPorId(req: Request, res: Response){
        try{
            const log = await logService.pegaLogPorId(req)
            if (log != null){
                res.status(200).json(log)
            }
            else{
                res.status(404).send(ErroLog.LOG_NAO_ENCONTRADO)
            }
            
        } catch(erro){
            res.status(404).send(ErroLog.LOG_NAO_ENCONTRADO)
        }  
    }

    async atualizaLogPorId(req: Request, res: Response){
        try{
            const log = await logService.atualizaLogPorId(req)
            if (log != null){
                res.status(200).json(log)
            }
            else{
                res.status(404).send(ErroLog.LOG_NAO_ATUALIZADO)
            }
        } catch(erro){
            console.error(erro)
            res.status(400).send(ErroLog.LOG_NAO_ATUALIZADO)
        }
    }

    async deletaLogPorId(req: Request, res: Response){
        try{
            const log = await logService.deletaLogPorId(req)
            if (log != null){
                res.status(200).json(log)
            }
            else{
                res.status(404).send(ErroLog.LOG_NAO_DELETADO)
            }
            res.status(200).json(log)
        } catch(erro){
            console.error(erro)
            res.status(400).send(ErroLog.LOG_NAO_DELETADO)
        }
    }
}