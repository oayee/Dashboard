import {Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import { Schema } from 'mongoose';
import ObjectId = Schema.Types.ObjectId;
import {VerificationProceduresService} from './verification-procedures.service';
import {VerificationProcedureDto} from './dto/verification-procedure.dto';
import {VerificationProcedureInterface} from './interfaces/verification-procedure.interface';

@Controller('procedures')
export class VerificationProceduresController {
  constructor(private readonly verificationProcedureService: VerificationProceduresService) {}

  @Post()
  async create(@Body() verificationProcedureDto: VerificationProcedureDto) {
    this.verificationProcedureService.create(verificationProcedureDto);
  }

  @Get()
  async findAll(): Promise<VerificationProcedureInterface[]> {
    return this.verificationProcedureService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: ObjectId): Promise<VerificationProcedureInterface> {
    return this.verificationProcedureService.findOne(id);
  }

  @Delete()
  async remove(@Body('id') id: ObjectId): Promise<any> {
    return this.verificationProcedureService.remove(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: ObjectId,
    @Body() verificationProcedureDto: VerificationProcedureDto): Promise<VerificationProcedureInterface> {
    return this.verificationProcedureService.update(id, verificationProcedureDto);
  }
}
