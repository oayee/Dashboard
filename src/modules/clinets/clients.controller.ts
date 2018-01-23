import {Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import { Schema } from 'mongoose';
import ObjectId = Schema.Types.ObjectId;
import {ClientsSevice} from "./clients.sevice";
import {ClientDto} from "./dto/client.dto";
import {ClientInterface} from "./interfaces/client.interface";

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientService: ClientsSevice) {}

  @Post()
  async create(@Body() clientDto: ClientDto) {
    this.clientService.create(clientDto);
  }

  @Get()
  async findAll(): Promise<ClientInterface[]> {
    return this.clientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: ObjectId): Promise<ClientInterface> {
    return this.clientService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: ObjectId): Promise<any> {
    return this.clientService.remove(id);
  }

  @Put(':id')
  async update(@Param('id') id: ObjectId, @Body() clientDto: ClientDto): Promise<ClientInterface> {
    return this.clientService.update(id, clientDto);
  }
}
