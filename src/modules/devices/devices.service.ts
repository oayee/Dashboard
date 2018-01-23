import {Component, Inject} from '@nestjs/common';
import { Model, Schema} from 'mongoose';
import ObjectId = Schema.Types.ObjectId;
import {DeviceModelToken} from '../constants';
import {DeviceInterface} from './interfaces/device.interface';
import {DeviceDto} from './dto/device.dto';

@Component()
export class DevicesService {
  constructor(@Inject(DeviceModelToken) private readonly deviceModel: Model<DeviceInterface>) {}

  private readonly populateOpts = [
    {path: 'client', select:'name'},
    {path: 'povMethod', select:'name'},
    {path: 'gauger', select:'alias'},
    {path: 'supervisor', select:'alias'},
    {path: 'ctrlProto', select:'name'},
  ];

  async create(deviceDto: DeviceDto): Promise<DeviceInterface> {
    const createdDevice = new this.deviceModel(deviceDto);
    return await createdDevice.save();
  }

  async findAll(): Promise<DeviceInterface[]> {
    return await this.deviceModel.find().populate(this.populateOpts).exec();
  }

  async findOne(id: ObjectId): Promise<DeviceInterface> {
    return await this.deviceModel.findById(id).populate(this.populateOpts);
  }

  async update(id: ObjectId, deviceDto: DeviceDto): Promise<DeviceInterface> {
    return await this.deviceModel.findByIdAndUpdate(id, deviceDto, {new: true});
  }

  async remove(id: string) {
    return await this.deviceModel.remove({_id: id});
  }
}
