import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class Log{
    @PrimaryGeneratedColumn()
    id: number | undefined

    @Column("text") 
    data: string | undefined
    
    @Column("text")
    evento: string | undefined
}