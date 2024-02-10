import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  organization_name: string;

  @Column({ length: 100 })
  user_name: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  address: string;

  @Column({ length: 100 })
  contact_nor: string;

  @Column()
  password: string;

  //   @Column()
  //   status: boolean;
}
