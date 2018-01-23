import {Component, Inject} from '@nestjs/common';
import { Model, Schema} from 'mongoose';
import ObjectId = Schema.Types.ObjectId;
import {ClientModelToken} from '../constants';
import { ClientInterface} from "./interfaces/client.interface";
import { ClientDto } from "./dto/client.dto"


@Component()
export class ClientsSevice {
  constructor(@Inject(ClientModelToken) private readonly clientModel: Model<ClientInterface>) {}

  async create (clientDto: ClientDto): Promise<ClientInterface> {
    const createdClient = new this.clientModel(clientDto);
    return await createdClient.save();
  }

  async findAll(): Promise<ClientInterface[]> {
    return await this.clientModel.find().exec();
  }

  async findOne(id: ObjectId): Promise<ClientInterface> {
    return await this.clientModel.findById(id);
  }

  async update(id: ObjectId, clientDto: ClientDto): Promise<ClientInterface> {
    return await this.clientModel.findByIdAndUpdate(id, clientDto, {new: true});
  }

  async remove(id: ObjectId) {
    return this.clientModel.findByIdAndRemove(id).exec();
  }
}
