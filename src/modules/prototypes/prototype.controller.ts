import {Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import { Schema } from 'mongoose';
import ObjectId = Schema.Types.ObjectId;
import {PrototypesSevice} from "./prototype.sevice"
import {PrototypeDto} from "./dto/prototype.dto";
import {PrototypeInterface} from "./interfaces/prototype.interface";



@Controller('prototypes')
export class PrototypesController {
  constructor(private readonly prototypeService: PrototypesSevice) {}

  @Post()
  async create(@Body() prototypeDto: PrototypeDto) {
    this.prototypeService.create(prototypeDto);
  }

  @Get()
  async findAll(): Promise<PrototypeInterface[]> {
    return this.prototypeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: ObjectId): Promise<PrototypeInterface> {
    return this.prototypeService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: ObjectId): Promise<any> {
    return this.prototypeService.remove(id);
  }

  @Put(':id')
  async update(@Param('id') id: ObjectId, @Body() prototypeDto: PrototypeDto): Promise<PrototypeInterface> {
    return this.prototypeService.update(id, prototypeDto);
  }
}
