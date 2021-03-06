// export class Product {
//   id: string;
//   title: string;
//   description: string;
//   price: number;
//
//   constructor(id: string, title: string, description: string, price: number) {
//     this.id = id;
//     this.title = title;
//     this.description = description;
//     this.price = price;
//   }
// }

//  another way of declaring
export class Product {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public price: number,
  ) {}
}
