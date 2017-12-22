import {Component, Inject} from "@nestjs/common";
import {Model} from "mongoose";
import {Name} from "./interfaces/name.interface";
import {CreateNameDto} from "./dto/create-name.dto";

@Component()
export class NameService {
  constructor(@Inject('NameModelToken') private readonly nameModel: Model<Name>) {}

  async create(createNameDto: CreateNameDto): Promise<Name> {
    const createdName = new this.nameModel(createNameDto);
    return await createdName.save();
  }

  async findAll(): Promise<Name[]> {
    return await this.nameModel.find().exec();
  }
}
