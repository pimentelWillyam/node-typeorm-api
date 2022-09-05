import {Request} from "express"
import { Usuario } from '../models/UsuarioModel';
import { dataSource } from '../../db/dataSource';

const repositorioUsuario = dataSource.getRepository(Usuario)

export class UsuarioService{
    
    async postaUsuario(req: Request){
        var usuario = new Usuario()
        usuario.login = req.body.login
        usuario.senha = req.body.senha
        await repositorioUsuario.save(usuario)
        return usuario
    }
    
    async pegaTodosUsuarios(req: Request){
        const listaTodosUsuarios = await repositorioUsuario.find()
        return listaTodosUsuarios
    }

    async pegaUsuarioPorLogin(req: Request){
        console.log("pegando usuário por login")
        const usuario = await repositorioUsuario.findBy({login: req.body.login})
        return usuario[0]
    }

    async pegaUsuarioPorId(req: Request){
        const usuario = await repositorioUsuario.findBy({
            id: parseInt(req.params.id)
        })
        return usuario[0]
    }

    async atualizaUsuarioPorId(req: Request){
        var usuario = await repositorioUsuario.findBy({
            id: parseInt(req.params.id)
        })
        if (usuario[0] === undefined){
            return usuario[0]
        }
        if (req.body.login != undefined){
            usuario[0].login = req.body.login
        }
        if (req.body.senha != undefined){
            usuario[0].senha = req.body.senha
        }
        repositorioUsuario.save(usuario[0])
        return usuario[0]
    }

    async deletaUsuarioPorId(req: Request){
        var usuario = await repositorioUsuario.findBy({
            id: parseInt(req.params.id)
        })
        if (usuario[0] === undefined){
            return usuario[0]
        }
        else{
            repositorioUsuario.remove(usuario[0])
            return usuario[0]
        }
    }

}