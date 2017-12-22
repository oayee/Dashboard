import {Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { Schema } from 'mongoose';
import ObjectId = Schema.Types.ObjectId;

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  // @Post()
  // async create(@Body() params) {
  //   this.catsService.create(params);
  // }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: ObjectId): Promise<Cat> {
    return this.catsService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return this.catsService.remove(id);
  }

  @Put(':id')
  async update(@Param('id') id: ObjectId, @Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.update(id, createCatDto);
  }
}

