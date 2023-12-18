import { Injectable } from '@nestjs/common';
import { PrismaService } from "src/prisma.service";
import {Arrow} from "./arrows.model"

@Injectable()
export class ArrowsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllArrows() : Promise<Arrow[]>{
    return this.prismaService.arrow.findMany();
  }

  async createArrow(data: Arrow) : Promise<Arrow | null>{
    return this.prismaService.arrow.create({
      data,
    });
  }

  async updateArrow(id: number, data: Arrow):Promise<Arrow>{
    return this.prismaService.arrow.update({
      where: { id },
      data,
    });
  }
}
