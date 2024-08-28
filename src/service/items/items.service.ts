import { Injectable } from '@nestjs/common';
import { IBook } from 'src/interface/books';

@Injectable()
export class ItemsService {

  private  books = [
    {"name": "Дж.Р.Р.Толкин", "title": "Властелин Колец. Триллогия", "price": "2200.00", "img": "vk.jpg", "id": "1", "quantity": '' },
    {"name": "Дж.Р.Р.Толкин", "title": "Хоббит", "price": "990", "img": "hb.jpg", "id": "2", "quantity": '' },
    {"name": "Урсула Ле Гуин", "title": "Волшебник Земноморья", "price": "844", "img": "book3.jpg", "id": "3", "quantity": '' },
    {"name": "Патрик Ротфусс", "title": "Имя ветра", "price": "1100", "img": "book4.jpg", "id": "4", "quantity": '' },
    {"name": "Патрик Ротфусс", "title": "Страхи мудреца.Том 1", "price": "1200", "img": "book5.jpg", "id": "5", "quantity": '' },
    {"name": "Макс Фрай", "title": "Чужак", "price": "710", "img": "book6.jpg", "id": "6", "quantity": '' },
    {"name": "Роберт Джордан", "title": "Колесо Времени. Великая охота", "price": "1175", "img": "book7.jpg", "id": "7", "quantity": '' },
    {"name": "Терри Пратчетт", "title": "Цвет волшебства", "price": "668", "img": "cv.jpg", "id": "8", "quantity": '' },
    {"name": "Дж.К.Роулинг", "title": "Гарри Поттер и тайная комната", "price": "1820", "img": "book9.jpg", "id": "9", "quantity": '' },
    {"name": "Мария Семенова", "title": "Волкодав", "price": "475", "img": "book10.jpg", "id": "10", "quantity": '' },
    {"name": "Вера Камша", "title": "Красное на красном", "price": "870", "img": "book11.jpg", "id": "11", "quantity": '' },
    {"name": "Данила Конев", "title": "Пятый мир", "price": "770", "img": "book12.jpg", "id": "12", "quantity": '' },
    {"name": "Яна Лехчина", "title": "Лихо. Медь и мёд", "price": "670", "img": "book13.jpg", "id": "13", "quantity": '' },
    {"name": "Галина Гончарова", "title": "Дракон цвета смерти", "price": "538", "img": "book14.jpg", "id": "14", "quantity": ''},
    {"name": "Диана Джонс", "title": "Ходячий замок", "price": "586", "img": "book15.jpg", "id": "15", "quantity": '' },
    {"name": "Клайв С. Льюис", "title": "Хроники Нарнии", "price": "1097", "img": "book16.jpg", "id": "16", "quantity": '' },
    {"name": "Джордж Р.Р.Мартин", "title": "Дом драконов", "price": "1695", "img": "book17.jpg", "id": "17", "quantity": '' },
    {"name": "Мишель Харрисон", "title": "Щепотка магии", "price": "590", "img": "book18.jpg", "id": "18", "quantity": '' }];
  
  booksModul: any;

  async findAllBooks(): Promise<any> {
    return this.books;
  }

  async getBookById(id): Promise<IBook> {
    return this.booksModul.findById(id);
  }
}





