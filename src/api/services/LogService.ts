import { pegaDataAgora } from "../../helpers/pegaDataAgora"

import {Request} from "express"

import { Log } from "../models/LogModel"

import { dataSource } from "../../db/dataSource"
const repositorioLog = dataSource.getRepository(Log)

export class LogService{

    async postaLog(req: Request): Promise<Log>{
        var log = new Log()
        log.data = pegaDataAgora()
        log.evento = req.body.evento
        await repositorioLog.save(log)
        return log
    }
    
    async pegaTodosLogs(): Promise<Log[] | null> {
        const listaTodosLogs = await repositorioLog.find()
        return listaTodosLogs
    }

    async pegaLogPorId(req: Request): Promise<Log | null>{
        const log = await repositorioLog.findBy({
            id: parseInt(req.params.id)
        })
        return log[0]
    }
    
    async atualizaLogPorId(req: Request): Promise<Log[] | any>{
        var log = await repositorioLog.findBy({
            id: parseInt(req.params.id)
        })
        if(log[0] === undefined){
            return log[0]
        }
        if (req.body.evento != undefined){
            log[0].evento = req.body.evento
        }
        if (req.body.data != undefined){
            log[0].data = req.body.data
        }
        repositorioLog.save(log[0])
        return log[0]
    }

    async deletaLogPorId(req: Request): Promise<Log | any>{
        const log = await repositorioLog.findBy({
            id: parseInt(req.params.id)
        })
        if (log[0] === undefined){
            return log[0]
        }
        else{
            repositorioLog.remove(log[0])
            return log[0]
        }
        
    }
}