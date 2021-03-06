import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { Models } from './models/model.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      playground: process.env.NODE_ENV ? true : true,
      debug: process.env.NODE_ENV ? true : true,
      autoSchemaFile: true,
    }),
    Models,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
