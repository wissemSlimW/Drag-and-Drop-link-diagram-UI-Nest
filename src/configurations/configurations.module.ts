import { Module } from "@nestjs/common";
import { ConfigurationsController } from "./configurations.controller";
import { ConfigurationsService } from "./configurations.service";
import { PrismaService } from "src/prisma.service";



@Module({
     controllers: [ConfigurationsController],
     providers: [ConfigurationsService, PrismaService]
})
export class ConfigurationsModule{}