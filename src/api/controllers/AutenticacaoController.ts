import {Request,Response} from "express"
import { UsuarioService } from '../services/UsuarioService';

enum ErroAutenticacao{
    AUTENTICACAO_REQUISICAO_INVALIDA = "A requisição inserida foi considerada inválida",
    AUTENTICACAO_FALHA_LOGIN = "Usuário ou senha inválido"
}

export class AutenticacaoController{
    async autenticaUsuario(req: Request, res: Response){
        try{
        const usuarioService = new UsuarioService()
        const usuario = await usuarioService.pegaUsuarioPorLogin(req)
        if (usuario == null){
            res.status(400).send(ErroAutenticacao.AUTENTICACAO_FALHA_LOGIN)
        }
        else if (usuario.senha != req.body.senha){
            res.status(400).send(ErroAutenticacao.AUTENTICACAO_FALHA_LOGIN)
        }
        else{
            res.status(200).json({
                login: usuario.login,
                senha: usuario.senha,
                autenticado: true
            }) 
        }
        } catch(erro){
            res.status(400).send(ErroAutenticacao.AUTENTICACAO_REQUISICAO_INVALIDA)
        }
    }
}