import { Module } from "@nestjs/common";
import { ArrowsController } from "./arrows.controller";
import { ArrowsService } from "./arrows.service";
import { PrismaService } from "src/prisma.service";



@Module({
     controllers: [ArrowsController],
     providers: [ArrowsService, PrismaService]
})
export class ArrowsModule{}