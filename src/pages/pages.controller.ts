// src/pages/pages.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PagesService } from './pages.service';
import { Page } from './pages.model';

@Controller('pages')
export class PagesController {
  constructor(private readonly prismaService: PagesService) {}

  @Get()
  async getAllPages() {
    return this.prismaService.getAllPages();
  }


  @Post()
  async createPage(@Body() newPage: Page) {
    return this.prismaService.createPage(newPage);
  }

  @Put(':id')
  async updatePage(@Param('id') id: number, @Body() updatedPage: Page) {
    return this.prismaService.updatePage(id, updatedPage);
  }

}
