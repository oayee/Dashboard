import { Model, Schema} from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

import ObjectId = Schema.Types.ObjectId;

@Component()
export class CatsService {
  constructor(@Inject('CatModelToken') private readonly catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return await createdCat.save();
  }

  // async create(params): Promise<Cat> {
  //   return await createdCat.save();
  // }

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().populate('name', 'name').exec();
  }

  async findOne(id: ObjectId): Promise<Cat> {
    return await this.catModel.findById(id).populate('name', 'name');
  }

  async update(id: ObjectId, createCatDto: CreateCatDto): Promise<Cat> {
    return await this.catModel.findByIdAndUpdate(id, createCatDto, {new: true});
  }

  async remove(id: string) {
    console.log(id);
    return await this.catModel.remove({_id: id});
  }
}
