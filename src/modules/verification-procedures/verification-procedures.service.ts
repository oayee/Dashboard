import { Model, Schema} from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import ObjectId = Schema.Types.ObjectId;
import {VerificationProcedureInterface} from "./interfaces/verification-procedure.interface";
import {VerificationProcedureDto} from "./dto/verification-procedure.dto";

@Component()
export class VerificationProceduresService {
  constructor(
    @Inject('VerificationProcedureModelToken') private readonly verificationProcedureModel: Model<VerificationProcedureInterface>
  ) {}

  async create(verificationProcedureDto: VerificationProcedureDto): Promise<VerificationProcedureInterface> {
    const createdProcedure = new this.verificationProcedureModel(verificationProcedureDto);
    return await createdProcedure.save();
  }

  async findAll(): Promise<VerificationProcedureInterface[]> {
    return await this.verificationProcedureModel.find().exec();
  }

  async findOne(id: ObjectId): Promise<VerificationProcedureInterface> {
    return await this.verificationProcedureModel.findById(id);
  }

  async update(id: ObjectId,
               verificationProcedureDto: VerificationProcedureDto): Promise<VerificationProcedureInterface> {
    return await this.verificationProcedureModel.findByIdAndUpdate(id, verificationProcedureDto, {new: true});
  }

  async remove(id: string) {
    return await this.verificationProcedureModel.remove({_id: id});
  }
}
