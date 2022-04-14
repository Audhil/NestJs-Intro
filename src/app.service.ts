import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'; //  content-type is application/html - it get sets automatically
  }

  //  returning object
  getHelloObject(): { name: string } {
    return { name: 'Audhil' }; //  content-type is application/json - it get sets automatically
  }
}
