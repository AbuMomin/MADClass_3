import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Contains all HTTP method request-response handler
// controller’s purpose is to receive requests and deal with routes

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('Win')
  getWin(): string {
    return this.appService.getWin();
  }
}
