import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import DatabaseConnection from 'database/connection';

// Modules Automatically map all the controllers and its corresponding services of the application

@Module({
  // import other modules, database connection in here
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: DatabaseConnection,
      inject: [ConfigService],
    }),
  ],
  // write the main controller and service for the module here
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
