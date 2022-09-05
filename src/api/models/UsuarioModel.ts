import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"
@Entity()
export class Usuario{
    @PrimaryGeneratedColumn()
    id: number | undefined

    @Column("text")
    login: string | undefined

    @Column("text")
    senha: string | undefined
}