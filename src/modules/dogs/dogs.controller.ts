import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateDogDto} from './dto/create-dog.dto';
import {DogsService} from './dogs.service';
import {IDog} from './interfaces/dog.interface';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService){}

  @Post()
  async create(@Body() createDogDto: CreateDogDto) {
    console.log('c ', createDogDto);
    this.dogsService.create(createDogDto);
  }

  @Get()
  async findAll(): Promise<IDog[]> {
    return this.dogsService.findAll();
  }
}
