import { IBook } from "src/interface/books";


export class BookDto implements IBook {
    name: string;
    title: string;
    description: string;
    price: number
    img: string;
    id: string;
    quantity: number;


    constructor(name, title, description, price, img,  id, quantity) {
        this.name = name;
        this.title = title;
        this.description = description;
        this.price = price;
        this.img = img;
        this.id = id;
        this.quantity = quantity;
    }
}