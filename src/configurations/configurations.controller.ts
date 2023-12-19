import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { Configuration } from './configurations.model';
import { ConfigurationsService } from './configurations.service';

@Controller('configurations')
export class ConfigurationsController {
  constructor(private readonly prismaService: ConfigurationsService) { }

  @Get()
  async getAllConfiguration() {
    return this.prismaService.getAllConfigurations();
  }

  @Post()
  async createConfiguration(@Body() newConfiguration: Configuration) {
    return this.prismaService.createConfiguration(newConfiguration);
  }

  @Put(':id')
  async updateConfiguration(@Param('id') id: number, @Body() updatedConfiguration: Configuration) {
    return this.prismaService.updateConfiguration(id, updatedConfiguration);
  }
  @Delete(':id')
  async deleteConfiguration(@Param('id') id: number,) {
    return this.prismaService.deleteConfiguration(id);
  }
}
