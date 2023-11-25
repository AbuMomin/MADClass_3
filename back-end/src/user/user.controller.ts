import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  Query,
} from '@nestjs/common';
import { UserCredDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUser(@Query('email') emailProvided: string) {
    const user = this.userService.getUser(emailProvided);
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    return user;
  }

  @Post('login')
  userLogin(@Body() userCreadential: UserCredDTO): any {
    return this.userService.userAuth(userCreadential);
  }
}
