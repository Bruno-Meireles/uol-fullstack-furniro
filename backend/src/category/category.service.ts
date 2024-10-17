import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto'; 
import { category } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<category> {
    return this.prisma.category.create({
      data: {
        name: createCategoryDto.name,
        image_link: createCategoryDto.image_link, 
      },
    });
  }

  async findAll(): Promise<category[]> {
    return this.prisma.category.findMany();
  }

  async findOne(id: number): Promise<category> {
    return this.prisma.category.findUnique({
      where: { id },
    });
  }

  async remove(id: number): Promise<category> {
    return this.prisma.category.delete({
      where: { id },
    });
  }
}