import {Controller, Get, HttpStatus, Param, Post} from '@nestjs/common';

@Controller('cats')
export class CatsController {

  @Get(':id')
  findOne(@Param() params) {
    return {
      id: params.id
    };
  }

  @Get()
  findAll() {
    return [1, 2, 3];
  }
}
