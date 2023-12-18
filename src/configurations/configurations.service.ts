import { Injectable } from '@nestjs/common';
import { PrismaService } from "src/prisma.service";
import {Configuration} from "./configurations.model"

@Injectable()
export class ConfigurationsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllConfigurations() : Promise<Configuration[]>{
    return this.prismaService.configuration.findMany() as Promise<Configuration[]>
  }

  async createConfiguration(data: Configuration) : Promise<Configuration | null>{
    return this.prismaService.configuration.create({
      data,
    })  as Promise<Configuration | null>;
  }

  async updateConfiguration(id: number, data: Configuration):Promise<Configuration>{
    return this.prismaService.configuration.update({
      where: { id },
      data,
    }) as Promise<Configuration>
  }
}
