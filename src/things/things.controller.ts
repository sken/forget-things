import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThingsService } from './things.service';
import { CreateThingDto } from './dto/create-thing.dto';
import { UpdateThingDto } from './dto/update-thing.dto';

@Controller('things')
export class ThingsController {
  constructor(private readonly thingsService: ThingsService) {}

  @Post()
  create(@Body() createThingDto: CreateThingDto) {
    return this.thingsService.create(createThingDto);
  }

  @Get()
  findAll() {
    return this.thingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThingDto: UpdateThingDto) {
    return this.thingsService.update(+id, updateThingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thingsService.remove(+id);
  }
}
