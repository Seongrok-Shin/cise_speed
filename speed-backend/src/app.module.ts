import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { SubmitterController } from './submitter/submitter.controller';
@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '../.env' }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
  ],
  controllers: [AppController, SubmitterController],
  providers: [AppService],
})
export class AppModule {}
