import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class Produto{
    @PrimaryGeneratedColumn()
    id: number | undefined

    @Column("text")
    nome: string | undefined

    @Column("int")
    quantidade: number | undefined
    
    @Column("text")
    validade: string | undefined
}