import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import { ArrowsService } from './arrows.service';
import { Arrow } from './arrows.model';

@Controller('arrows')
export class ArrowsController {
  constructor(private readonly prismaService: ArrowsService) {}

  @Get()
  async getAllArrows() {
    return this.prismaService.getAllArrows();
  }

  @Post()
  async createArrow(@Body() newArrow: Arrow) {
    return this.prismaService.createArrow(newArrow);
  }

  @Put(':id')
  async updateArrow(@Param('id') id: number, @Body() updatedArrow: Arrow) {
    return this.prismaService.updateArrow(id, updatedArrow);
  }
}
