import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getWin(): string {
    return 'Hello, this is Win. The Boss';
  }
}
