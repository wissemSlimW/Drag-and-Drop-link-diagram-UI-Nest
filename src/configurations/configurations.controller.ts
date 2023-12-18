import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import { ConfigurationsService } from './configurations.service';
import { Configuration } from './configurations.model';

@Controller('configurations')
export class ConfigurationsController {
  constructor(private readonly prismaService: ConfigurationsService) {}

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
}
