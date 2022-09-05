import "reflect-metadata"
import { DataSource } from "typeorm"

//importando entidades do banco
import {Log} from "../api/models/LogModel"
import {Produto} from "../api/models/ProdutoModel"
import { Usuario } from "../api/models/UsuarioModel"

export const dataSource = new DataSource({
    type: "oracle",
    host: "localhost",
    username: "system",
    password: "oracle",
    port: 1521,
    sid: "xe.oracle.docker",
        synchronize: true,
        logging: false,
        entities: [Log,Produto,Usuario],
        migrations: [],
        subscribers: [],
    })
