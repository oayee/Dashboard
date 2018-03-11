import {Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import { Schema } from 'mongoose';
import ObjectId = Schema.Types.ObjectId;
import {DevicesService} from './devices.service';
import {DeviceDto} from './dto/device.dto';
import {DeviceInterface} from './interfaces/device.interface';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Post()
  async create(@Body('entry') deviceDto: DeviceDto) {
    return this.devicesService.create(deviceDto);
  }

  @Get()
  async findAll(): Promise<DeviceInterface[]> {
    return this.devicesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: ObjectId): Promise<DeviceInterface> {
    return this.devicesService.findOne(id);
  }

  @Delete()
  async remove(@Body('id') id: string): Promise<any> {
    return this.devicesService.remove(id);
  }

  @Put()
  async update(@Body('entry') deviceDto: DeviceDto): Promise<DeviceInterface> {
    return this.devicesService.update(deviceDto);
  }
}
