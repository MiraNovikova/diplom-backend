import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IBook } from 'src/interface/books';
import { ItemsService } from 'src/service/items/items.service';

@Controller('items')
export class ItemsController {


    constructor(private itemsService: ItemsService) {}

    @Get(':id')
      getBookById(@Param('id') id): Promise<IBook>{
          return this.itemsService.getBookById(id)
      }

      @Get()
      findAllBooks(): Promise<IBook[]> {
          return this.itemsService.findAllBooks();
      }
}