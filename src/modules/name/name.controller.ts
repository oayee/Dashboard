import {Body, Controller, Get, Post} from "@nestjs/common";
import {NameService} from "./name.service";
import {CreateNameDto} from "./dto/create-name.dto";
import {Name} from "./interfaces/name.interface";

@Controller('name')
export class NameController {
  constructor(private readonly nameService: NameService) {}

  @Post()
  async create(@Body() createNameDto: CreateNameDto) {
    this.nameService.create(createNameDto);
  }

  @Get()
  async findAll(): Promise<Name[]> {
    return this.nameService.findAll();
  }
}
