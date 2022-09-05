

// importando rotas
import { logRoute } from "./routes/logRoute"; 
import { produtoRoute } from "./routes/produtoRoute";
import { usuarioRoute } from "./routes/usuarioRoute";
import {autenticacaoRoute} from "./routes/autenticacaoRoute";

//importando core da api
import * as express from "express"
import * as bodyParser from "body-parser";
import * as cors from "cors"

// criando o app
export const app = express()

//aplicando middlewares
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

//utilizando rotas da api
app.use("/api", logRoute)
app.use("/api", produtoRoute) 
app.use("/api", usuarioRoute) 
app.use("/api", autenticacaoRoute) 







