import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {PrismaService} from "../prisma/prisma.service";
import {Prisma} from "@prisma/client";


function toCategoryCreateInput(category: CreateCategoryDto): Prisma.CategoryCreateInput {
  return {
    name: category.name
  }
}

@Injectable()
export class CategoriesService {
  constructor(private prismaService: PrismaService) {
  }

  create(createCategoryDto: CreateCategoryDto) {
    return this.prismaService.category.create({data: toCategoryCreateInput(createCategoryDto)});
  }

  findAll() {
    return this.prismaService.category.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
