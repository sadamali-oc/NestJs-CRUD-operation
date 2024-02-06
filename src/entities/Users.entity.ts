import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";



@Entity()


export class Users{
    @PrimaryGeneratedColumn()

    id:number;

    
    @Column({length:100})
   user_name:string;

    @Column({length:100})
    organization_name:string;
    
   @Column({length:100})
   position:string;

}