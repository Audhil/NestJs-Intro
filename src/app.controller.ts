import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

//  @Controller() - handles - your-domain.com
//  @Controller(products) - handles - your-domain.com/products
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get()
  // // eslint-disable-next-line @typescript-eslint/ban-types
  // getHelloObject(): {} {
  //   return this.appService.getHelloObject();
  // }

  @Get()
  @Header('Content-Type', 'type/html') //  overrides the default header
  // eslint-disable-next-line @typescript-eslint/ban-types
  getHelloObject(): {} {
    return this.appService.getHelloObject();
  }
}
