import { Request } from "express";

import { Produto } from "../models/ProdutoModel";

import { dataSource } from "../../db/dataSource";
const repositorioProduto = dataSource.getRepository(Produto)

export class ProdutoService{
    
    async postaProduto(req: Request){
        var produto = new Produto()
        produto.nome = req.body.nome
        produto.quantidade = req.body.quantidade
        if (req.body.validade === undefined) {
            produto.validade = "N/A"
        }
        else{
            produto.validade = req.body.validade
        }
        await repositorioProduto.save(produto)
        return produto
    }

    async pegaTodosProdutos(req: Request){
        const listaTodosProdutos = await repositorioProduto.find()
        return listaTodosProdutos
    }

    async pegaProdutoPorId(req: Request){
        const produto = await repositorioProduto.findBy({
            id: parseInt(req.params.id)
        })
        return produto[0]
    }

    async atualizaProdutoPorId(req: Request){
        var produto = await repositorioProduto.findBy({
            id: parseInt(req.params.id)
        })
        if (produto[0] === undefined){
            return produto[0]
        }
        if (req.body.nome != undefined){
            produto[0].nome = req.body.nome
        }
        if (req.body.quantidade != undefined){
            produto[0].quantidade = req.body.quantidade
        }
        if (req.body.validade != undefined){
            produto[0].validade = req.body.validade
        }
        await repositorioProduto.save(produto[0])
        return produto[0]

    }

    async deletaProdutoPorId(req: Request){
        var produto = await repositorioProduto.findBy({
            id: parseInt(req.params.id)
        })
        if (produto[0] === undefined){
            return produto[0]
        }
        else{
            await repositorioProduto.remove(produto[0])
            return produto[0]
        }
        
    }

}