import { Module } from '@nestjs/common';

import { TypeOrmModule} from '@nestjs/typeorm';
import {OrganizationController} from './controllers/Organization.controller';
import {Organization} from './entities/Organization.entity';
import { Users } from './entities/Users.entity';
import{UsersController}from './controllers/Users.controller';


//ORM config
@Module({
imports:[TypeOrmModule.forRoot({
    type: 'postgres',
    username: 'postgres',
    password: '1234',
    host: 'localhost',
    port: 5432,
    database: 'Plazer Super App',
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
}),

TypeOrmModule.forFeature([Organization,Users]),
],
controllers:[OrganizationController,UsersController],




})
export class AppModule{}
