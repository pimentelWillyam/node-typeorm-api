import { Request, Response } from "express";

import { ProdutoService } from "../services/ProdutoService";
const produtoService = new ProdutoService()

enum ErroProduto{
    PRODUTO_REQUISICAO_INVALIDA = "A requisição inserida foi considerada inválida",
    PRODUTO_LISTA_ERRO = "Não foi possível buscar a lista de produtos",
    PRODUTO_NAO_ACHADO = "Não foi possível achar o produto requisitado",
    PRODUTO_NAO_ATUALIZADO = "Não foi possível atualizar o produto requisitado",
    PRODUTO_NAO_DELETADO = "Não foi possível deletar o produto requisitado"
}

export class ProdutoController{
    
    async postaProduto(req: Request, res: Response){
        try{
            const produto = await produtoService.postaProduto(req)
            res.status(200).json(produto)
        } catch(erro){
            res.status(400).send(ErroProduto.PRODUTO_REQUISICAO_INVALIDA)
            console.error(erro)
        }
    }

    async pegaTodosProdutos(req: Request, res: Response){
        try{
            const listaProdutos = await produtoService.pegaTodosProdutos(req)
            res.status(200).json(listaProdutos)
        } catch(erro){
            console.error(erro)
            res.status(400).send(ErroProduto.PRODUTO_REQUISICAO_INVALIDA)
        }
    }

    async pegaProdutoPorId(req: Request, res: Response){
        try{
            const produto = await produtoService.pegaProdutoPorId(req)
            if (produto != null){
                res.status(200).json(produto)
            }
            else{
                res.status(404).send(ErroProduto.PRODUTO_NAO_ACHADO)
            }
        } catch(erro){
            console.error(erro)
            res.status(404).send(ErroProduto.PRODUTO_REQUISICAO_INVALIDA)
        }
    }

    async atualizaProdutoPorId(req: Request, res: Response){
        try{
            const produto = await produtoService.atualizaProdutoPorId(req)
            if (produto != null){
                res.status(200).json(produto)
            }
            else{
                res.status(404).send(ErroProduto.PRODUTO_NAO_ATUALIZADO)
            }
        } catch(erro){
            console.error(erro)
            res.status(400).send(ErroProduto.PRODUTO_REQUISICAO_INVALIDA)
        }
    }

    async deletaProdutoPorId(req: Request, res: Response){
        try{
            const produto = await produtoService.deletaProdutoPorId(req)
            if (produto != null){
                res.status(200).json(produto)
            }
            else{
                res.status(404).send(ErroProduto.PRODUTO_NAO_DELETADO)
            }
        } catch(erro){
            console.error(erro)
            res.status(400).send(ErroProduto.PRODUTO_REQUISICAO_INVALIDA)
        }
    }

}