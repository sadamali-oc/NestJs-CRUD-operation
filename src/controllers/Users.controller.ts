import { Body, Controller, Delete, Get, Post,Put } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Users} from "src/entities/Users.entity"
import { Repository } from "typeorm"
import { Param } from "@nestjs/common";






@Controller('users')
export class UsersController{
    constructor(
        @InjectRepository(Users)
        private readonly userRepository:Repository<Users>,

    )
{}

@Get()
async findAllOrganmi():Promise<Users[]>{
    return await this.userRepository.find();
}

@Get(': id')
async  findUserById(@Param('id')  id:any): Promise<Users>{
console.log(id);
    return await this.userRepository.findOne(id);
}


@Post()

async  createUser(@Body()  user:Users): Promise<Users>{

    return await this.userRepository.save(user);
}


@Put(':id')
async UpdateUser(@Param('id') id:any,@Body() user:Users): Promise<Users>{

    await this.userRepository.update(id,user);
    return await this.userRepository.findOne(id);
}

@Delete(':id')
async  deleteUser(@Param('id')  id:number): Promise<void>{

   await this.userRepository.delete(id);
}

}
