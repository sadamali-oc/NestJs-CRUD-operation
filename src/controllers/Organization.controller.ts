import { Body, Controller, Delete, Get, Post,Put } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Organization} from "src/entities/Organization.entity"
import { Repository } from "typeorm"
import { Param } from "@nestjs/common";






@Controller('organizations')
export class OrganizationController{
    constructor(
        @InjectRepository(Organization)
        private readonly userRepository:Repository<Organization>,

    )
{}

@Get()
async findAllOrganmi():Promise<Organization[]>{
    return await this.userRepository.find();
}

@Get(': id')
async  findUserById(@Param('id')  id:any): Promise<Organization>{
console.log(id);
    return await this.userRepository.findOne(id);
}


@Post()

async  createUser(@Body()  user:Organization): Promise<Organization>{

    return await this.userRepository.save(user);
}


@Put(':id')
async UpdateUser(@Param('id') id:any,@Body() user:Organization ): Promise<Organization>{

    await this.userRepository.update(id,user);
    return await this.userRepository.findOne(id);
}

@Delete(':id')
async  deleteUser(@Param('id')  id:number): Promise<void>{

   await this.userRepository.delete(id);
}

}
