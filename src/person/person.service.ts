import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PersonService {
  constructor(private prisma: PrismaService){}

  async createPerson(createPersonDto: CreatePersonDto) {
    return await this.prisma.person.create({data: createPersonDto})
  }

  async findAllPerson() {
    return await this.prisma.person.findMany()
  }

  async findOnePerson(id: number) {
    return await this.prisma.person.findUnique({where: {
      id: id
    }})
  }

  async updatePerson(id: number, updatePersonDto: UpdatePersonDto) {
    return await this.prisma.person.update({where: { id: id }, data: { ...updatePersonDto }})
  }

  async deletePerson(id: number) {
    return await this.prisma.person.delete({where: { id: id }})
  }
}
