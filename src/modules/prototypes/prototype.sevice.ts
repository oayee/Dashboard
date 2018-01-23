import {Component, Inject} from '@nestjs/common';
import { Model, Schema} from 'mongoose';
import ObjectId = Schema.Types.ObjectId;
import {PrototypeModelToken} from '../constants';
import { PrototypeInterface } from "./interfaces/prototype.interface"
import { PrototypeDto } from "./dto/prototype.dto"


@Component()
export class PrototypesSevice {
  constructor(@Inject(PrototypeModelToken) private readonly prototypeModel: Model<PrototypeInterface>) {}

  async create (prototypeDto: PrototypeDto): Promise<PrototypeInterface> {
    const createdPrototype = new this.prototypeModel(prototypeDto);
    return await createdPrototype.save();
  }

  async findAll(): Promise<PrototypeInterface[]> {
    return await this.prototypeModel.find().exec();
  }

  async findOne(id: ObjectId): Promise<PrototypeInterface> {
    return await this.prototypeModel.findById(id);
  }

  async update(id: ObjectId, prototypeDto: PrototypeDto): Promise<PrototypeInterface> {
    return await this.prototypeModel.findByIdAndUpdate(id, prototypeDto, {new: true});
  }

  async remove(id: ObjectId) {
    return this.prototypeModel.findByIdAndRemove(id).exec();
  }
}
