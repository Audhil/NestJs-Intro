import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductModule,
    //  based on tutorial: https://www.youtube.com/watch?v=ulfU5vY6I78&ab_channel=Academind
    MongooseModule.forRoot(
      'mongodb+srv://<user_name>:<pwd>@mynestjscluster.tfn6z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
