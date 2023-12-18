import { Injectable } from '@nestjs/common';
import { PrismaService } from "src/prisma.service";
import {Page} from "./pages.model"

@Injectable()
export class PagesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllPages() : Promise<Page[]>{
    const _pages=this.prismaService.page.findMany() as Promise<Page[]>
    return _pages;
  }

  async createPage(data: Page) : Promise<Page | null>{

    return this.prismaService.page.create({
      data,
    }) as Promise<Page | null>;
  }

  async updatePage(id: number, data: Page):Promise<Page>{
    return this.prismaService.page.update({
      where: { id },
      data,
    }) as Promise<Page>;
  }
}
